import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';
import '../styles/Footer.scss'
import logo from '../assets/images/footer-logo.png'; // Assurez-vous d'avoir un logo ici
const Footer  =  () => {
     return(
        <footer className='footer'>
        <img src= {logo} alt='Kasa  Logo' className='footer-logo'/> 
        <p>     © 2020 Kasa. All rights reserved    </p>

        </footer>
     ) ; 
}



export default Footer 