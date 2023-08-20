import React from 'react'
import signature from '../../images/signature.png';
import heroImg from '../../images/hero image.png';
import projectTintyava from '../../images/Rectangle 5.png';
import projectMandur from '../../images/About us image.png';
import aboutUsImg from '../../images/About us image (1).png' 

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
    </div>
  )
}

export default Home