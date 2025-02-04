"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/interfaces";

interface AnimatedImageGalleryProps {
  images: GalleryImage[];
  subpath: string
}

export const AnimatedGallery = ({ images, subpath }: AnimatedImageGalleryProps) => {
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState<number | null>(null);

  const toggleBodyScroll = (disable: boolean) => {
    document.body.style.overflow = disable ? "hidden" : "";
  };

  const openFullScreen = (index: number) => {
    setFullScreenImageIndex(index);
    toggleBodyScroll(true);
  };

  const closeFullScreen = () => {
    setFullScreenImageIndex(null);
    toggleBodyScroll(false);
  };

  const handleSwipe = (direction: "left" | "right") => {
    if (fullScreenImageIndex !== null) {
      if (direction === "left" && fullScreenImageIndex < images.length - 1) {
        setFullScreenImageIndex(fullScreenImageIndex + 1);
      } else if (direction === "right" && fullScreenImageIndex > 0) {
        setFullScreenImageIndex(fullScreenImageIndex - 1);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    (e.target as HTMLElement).dataset.startX = String(touch.clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const startX = parseFloat((e.target as HTMLElement).dataset.startX || "0");
    const deltaX = touch.clientX - startX;

    if (deltaX > 50) {
      handleSwipe("right");
    } else if (deltaX < -50) {
      handleSwipe("left");
    }
  };

  return (
    <div>
      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => openFullScreen(index)}
          >
            <Image
              src={`/images/${subpath}/xs/${image.src}`}
              alt={image.alt}
              width={480}
              height={480}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Image */}
      {fullScreenImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Fullscreen Image with Caption */}
          <figure className="relative w-full max-w-screen-lg flex flex-col items-center">
            <div className="relative w-full max-h-[90vh] flex justify-center">
              <Image
                src={`/images/${subpath}/md/${images[fullScreenImageIndex].src}`}
                alt={images[fullScreenImageIndex].alt}
                width={1200}
                height={900}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            <figcaption className="mt-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md text-center">
              {images[fullScreenImageIndex].alt}
            </figcaption>
          </figure>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-2 rounded"
            onClick={closeFullScreen}
          >
            Cerrar
          </button>

          {/* Navigation Buttons */}
          {fullScreenImageIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-30 text-white px-3 py-2 rounded"
              onClick={() => handleSwipe("right")}
            >
              &lt;
            </button>
          )}
          {fullScreenImageIndex < images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-30 text-white px-3 py-2 rounded"
              onClick={() => handleSwipe("left")}
            >
              &gt;
            </button>
          )}
        </div>
      )}
    </div>
  );
};
