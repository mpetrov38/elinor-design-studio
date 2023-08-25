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
    <main className='home-page'>
      <section className='home-container'>
        <img src={heroImg} />
        <div style={{ fontSize: "40px", marginTop: "28px" }}>Redifining luxury in interior design</div>
        <p style={{ textAlign: "center", fontFamily: "Barlow", letterSpacing: "0px", lineHeight: "25px" }}>Shaping the essence of living into precisely crafted spaces<br /> where one can grow, breath, connect, adore.</p>
        <img src={signature} alt="signature" />
      </section>
      <section className='latest-projects-container' style={{ letterSpacing: "0px", marginTop: "25px" }}>
        <div className='latest-projects' style={{ alignItems: "center" }}>
          <h1 style={{ letterSpacing: "0px" }}>Latest Projects</h1>
          <span><Link to="/portfolio" style={{ color: "#000000" }}>SEE PORTFOLIO</Link></span>
        </div>
        <div className='latest-projects-cards' style={{ marginTop: "45px" }}>
          <div className='card'>
            <img src={projectTintyava}></img>
            <div className='card-text' style={{ alignItems: "center", marginTop: "10px" }}>
              <span style={{ fontSize: "30px", letterSpacing: "0px" }}>Project Tintyava</span>
              <span><Link to="/portfolio">VIEW DETAILS</Link></span>
            </div>
          </div>
          <div className='card'>
            <img src={projectMandur}></img>
            <div className='card-text' style={{ alignItems: "center", marginTop: "10px" }}>
              <span style={{ fontSize: "30px", letterSpacing: "0px" }}>Project Mandur</span>
              <span><Link to="/portfolio">VIEW DETAILS</Link></span>
            </div>
          </div>
        </div>
      </section>
      <section className='about-us-services-container'>
        <div className='about-us-card'>
          <div className='about-us-text align-text-left'>
            <div style={{ fontSize: "50px", letterSpacing: "0px", marginBottom: "20px" }}>Elegant flow</div>
            <p style={{ fontSize: "18px", letterSpacing: "0px" }}>A great design tells a story.Discover our story and design <br /> approach to creating flawless interiors.</p>
            <span><Link to="/about" style={{ fontSize: "18px", marginTop: "20px" }}>ABOUT US</Link></span>
          </div>
          <img src={projectMandur}></img>
        </div>
        <div>
          <div className='about-us-card'>
            <img src={aboutUsImg}></img>
            <div className='about-us-text align-text-left'>
              <div style={{ fontSize: "50px", letterSpacing: "0px", marginBottom: "20px" }}>Redifining luxury</div>
              <p style={{ fontSize: "18px", letterSpacing: "0px" }}>Luxury in interior design has evolved, and redifining its meaning is <br /> at the heart of our philosophy and design approach.</p>
              <span><Link to="/services" style={{ fontSize: "18px", marginTop: "20px" }}>VIEW SERVICES</Link></span>
            </div>
          </div>
        </div>
      </section>
      <section className='shop-favorites-text'>
        <div style={{ fontSize: "50px", letterSpacing: "0px", marginBottom: "60px" }}>Shop our favorites</div>
        <span><Link to="/shop">SHOP ALL</Link></span>
      </section>
      <section className='shop-favorites-container'>
        <div className='shop-card'>
          <img className='shop-image' src={shopImage}></img>
          <div className='card-text'>
            <span className='card-title'>Vintage chair</span>
            <span><Link to="/shop">SHOP</Link></span>
          </div>
        </div>
        <div className='shop-card'>
          <img className='shop-image' src={shopImageTwo}></img>
          <div className='card-text'>
            <span className='card-title'>Vintage chair</span>
            <span><Link to="/shop">SHOP</Link></span>
          </div>
        </div>
        <div className='shop-card'>
          <img className='shop-image' src={shopImageThree}></img>
          <div className='card-text'>
            <span className='card-title'>Vintage chair</span>
            <span><Link to="/shop">SHOP</Link></span>
          </div>
        </div>
      </section>
      <section className='blog-container'>
        <div className='shop-favorites-text'>
          <div style={{ fontSize: "50px", fontWeight: "400", letterSpacing: "0" }}>Check out our blog</div>
          <span><Link to="/blog">VIEW ALL</Link></span>
        </div>
        <div className='latest-projects-cards latest-projects-container'>
          <div className='card'>
            <img src={blogPic}></img>
            <div className='card-text blog-text'>
              <span className='flex-me'><i>Dec 23, 2018</i><li>5min read</li></span>
              <div className='blog-text-heading'>Blog article heading here</div>
              <span style={{fontSize:"18px"}}>As a warehouse manager, you would understand that handling warehouse <br /> operations are a massive task... </span>
              <span style={{ marginTop: "40px", letterSpacing: "0.2rem" }}><Link to="/portfolio">READ MORE</Link></span>
            </div>
          </div>
          <div className='card'>
            <img src={blogPic}></img>
            <div className='card-text blog-text'>
              <span className='flex-me'><i>Dec 23, 2018</i><li>5min read</li></span>
              <div className='blog-text-heading'>Blog article heading here</div>
              <span style={{fontSize:"18px"}}>As a warehouse manager, you would understand that handling warehouse <br /> operations are a massive task... </span>
              <span style={{ marginTop: "40px", letterSpacing: "0.2rem" }}><Link to="/portfolio">READ MORE</Link></span>
            </div>
          </div>
        </div>
      </section>
      <section className='about-us-services-container enquire'>
        <div className='about-us-card'>
          <div className='about-us-text centered-text padding' style={{ letterSpacing: "0px" , }} >
            <div style={{ fontSize: "40px" }}>Redifining minimalistic design <br /> for your own home</div>
            <p style={{ fontSize: "18px" }}>To create timeless, interior spaces that inspire tranquility,
              <br /> elevate functionality, and reflect the unique personality and
              <br />value of our client.
            </p>
            <span style={{ letterSpacing: "0.2rem", marginTop: "20px" }}><Link to="/contact">SEND AN ENQUIRE</Link></span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home