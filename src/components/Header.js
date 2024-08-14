// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets/images/logo.png'; // Assurez-vous d'avoir un logo ici

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Kasa Logo" className="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
};

export default Header;
