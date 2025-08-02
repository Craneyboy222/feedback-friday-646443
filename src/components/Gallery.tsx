import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((src, index) => (
        <img key={index} src={src} alt="Gallery item" className="w-full h-auto" />
      ))}
    </div>
  );
};

export default Gallery;
