import React from 'react'
import signature from '../../images/signature.png';
import heroImg from '../../images/hero image.png';
import projectTintyava from '../../images/Rectangle 5.png';
import projectMandur from '../../images/About us image.png';
import aboutUsImg from '../../images/About us image (1).png';
import shopImage from '../../images/Rectangle 13.png';
import shopImageTwo from '../../images/Rectangle 14.png';
import shopImageThree from '../../images/Rectangle 15.png';
import blogPic from '../../images/blue pic 1.png';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {


  return (
    <div className='home-page'>
      <span className='home-container'>
        <img src={heroImg} />
        <h1>Redifining luxury in interior design</h1>
        <p>Shaping the essence of living into precisely crafted spaces<br /> where one can grow, breath, connect, adore.</p>
        <img src={signature} alt="signature" />
      </span>
      <div className='latest-projects-container'>
        <div className='latest-projects'>
          <h2>Latest Projects</h2>
          <span><Link to="/portfolio">SEE PORTFOLIO</Link></span>
        </div>

        <div className='latest-projects-cards'>
          <div className='card'>
            <img src={projectTintyava}></img>
            <div className='card-text'>
              <span>Project Tintyava</span>
              <span><Link to="/portfolio">VIEW DETAILS</Link></span>
            </div>
          </div>
          <div className='card'>
            <img src={projectMandur}></img>
            <div className='card-text'>
              <span className='card-title'>Project Mandur</span>
              <span><Link to="/portfolio">VIEW DETAILS</Link></span>
            </div>
          </div>
        </div>
      </div>
      <div className='about-us-services-container' style={{ margin: "0px", padding: "0px" }}>
        <div className='about-us-card'>
          <div className='about-us-text'>
            <h2>Elegant flow</h2>
            <p>A great design tells a story.Discover our story and design <br /> approach to creating flawless interiors.</p>
            <span><Link to="/about">ABOUT US</Link></span>
          </div>
          <img src={projectMandur}></img>
        </div>
        <div>
          <div className='about-us-card'>
            <img src={aboutUsImg}></img>
            <div className='about-us-text'>
              <h2>Redifining luxury</h2>
              <p>Luxury in interior design has evolved, and redifining its meaning is <br /> at the heart of our philosophy and design approach.</p>
              <span><Link to="/services">VIEW SERVICES</Link></span>
            </div>
          </div>
        </div>
      </div>
      <div className='shop-favorites-text'>
        <h2>Shop our favorites</h2>
        <span><Link to="/shop">Shop All</Link></span>
      </div>
      <div className='shop-favorites-container'>
        <div className='shop-card'>
          <img src={shopImage}></img>
          <div className='card-text'>
            <span className='card-title'>Vintage chair</span>
            <span><Link to="/shop">SHOP</Link></span>
          </div>
        </div>
        <div className='shop-card'>
          <img src={shopImageTwo}></img>
          <div className='card-text'>
            <span className='card-title'>Vintage chair</span>
            <span><Link to="/shop">SHOP</Link></span>
          </div>
        </div>
        <div className='shop-card'>
          <img src={shopImageThree}></img>
          <div className='card-text'>
            <span className='card-title'>Vintage chair</span>
            <span><Link to="/shop">SHOP</Link></span>
          </div>
        </div>
      </div>

      <div className='blog-container'>
        <div className='shop-favorites-text'>
          <h2>Check out our blog</h2>
          <span><Link to="/blog">VIEW ALL</Link></span>
        </div>

        <div className='latest-projects-cards latest-projects-container'>
          <div className='card'>
            <img src={blogPic}></img>
            <div className='card-text blog-text'>
              <span>Dec 23,2015<li>5 min read</li></span>
              <h2>Blog article heading here</h2>
              <span>As a warehouse manager, you would understand that handling warehouse <br /> operations are a massive task </span>
              <span><Link to="/portfolio">READ MORE</Link></span>
            </div>
          </div>
          <div className='card'>
            <img src={blogPic}></img>
            <div className='card-text blog-text'>
              <span>Dec 23,2015<li>5 min read</li></span>
              <h2>Blog article heading here</h2>
              <span>As a warehouse manager, you would understand that handling warehouse <br /> operations are a massive task </span>
              <span><Link to="/portfolio">READ MORE</Link></span>
            </div>
          </div>
        </div>
      </div>
      <div className='about-us-services-container'>
        <div className='about-us-card'>
          <div className='about-us-text'>
            <h2>Redifining minimalistic design <br /> for your own home</h2>
            <p>To create timeless, interior spaces that inspire tranquility,
              <br /> elevate functionality, and reflect the unique personality and
              <br />value of our client.
            </p>
            <span><Link to="/contact">SEND AN ENQUIRE</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home