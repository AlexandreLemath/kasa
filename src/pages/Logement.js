import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../components/Caroussel';
import logementsData from '../data/logements.json';
import '../styles/Logement.scss';
import Collapse from '../components/Collapse';
import filledStarImage from '../assets/images/stars.png';  
import emptyStarImage from '../assets/images/starsvide.png';

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundLogement = logementsData.find((logement) => logement.id === id);
    if (!foundLogement) {
      navigate('/error');
    } else {
      setLogement(foundLogement);
    }
  }, [id, navigate]);

  if (!logement) {
    return null;
  }

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = parseInt(rating, 10);
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        stars.push(
          <img 
            key={i} 
            src={filledStarImage} 
            alt="Filled star" 
            className='star filled' 
          />
        );
      } else {
        stars.push(
          <img 
            key={i} 
            src={emptyStarImage} 
            alt="Empty star" 
            className='star' 
          />
        );
      }
    }

    return <div className='star-rating'>{stars}</div>;
  };

  return (
    <div className='main'>
      <Carousel className="carousel" images={logement.pictures} />
      <div className='title-and-name'>
        <h1 className='logement-title'>{logement.title}</h1>
        <div className='author desktop-only'>
          <img 
            src={logement.host.picture} 
            alt={logement.host.name} 
            className='author-image'
          />
          <p className='author-name'>{logement.host.name}</p>
        </div>
      </div>
      <p className='city-name'>{logement.location}</p>

      {/* Div pour les tags et les étoiles pour la version desktop */}
      <div className='tag-and-stars'>
        <div className='tags'>
          {logement.tags.map((tag, index) => (
            <button key={index} className='tag-button'>{tag}</button>
          ))}
        </div>
        {renderStars(logement.rating)}
      </div>

      {/* Nouvelle div pour afficher les tags en version mobile */}
      <div className='tags-mobile'>
        <div className='tags'>
          {logement.tags.map((tag, index) => (
            <button key={index} className='tag-button'>{tag}</button>
          ))}
        </div>
      </div>

      <div className='author-and-stars-mobile'>
        <div>{renderStars(logement.rating)}</div>
        <div className='author'>
          <img 
            src={logement.host.picture} 
            alt={logement.host.name} 
            className='author-image'
          />
          <p className='author-name'>{logement.host.name}</p>
        </div>
      </div>

      <div className='collapse-container'> 
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Equipement">{logement.equipments.join(', ')}</Collapse>
      </div>
    </div>
  );
};

export default Logement;

