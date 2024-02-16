import React, { useState, useEffect } from 'react';
import './slide.css';

const Slideshow2 = ({ images2 }) => {
  const [currentSlide2, setCurrentSlide2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
        setCurrentSlide2((prevSlide) => (prevSlide + 1) % images2.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [currentSlide2, images2.length]);

  return (
    <div className="slideshow-container">
      {images2.map((image, index) => (
        <div 
        
          key={index}
          className={index === currentSlide2 ? 'slide active' : 'slide'}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow2;