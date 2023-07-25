import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Footer.css';
import { UilFacebookF, UilTwitter, UilInstagram } from '@iconscout/react-unicons'

const Footer = () => (
  <div className="app__footer app__bg section__padding" >
    <div className='app__footer-cover'>
      <div className="app__footer-contact">
        <h1 className='app__footer' style={{color:'#FFFFFF'}}>Contact Us</h1>
        <p className='app__footer-p' style={{color:'#AAAAAA'}}>70/33A, Sundaram Colony, Suramangalam Main Road, Jawahar Mill Opposite</p>
        <p className='app__footer-p' style={{color:'#AAAAAA'}}>91+ 9345727810</p>
        <p className='app__footer-p' style={{color:'#AAAAAA'}}>91+ 9791731357</p>
      </div>
      <div className="app__footer-logo">
        <img src={images.gericht} alt="logo" />
        <p className='app_footer-logo_p'style={{color:'#AAAAAA'}}>“The best way to find yourself is to lose yourself in the service of others.”</p>
        <SubHeading />
        <UilFacebookF/>
        <UilTwitter />
        <UilInstagram />
      </div>
      <div className="app__footer-work">
        <h1 className='app__footer-work_content'style={{color:'#FFFFFF'}}>Working Hours</h1>
        <p className='app__footer-work_p'style={{color:'#AAAAAA'}}>Monday-Friday:</p>
        <p style={{color:'#AAAAAA'}}>08:00 am -12:00 am</p>
        <p style={{color:'#AAAAAA'}}>Saturday-Sunday:</p>
        <p style={{color:'#AAAAAA'}}>07:00am -11:00 pm</p>
      </div>
    </div>
  </div>
);

export default Footer;
