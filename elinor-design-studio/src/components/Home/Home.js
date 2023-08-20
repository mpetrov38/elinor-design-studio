import React from 'react'
import signature from '../../images/signature.png';
import './Home.css';
import heroImg from '../../images/hero image.png';
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
      <div className='latest-projects'>
        <h2>Latest Projects</h2>
        <span><Link to="/portfolio">SEE PORTFOLIO</Link></span>
      </div>
    </div>
  )
}

export default Home