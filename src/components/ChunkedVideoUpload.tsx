'use client';

import { useState, useRef } from 'react';
import { uploadFileInChunks } from '@/lib/chunkedUpload';

interface ChunkedVideoUploadProps {
  onUploadComplete?: (fileName: string) => void;
  onUploadError?: (error: Error) => void;
  acceptedFormats?: string;
  maxSizeMB?: number;
}

export default function ChunkedVideoUpload({
  onUploadComplete,
  onUploadError,
  acceptedFormats = 'video/*',
  maxSizeMB = 500,
}: ChunkedVideoUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [currentChunk, setCurrentChunk] = useState(0);
  const [totalChunks, setTotalChunks] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('video/')) {
      alert('Please select a valid video file');
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      alert(`File size exceeds ${maxSizeMB}MB. Please select a smaller file.`);
      return;
    }

    setSelectedFile(file);
    setUploadStatus('idle');
    setUploadProgress(0);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadStatus('uploading');
    setUploadProgress(0);

    try {
      await uploadFileInChunks({
        file: selectedFile,
        uploadUrl: '/api/upload-chunk',
        onProgress: (progress) => {
          setUploadProgress(Math.round(progress));
        },
        onChunkComplete: (chunkIndex, total) => {
          setCurrentChunk(chunkIndex + 1);
          setTotalChunks(total);
        },
      });

      setUploadStatus('success');
      if (onUploadComplete) {
        onUploadComplete(selectedFile.name);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('error');
      if (onUploadError && error instanceof Error) {
        onUploadError(error);
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setUploadStatus('idle');
    setCurrentChunk(0);
    setTotalChunks(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload Video</h2>

      {/* File Input */}
      <div className="mb-4">
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats}
          onChange={handleFileSelect}
          disabled={isUploading}
          className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* File Info */}
      {selectedFile && (
        <div className="mb-4 p-4 bg-gray-50 rounded border border-gray-200">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">File:</span> {selectedFile.name}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Size:</span> {formatFileSize(selectedFile.size)}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Type:</span> {selectedFile.type}
          </p>
        </div>
      )}

      {/* Upload Progress */}
      {uploadStatus === 'uploading' && (
        <div className="mb-4">
          <div className="mb-2 flex justify-between text-sm text-gray-600">
            <span>Uploading... {uploadProgress}%</span>
            <span>Chunk {currentChunk} of {totalChunks}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Status Messages */}
      {uploadStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800 font-semibold">✓ Upload successful!</p>
        </div>
      )}

      {uploadStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-red-800 font-semibold">✗ Upload failed. Please try again.</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading || uploadStatus === 'success'}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isUploading ? 'Uploading...' : 'Upload Video'}
        </button>

        <button
          onClick={handleReset}
          disabled={isUploading}
          className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Info Text */}
      <p className="mt-4 text-xs text-gray-500">
        Videos will be uploaded in 500KB chunks for better reliability and progress tracking.
      </p>
    </div>
  );
}
