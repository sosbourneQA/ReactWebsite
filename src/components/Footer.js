import React from 'react';
import { Button } from './Button';
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p>
                    Join the adventure today!
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Join Us</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>How it works</h2>
                        <Link to='/sign-up'>SIGN UP</Link>
                        <Link to='/'>CAREERS</Link>
                        <Link to='/'>TERMS OF SERVICE</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact us</h2>
                        <Link to='/sign-up'>SIGN UP</Link>
                        <Link to='/'>CAREERS</Link>
                        <Link to='/'>TERMS OF SERVICE</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social media</h2>
                        <Link to='/sign-up'>SIGN UP</Link>
                        <Link to='/'>CAREERS</Link>
                        <Link to='/'>TERMS OF SERVICE</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'>SIGN UP</Link>
                        <Link to='/'>CAREERS</Link>
                        <Link to='/'>TERMS OF SERVICE</Link>
                    </div>
                </div>
            </div>
            <section>
                <div>
                    <div className='footer-logo'>
                        <Link
                        className='social-icon-link facebook' 
                        to='/'
                        targets='_blank'
                        aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'/>
                        </Link >
                        <Link
                        className='social-icon-link instagram' 
                        to='/'
                        targets='_blank'
                        aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'/>
                        </Link >
                        <Link
                        className='social-icon-link twitter' 
                        to='/'
                        targets='_blank'
                        aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'/>
                        </Link >
                        <Link
                        className='social-icon-link youtube' 
                        to='/'
                        targets='_blank'
                        aria-label='Youtube'
                        >
                            <i className='fab fa-youtube'/>
                        </Link >
                        <Link
                        className='social-icon-link linkedin' 
                        to='/'
                        targets='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'/>
                        </Link >
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
