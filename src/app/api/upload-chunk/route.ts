import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile, unlink, readdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

interface ChunkMetadata {
  chunkIndex: number;
  totalChunks: number;
  fileName: string;
  fileSize: number;
  fileType: string;
  chunkSize: number;
}

// Directory to store temporary chunks
const UPLOAD_DIR = join(process.cwd(), 'uploads');
const CHUNKS_DIR = join(UPLOAD_DIR, 'chunks');

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const chunk = formData.get('chunk') as Blob;
    const metadataStr = formData.get('metadata') as string;

    if (!chunk || !metadataStr) {
      return NextResponse.json(
        { error: 'Missing chunk or metadata' },
        { status: 400 }
      );
    }

    const metadata: ChunkMetadata = JSON.parse(metadataStr);
    const { chunkIndex, totalChunks, fileName, fileSize, fileType } = metadata;

    // Create upload directories if they don't exist
    if (!existsSync(UPLOAD_DIR)) {
      await mkdir(UPLOAD_DIR, { recursive: true });
    }
    if (!existsSync(CHUNKS_DIR)) {
      await mkdir(CHUNKS_DIR, { recursive: true });
    }

    // Create a unique directory for this file's chunks
    const fileId = `${fileName.replace(/[^a-zA-Z0-9.-]/g, '_')}_${Date.now()}`;
    const fileChunksDir = join(CHUNKS_DIR, fileId);

    if (!existsSync(fileChunksDir)) {
      await mkdir(fileChunksDir, { recursive: true });
    }

    // Save the chunk
    const chunkFileName = `chunk_${chunkIndex}`;
    const chunkPath = join(fileChunksDir, chunkFileName);
    const buffer = Buffer.from(await chunk.arrayBuffer());
    await writeFile(chunkPath, buffer);

    console.log(`Received chunk ${chunkIndex + 1}/${totalChunks} for ${fileName}`);

    // Check if all chunks have been received
    const chunks = await readdir(fileChunksDir);
    const receivedChunks = chunks.filter(f => f.startsWith('chunk_')).length;

    if (receivedChunks === totalChunks) {
      // All chunks received, reassemble the file
      console.log(`All chunks received for ${fileName}. Reassembling...`);

      const finalPath = join(UPLOAD_DIR, fileName);
      const chunksToMerge: Buffer[] = [];

      // Read all chunks in order
      for (let i = 0; i < totalChunks; i++) {
        const chunkPath = join(fileChunksDir, `chunk_${i}`);
        const chunkData = await readFile(chunkPath);
        chunksToMerge.push(chunkData);
      }

      // Merge all chunks into final file
      const finalBuffer = Buffer.concat(chunksToMerge);
      await writeFile(finalPath, finalBuffer);

      console.log(`File ${fileName} reassembled successfully (${fileSize} bytes)`);

      // Clean up chunk files
      for (let i = 0; i < totalChunks; i++) {
        const chunkPath = join(fileChunksDir, `chunk_${i}`);
        await unlink(chunkPath);
      }

      // Remove the chunks directory
      try {
        await readdir(fileChunksDir).then(files => {
          if (files.length === 0) {
            // Directory is empty, we can remove it
            // Note: We don't await this as it's cleanup
            unlink(fileChunksDir).catch(() => {});
          }
        });
      } catch (err) {
        // Ignore errors during cleanup
      }

      return NextResponse.json({
        success: true,
        message: 'File upload complete',
        fileName,
        fileSize,
        fileType,
        path: finalPath,
      });
    }

    // Not all chunks received yet
    return NextResponse.json({
      success: true,
      message: `Chunk ${chunkIndex + 1}/${totalChunks} received`,
      receivedChunks,
      totalChunks,
    });
  } catch (error) {
    console.error('Error handling chunk upload:', error);
    return NextResponse.json(
      { error: 'Failed to process chunk upload' },
      { status: 500 }
    );
  }
}
