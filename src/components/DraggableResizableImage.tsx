'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface DraggableResizableImageProps {
  src: string;
  alt: string;
  initialWidth?: number;
  initialHeight?: number;
}

export default function DraggableResizableImage({
  src,
  alt,
  initialWidth = 800,
  initialHeight = 1000,
}: DraggableResizableImageProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeEdge, setResizeEdge] = useState<string>('');
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;
        setPosition((prev) => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }));
        setDragStart({ x: e.clientX, y: e.clientY });
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;

        let newWidth = resizeStart.width;
        let newHeight = resizeStart.height;
        let newX = position.x;
        let newY = position.y;

        if (resizeEdge.includes('right')) {
          newWidth = Math.max(100, resizeStart.width + deltaX);
        }
        if (resizeEdge.includes('left')) {
          newWidth = Math.max(100, resizeStart.width - deltaX);
          newX = position.x + (resizeStart.width - newWidth);
        }
        if (resizeEdge.includes('bottom')) {
          newHeight = Math.max(100, resizeStart.height + deltaY);
        }
        if (resizeEdge.includes('top')) {
          newHeight = Math.max(100, resizeStart.height - deltaY);
          newY = position.y + (resizeStart.height - newHeight);
        }

        setSize({ width: newWidth, height: newHeight });
        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragStart, position.x, position.y, resizeStart, resizeEdge]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('resize-handle')) {
      return;
    }
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    e.preventDefault();
  };

  const handleResizeMouseDown = (edge: string) => (e: React.MouseEvent) => {
    setIsResizing(true);
    setResizeEdge(edge);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    });
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {/* Main Image */}
      <div
        onMouseDown={handleMouseDown}
        className="rounded-lg overflow-hidden shadow-xl w-full h-full relative"
      >
        <Image
          src={src}
          alt={alt}
          width={size.width}
          height={size.height}
          className="w-full h-full object-cover pointer-events-none select-none"
          quality={95}
          priority
          draggable={false}
        />
      </div>

      {/* Resize Handles */}
      {/* Corners */}
      <div
        className="resize-handle absolute w-4 h-4 bg-blue-500 rounded-full -top-2 -left-2 cursor-nw-resize hover:bg-blue-600 transition-colors"
        onMouseDown={handleResizeMouseDown('top-left')}
      />
      <div
        className="resize-handle absolute w-4 h-4 bg-blue-500 rounded-full -top-2 -right-2 cursor-ne-resize hover:bg-blue-600 transition-colors"
        onMouseDown={handleResizeMouseDown('top-right')}
      />
      <div
        className="resize-handle absolute w-4 h-4 bg-blue-500 rounded-full -bottom-2 -left-2 cursor-sw-resize hover:bg-blue-600 transition-colors"
        onMouseDown={handleResizeMouseDown('bottom-left')}
      />
      <div
        className="resize-handle absolute w-4 h-4 bg-blue-500 rounded-full -bottom-2 -right-2 cursor-se-resize hover:bg-blue-600 transition-colors"
        onMouseDown={handleResizeMouseDown('bottom-right')}
      />

      {/* Edges */}
      <div
        className="resize-handle absolute w-full h-2 bg-blue-500/50 -top-1 left-0 cursor-n-resize hover:bg-blue-600/50 transition-colors"
        onMouseDown={handleResizeMouseDown('top')}
      />
      <div
        className="resize-handle absolute w-full h-2 bg-blue-500/50 -bottom-1 left-0 cursor-s-resize hover:bg-blue-600/50 transition-colors"
        onMouseDown={handleResizeMouseDown('bottom')}
      />
      <div
        className="resize-handle absolute w-2 h-full bg-blue-500/50 top-0 -left-1 cursor-w-resize hover:bg-blue-600/50 transition-colors"
        onMouseDown={handleResizeMouseDown('left')}
      />
      <div
        className="resize-handle absolute w-2 h-full bg-blue-500/50 top-0 -right-1 cursor-e-resize hover:bg-blue-600/50 transition-colors"
        onMouseDown={handleResizeMouseDown('right')}
      />

      {/* Info Badge */}
      <div className="absolute -top-8 left-0 bg-black/75 text-white text-xs px-2 py-1 rounded">
        Click & drag to move • Grab edges to resize
      </div>
    </div>
  );
}
