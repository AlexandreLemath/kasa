// src/components/Home.js
import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';
import '../styles/Home.scss';
import bannerImage from '../assets/images/banner.jpg'; 

const Home = () => {
  console.log('Logements data:', logements); // Ajoutez ce journal pour vérifier les données

  return (
    <main>
      <Banner text="Chez vous, partout et ailleurs" image={bannerImage} />
      <div className="logements">
        {logements.map((logement) => (
          <Card 
            key={logement.id} 
            id={logement.id} 
            title={logement.title} 
            cover={logement.cover} 
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
