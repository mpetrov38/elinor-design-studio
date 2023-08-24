import React from 'react'
import logo from '../../images/logo_dark_text_4.png';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { TiMail } from 'react-icons/ti';
import { HiOutlinePhone } from 'react-icons/hi';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='upper-footer-section'>
        <span>
          <img src={logo} />
          <span>
            <FaFacebookF />
            <AiOutlineInstagram />
            <BiLogoLinkedin />
          </span>
        </span>
        <span>
          <h3>PAGES</h3>
          <span>Services</span>
          <span>Portfolio</span>
          <span>About</span>
          <span>Shop</span>
          <span>Contact</span>
        </span>
        <span>
          <h3>USEFUL LINKS</h3>

          <span>Useful links</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Press</span>
          <span>Journal</span>
        </span>
        <span>
          <h3>CONTACTS</h3>
          <span><TiMail />studio@elinorinteriors.com</span>
          <span><HiOutlinePhone />081122345 / Sofia, Bulgaria</span>
          <span><HiOutlinePhone />081122345 / New York, USA</span>
        </span>
        <span>
          <h3>NEWSLETTER</h3>
          <span>Email address</span>
          <input type='text' placeholder='ivan.ivanov@gmail.com'></input>
          <span>Subscribe</span>
        </span>
      </div>
      <div className='lower-footer-section'>
        <span>Copyright 2023 Elinor Design Studio</span>
        <span>Made with love and code by Fundamental studio</span>
      </div>
    </div>
  )
}

export default Footer