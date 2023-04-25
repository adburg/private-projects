import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import backgroundImage from '../images/img-11.jpg';
import styles from './Herosection.module.css';


function HeroSection() {
  return (
      <div className={styles.herosection}>
      <h1>IT CONSULTING</h1>
      <p>Cheaper and easier than ever</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
      </div>
      </div>
  );
}

export default HeroSection;
