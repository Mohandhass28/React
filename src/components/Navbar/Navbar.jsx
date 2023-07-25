import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css';
import images from '../../constants/images'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <nav className='app__navber'>
      <div className='app__navber-logo'>
        <img src={images.gericht} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='o__opensans'><a href="#home">Home</a></li>
        <li className='o__opensans'><a href="#about">About</a></li>
        <li className='o__opensans'><a href="#menu">Menu</a></li>
        <li className='o__opensans'><a href="#Laurels">Awards</a></li>
        <li className='o__opensans'><a href="#contact">Cantact</a></li>
      </ul>
      <div className="app__navber-login">
        <a href="#login" className='p_opensans'> Log In/Register </a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>


      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => { setToggleMenu(true) }} />

        {toggleMenu && (
          <div className="app__navber-smallscreen_overlay flex__center ">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => { setToggleMenu(false) }} />

            <ul className='app__navbar-smallscreen-links'>
              <li className='o__opensans'><a href="#home">Home</a></li>
              <li className='o__opensans'><a href="#about">About</a></li>
              <li className='o__opensans'><a href="#menu">Menu</a></li>
              <li className='o__opensans'><a href="#awards">Awards</a></li>
              <li className='o__opensans'><a href="#contact">Cantact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
