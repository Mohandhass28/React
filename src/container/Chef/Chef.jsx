import React from 'react';
import { images } from '../../constants'
import './Chef.css';
import { SubHeading } from '../../components'

const Chef = () => (
  <div className="app__bg app__wrapper section_padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="img chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title='Chef’s Word'/>
        <h1 className='headtext__cormorant'>What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" id='imgs'/>
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit auctor sit iaculis in arcu.Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
          </div>

        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className='p__opensans' style={{color:'gray'}}>Chef & Founder</p>
          <img src={images.sign} alt="sing" />
        </div>
      </div>
  </div>
);

export default Chef;
