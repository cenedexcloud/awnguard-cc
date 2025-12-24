'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DraggableGalleryProps {
  images: string[];
  altPrefix: string;
}

export default function DraggableGallery({ images: initialImages, altPrefix }: DraggableGalleryProps) {
  const [images, setImages] = useState(initialImages);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null) return;

    const newImages = [...images];
    const draggedItem = newImages[draggedIndex];

    // Remove the dragged item
    newImages.splice(draggedIndex, 1);
    // Insert it at the drop position
    newImages.splice(dropIndex, 0, draggedItem);

    setImages(newImages);
    setDraggedIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          className={`aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-move ${
            draggedIndex === index ? 'opacity-50' : ''
          }`}
        >
          <Image
            src={image}
            alt={`${altPrefix} ${index + 1}`}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
}
