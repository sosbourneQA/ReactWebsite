import React from 'react';
import '../App.css';
import { Button } from'./Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4'></video>
            <h1>The smart way to explore a city</h1>
            <p>Download today</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    WATCH TRAILER
                </Button>
            </div>
        </div>
    )
}

export default HeroSection

