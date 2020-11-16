import React from 'react';
import '../../App.css';
import HeroElement from '../HeroElement';
import Cards from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroElement/> 
            <Cards/>
            <Footer />
        </>
    )
}

export default Home; 