import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_dark_text_4.png';
import './Header.css';
import { IoIosArrowDown } from 'react-icons/io';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';


function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header className="center-content">
      <nav>
        <div className="icons-container">
          <FaFacebookF className="icon" />
          <FaInstagram className="icon" />
        </div>
        <div className="language-container">
          <p>BG / EN</p>
        </div>
        <div className='navigation-bar'>
          <Link to="/services">Services</Link>
          <Link to="/portfolio"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <span className="link-content">Portfolio<IoIosArrowDown className="vertical-center-icon" /></span>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <Link to="/portfolio/item1">Item 1</Link>
                <Link to="/portfolio/item2">Item 2</Link>
                <Link to="/portfolio/item3">Item 3</Link>
              </div>
            )}
          </Link>
          <Link to="/about">About</Link>
          <Link to='/'><img src={logo} alt='logo' /></Link>
          <Link to="/shop">Shop</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/press">Press</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
