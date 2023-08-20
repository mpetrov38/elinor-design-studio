import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo_dark_text_4.png';
import './Header.css';

function Header() {
  return (
    <header className="center-content">
      <nav >
        <div className='navigation-bar'>
          <span><Link to="/services">Services</Link></span>
          <span><Link to="/portfolio">Portfolio</Link></span>
          <span><Link to="/about">About</Link></span>
          <Link to='/'><img src={logo} alt='logo' /></Link>
          <span><Link to="/shop">Shop</Link></span>
          <span><Link to="/journal">Journal</Link></span>
          <span><Link to="/press">Press</Link></span>
          <span><Link to="/contact">Contact</Link></span>
        </div>
      </nav>
    </header>
  );
}

export default Header