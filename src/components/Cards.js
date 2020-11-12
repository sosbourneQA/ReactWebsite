import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our epic cities!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                  <ul className="cards__items">
                    <CardItem 
                      src="images/venice.jpg"
                      text="explore the canals of Venice"
                      label="Italy"
                      path="/services"
                    />
                    <CardItem 
                      src="images/paris.jpg"
                      text="enjoy the food in Paris"
                      label="Italy"
                      path="/services"
                    />
                  </ul>
                  <ul className="cards__items">
                  <CardItem 
                      src="images/amsterdam.jpg"
                      text="immsrse yourself in all manner of things in Amsterdam"
                      label="Italy"
                      path="/services"
                    />
                    <CardItem 
                      src="images/amsterdam.jpg"
                      text="immsrse yourself in all manner of things in Amsterdam"
                      label="Italy"
                      path="/services"
                    />
                  </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
