import React, { useState } from 'react';

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  const prev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div className="flex">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full transition-transform duration-300 ${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <img src={item} alt="Carousel item" className="w-full" />
          </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-0 p-2">&lt;</button>
      <button onClick={next} className="absolute right-0 p-2">&gt;</button>
    </div>
  );
};

export default Carousel;
