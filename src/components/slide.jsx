import React, { useState, useEffect } from 'react';
import './slide.css';

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentSlide, images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div 
        
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;