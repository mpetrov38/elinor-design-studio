import React from 'react'
import logo from '../../images/logo_dark_text_4.png';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { TiMail } from 'react-icons/ti';
import { HiOutlinePhone } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Footer.css';
import './../Home/Home.css';

function Footer() {
  return (
    <footer>
      <section className='upper-footer-section'>
        <span>
          <img src={logo} />
          <span style={{ paddingTop: "30px", fontSize: "18px", color: "#888681" }}>
            <FaFacebookF />
            <AiOutlineInstagram />
            <BiLogoLinkedin />
          </span>
        </span>
        <span className='content-container'>
          <h3>PAGES</h3>
          <span className="footer-element">Services</span>
          <span className="footer-element">Portfolio</span>
          <span className="footer-element">About</span>
          <span className="footer-element">Shop</span>
          <span className="footer-element">Contact</span>
        </span>
        <span className='content-container'>
          <h3>USEFUL LINKS</h3>
          <span className="footer-element">Privacy Policy</span>
          <span className="footer-element">Cookie Policy</span>
          <span className="footer-element">Press</span>
          <span className="footer-element">Journal</span>
        </span>
        <span className='content-container'>
          <h3>CONTACTS</h3>
          <span className="footer-element"><TiMail style={{ fontSize: "24px" }} />studio@elinorinteriors.com</span>
          <span className="footer-element"><HiOutlinePhone style={{ fontSize: "24px" }} />081122345 / Sofia, Bulgaria</span>
          <span className="footer-element"><HiOutlinePhone style={{ fontSize: "24px" }} />081122345 / New York, USA</span>
        </span>
        <span className='content-container'>
          <h3>NEWSLETTER</h3>
          <span className="footer-element">Email address</span>
          <input type='text' placeholder='ivan.ivanov@gmail.com' style={{ padding: "14px 188px 14px 0px", textAlign: "center" }}></input>
          <span style={{ justifyContent: "flex-end" }}><Link to="/subscribe" >SUBSCRIBE</Link></span>
        </span>
      </section>
      <section className='lower-footer-section'>
        <span className="footer-element">Copyright 2023 Elinor Design Studio</span>
        <span className="footer-element">Made with love and code by Fundamental studio</span>
      </section>
    </footer>
  )
}

export default Footer