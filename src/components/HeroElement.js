import React from 'react';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='images/romeSquare.jpg' alt=''></img>
            <h1>The smart was to discover a city</h1>
            <p>Download and get exploring</p>
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
                      
                </Button>
                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn-large'>
                    GET STARTED  
                </Button>
            </div>
        </div>
    )
}