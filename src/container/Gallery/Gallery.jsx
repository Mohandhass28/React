import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Gallery.css';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'



const Gallery = () => 
{
  const scrollRef = React.useRef(null);

  const scroll = (dircation) =>{
    const { current } = scrollRef;

    if (dircation === 'left'){
      // current.scrollLeft -= 300 ;
    }
    else
    {
      // current.scrollLeft += 300;
    }
  
  }

  return(
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
        <SubHeading title='Instagram'/>
        <h1 className='headtext__cormorant'> Photo Gallery</h1>
        <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button  style={{marginTop:'2rem'}} type='button' className='custom__button'>View More</button>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>

      </div>
      <div className="app__gallery-images_arrow" >
        <BsArrowLeftShort className='galaery__arrow-icon' onClick={scroll('left')} />
        <BsArrowRightShort className='galaery__arrow-icon' onClick={scroll('right')} />
      </div>
    </div>
  </div>
)};

export default Gallery;
