import React, { useState } from "react";
import "../style/CarouselMini.css";

const CarouselMini = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carouselMini">
      <button onClick={prevSlide} className="carouselMini-button">❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carouselMini-image" />
      <button onClick={nextSlide} className="carouselMini-button">❯</button>
    </div>
  );
};

export default CarouselMini;
