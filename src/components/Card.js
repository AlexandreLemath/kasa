// src/components/Card.js
import React from 'react';
import '../styles/Card.scss';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();

  console.log('Card props:', { id, title, cover }); // Ajoutez ce journal pour vérifier les props

  const cardStyle = {
    backgroundImage: `url(${cover})`
  };

  const handleClick = () => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="card" style={cardStyle} onClick={handleClick}>
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
