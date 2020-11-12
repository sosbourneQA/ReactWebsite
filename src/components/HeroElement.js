import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroElement.css';

function HeroElement() {
    return (
        <div className='hero-container'>
            <img src='images/greyCafe.jpg' alt=''></img>
            <h1>The smart was to discover a city</h1>
            <p>Download the app and get exploring</p>
            <div>
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn-large'>
                    GET STARTED  
                </Button>
                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn-large'>
                    WATCH TRAILER <i className='far fa-play-circle'/>  
                </Button>
            </div>
        </div>
    );
}

export default HeroElement;