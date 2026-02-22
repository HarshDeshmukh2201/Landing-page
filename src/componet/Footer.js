import React from 'react'

function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand mb-3">
              <div className="brand-logo me-2 p-4">
                <i className="fas fa-camera text-white fa-2x"></i>
              </div>
              <div className="brand-text">
                <h5 className="mb-0">LensCraft Photography</h5>
                <small className="text-white">Capturing Life's Beautiful Moments</small>
              </div>
            </div>
            <p className="footer-description">
              Professional photography services specializing in weddings, events, portraits, and commercial photography.
              We turn your special moments into timeless memories.
            </p>
            <div className="footer-contact">
              <p className="mb-1">+91 7805046531</p>
              <p className="mb-1">harsh2201@gmail.com</p>
              <p className="mb-0">123 Photography St, City, State 12345</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-links">
              <li><a href="#services">Wedding Photography</a></li>
              <li><a href="#services">Event Photography</a></li>
              <li><a href="#services">Portrait Sessions</a></li>
              <li><a href="#services">Commercial Photography</a></li>
              <li><a href="#services">Photo Editing</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="footer-heading">Stay Connected</h6>
            <p>Subscribe to our newsletter for photography tips and special offers.</p>
            <div className="newsletter-signup mb-3">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2024 LensCraft Photography. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="footer-bottom-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
