'use client';

import ChunkedVideoUpload from '@/components/ChunkedVideoUpload';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VideoUploadPage() {
  const handleUploadComplete = (fileName: string) => {
    console.log('Upload complete:', fileName);
    // You can add additional logic here, like updating a database or showing a notification
  };

  const handleUploadError = (error: Error) => {
    console.error('Upload error:', error);
    // You can add error handling logic here
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Video Upload Demo
            </h1>
            <p className="text-lg text-gray-600">
              Upload your videos in 500KB chunks for reliable and efficient transfer
            </p>
          </div>

          <ChunkedVideoUpload
            onUploadComplete={handleUploadComplete}
            onUploadError={handleUploadError}
            maxSizeMB={500}
          />

          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">1. File Selection</h3>
                <p>Select a video file from your device. The system validates the file type and size.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">2. Chunking</h3>
                <p>Your video is automatically split into 500KB chunks before upload begins.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">3. Upload</h3>
                <p>Each chunk is uploaded sequentially to the server with progress tracking.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">4. Reassembly</h3>
                <p>Once all chunks are received, the server automatically reassembles the complete video file.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Benefits of Chunked Upload</h3>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Better reliability - resume from failed chunks instead of restarting entire upload</li>
              <li>Progress tracking - see exactly how much has been uploaded</li>
              <li>Server compatibility - works with file size limits and timeout restrictions</li>
              <li>Network efficiency - handles poor connections better</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
