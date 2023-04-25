import React from 'react'
import Carditem from './Carditem';
import './Cards.css';

import im9 from '../images/img-9.jpg'
import im2 from '../images/img-2.jpg'
import im3 from '../images/img-3.jpg'
import im10 from '../images/img-10.jpg'
import im8 from '../images/img-8.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore our possibilities!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <Carditem
                src={im9}
                text="Explore solutions to reach new heights"
                label='Services'
                path='/services'
                />
                <Carditem
                src={im2}
                text="We analyse the the numbers for your business"
                label='Services'
                path='/services'
                />
            </ul>
            <ul className="cards__items">
                <Carditem
                src={im3}
                text="Seamless solutions for your IT needs"
                label='Products'
                path='/products'
                />
                <Carditem
                src={im8}
                text="Check out who we are and what we do"
                label='About Us'
                path='/about'
                />
                <Carditem
                src={im10}
                text="Contact us for more information"
                label='Contact'
                path='/contact'
                />
                
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
