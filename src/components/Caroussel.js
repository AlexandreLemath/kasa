import React, { useState } from 'react';
import '../styles/Caroussel.scss';

// Import your custom images
import leftArrowImage from '../assets/images/left-arrow.png';
import rightArrowImage from '../assets/images/right-arrow.png';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button onClick={handlePrevClick} className="carousel-button left">
          <img src={leftArrowImage} alt="Flèche gauche" />
        </button>
      )}
      <div className="carousel-image-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="carousel-image" />
        {images.length > 1 && (
          <div className="carousel-pagination">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
      {images.length > 1 && (
        <button onClick={handleNextClick} className="carousel-button right">
          <img src={rightArrowImage} alt="Flèche droite" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
