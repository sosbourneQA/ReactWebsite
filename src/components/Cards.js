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
                      text="explore the canals of venice"
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
