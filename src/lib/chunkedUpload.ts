export const CHUNK_SIZE = 500 * 1024; // 500KB in bytes

export interface ChunkUploadOptions {
  file: File;
  uploadUrl: string;
  chunkSize?: number;
  onProgress?: (progress: number) => void;
  onChunkComplete?: (chunkIndex: number, totalChunks: number) => void;
  headers?: Record<string, string>;
}

export interface ChunkMetadata {
  chunkIndex: number;
  totalChunks: number;
  fileName: string;
  fileSize: number;
  fileType: string;
  chunkSize: number;
}

/**
 * Splits a file into chunks of specified size
 */
export function splitFileIntoChunks(file: File, chunkSize: number = CHUNK_SIZE): Blob[] {
  const chunks: Blob[] = [];
  let offset = 0;

  while (offset < file.size) {
    const chunk = file.slice(offset, offset + chunkSize);
    chunks.push(chunk);
    offset += chunkSize;
  }

  return chunks;
}

/**
 * Uploads a file in chunks to the backend
 */
export async function uploadFileInChunks({
  file,
  uploadUrl,
  chunkSize = CHUNK_SIZE,
  onProgress,
  onChunkComplete,
  headers = {},
}: ChunkUploadOptions): Promise<void> {
  const chunks = splitFileIntoChunks(file, chunkSize);
  const totalChunks = chunks.length;

  console.log(`Uploading ${file.name} in ${totalChunks} chunks of ${chunkSize / 1024}KB each`);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const metadata: ChunkMetadata = {
      chunkIndex: i,
      totalChunks,
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      chunkSize: chunk.size,
    };

    const formData = new FormData();
    formData.append('chunk', chunk);
    formData.append('metadata', JSON.stringify(metadata));

    try {
      const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          ...headers,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload chunk ${i + 1}/${totalChunks}: ${response.statusText}`);
      }

      // Call progress callback
      if (onProgress) {
        const progress = ((i + 1) / totalChunks) * 100;
        onProgress(progress);
      }

      // Call chunk complete callback
      if (onChunkComplete) {
        onChunkComplete(i, totalChunks);
      }

      console.log(`Chunk ${i + 1}/${totalChunks} uploaded successfully`);
    } catch (error) {
      console.error(`Error uploading chunk ${i + 1}/${totalChunks}:`, error);
      throw error;
    }
  }

  console.log(`File ${file.name} uploaded successfully in ${totalChunks} chunks`);
}

/**
 * Upload multiple files in chunks
 */
export async function uploadMultipleFilesInChunks(
  files: File[],
  uploadUrl: string,
  options?: {
    chunkSize?: number;
    onFileProgress?: (fileIndex: number, progress: number) => void;
    onFileComplete?: (fileIndex: number, fileName: string) => void;
    headers?: Record<string, string>;
  }
): Promise<void> {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    await uploadFileInChunks({
      file,
      uploadUrl,
      chunkSize: options?.chunkSize,
      headers: options?.headers,
      onProgress: (progress) => {
        if (options?.onFileProgress) {
          options.onFileProgress(i, progress);
        }
      },
    });

    if (options?.onFileComplete) {
      options.onFileComplete(i, file.name);
    }
  }
}
