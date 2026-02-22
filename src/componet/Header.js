import React from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'


function Header() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (<>
 

<div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
<div className="carousel-indicators">
  <button
    type="button"
    data-bs-target="#hero-carousel"
    data-bs-slide-to={0}
    className="active"
    aria-current="true"
    aria-label="Slide 1"
  />
  <button
    type="button"
    data-bs-target="#hero-carousel"
    data-bs-slide-to={1}
    aria-label="Slide 2"
  />
  <button
    type="button"
    data-bs-target="#hero-carousel"
    data-bs-slide-to={2}
    aria-label="Slide 3"
  />
</div>
<div className="carousel-inner">
  <div className="carousel-item active">
    <div className="hero-slide" style={{backgroundImage: `url(${require('../img/banner.jpg')})`}}>
      <div className="hero-overlay"></div>
      <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-center">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="500">
          <h1 className="display-3 fw-bold mb-4">Capturing Life's <span className="text-warning">Beautiful Moments</span></h1>
          <p className="lead mb-4 fs-4">Professional photography services for weddings, events, and portraits</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-lg me-3 px-4 py-3">Book Now <i className="fas fa-arrow-right ms-2"></i></a>
            <a href="#portfolio" className="btn btn-outline-light btn-lg px-4 py-3">View Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="carousel-item">
    <div className="hero-slide" style={{backgroundImage: `url(${require('../img/banner2.jpg')})`}}>
      <div className="hero-overlay"></div>
      <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-center">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="500">
          <h1 className="display-3 fw-bold mb-4">Your Dream <span className="text-warning">Wedding Photography</span></h1>
          <p className="lead mb-4 fs-4">Creating timeless memories that will last a lifetime</p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary btn-lg me-3 px-4 py-3">View Portfolio <i className="fas fa-images ms-2"></i></a>
            <a href="#about" className="btn btn-outline-light btn-lg px-4 py-3">About Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="carousel-item">
    <div className="hero-slide" style={{backgroundImage: `url(${require('../img/banner1.jpg')})`}}>
      <div className="hero-overlay"></div>
      <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-center">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="500">
          <h1 className="display-3 fw-bold mb-4">Professional <span className="text-warning">Event Coverage</span></h1>
          <p className="lead mb-4 fs-4">Capturing every special moment with creativity and passion</p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary btn-lg me-3 px-4 py-3">Our Services <i className="fas fa-camera ms-2"></i></a>
            <a href="#testimonials" className="btn btn-outline-light btn-lg px-4 py-3">Testimonials</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#hero-carousel"
  data-bs-slide="prev"
>
  <span className="carousel-control-prev-icon" aria-hidden="true" />
  <span className="visually-hidden">Previous</span>
</button>
<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#hero-carousel"
  data-bs-slide="next"
>
  <span className="carousel-control-next-icon" aria-hidden="true" />
  <span className="visually-hidden">Next</span>
</button>
</div>

  </>


  )
}

export default Header;