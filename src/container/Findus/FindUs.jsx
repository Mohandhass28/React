import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './FindUs.css'


const FindUs = () => (
  <div className="media-setup section__padding flex__center app__bg">
    <div className='app__findus-heading'>
      <h1 className='app_findus-heading_context'>
        <SubHeading title='Contact'/>
      </h1>
      <h1 className='app__find-contect'>Find Us</h1>
      <div />
      <p className='p__opensans' style={{color:'#AAAAAA', marginBottom:'2rem'}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <h1 className='app__findus-context_time'>Opening Hours</h1>
      <p className='my_style p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
      <p className='my_style p__opensans'>Sat – Sun: 10:00 am – 03:00 am</p>
      <button className='custom__button' style={{margin:'3rem 0', backgroundColor:'#DCCA87'}}>View Us</button>
    </div>
    <div className="app__findus-img app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>

  </div>
);

export default FindUs;
