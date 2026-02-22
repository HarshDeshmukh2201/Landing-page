import React from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function WhyChooseUs() {
    useEffect(()=>{
        Aos.init();
      },[])

  return (
    <section className='why-choose-us py-5'>
        <div className='container'>
            <div className='text-center mb-5'>
                <h1 data-aos="fade-up">Why Choose <span className='text-info'>Us</span></h1>
                <hr className='w-25 m-auto'></hr>
                <p className='mt-3' data-aos="fade-up" data-aos-delay="200">What sets us apart from other photography services</p>
            </div>

            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-card text-center p-4 h-100">
                        <div className="feature-icon mb-3">
                            <i className="fas fa-camera fa-3x text-primary"></i>
                        </div>
                        <h5 className="feature-title">Professional Equipment</h5>
                        <p className="feature-text">We use only the latest professional-grade cameras and equipment to ensure the highest quality results.</p>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="400">
                    <div className="feature-card text-center p-4 h-100">
                        <div className="feature-icon mb-3">
                            <i className="fas fa-users fa-3x text-primary"></i>
                        </div>
                        <h5 className="feature-title">Experienced Team</h5>
                        <p className="feature-text">Our photographers have years of experience and are passionate about capturing your special moments.</p>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="500">
                    <div className="feature-card text-center p-4 h-100">
                        <div className="feature-icon mb-3">
                            <i className="fas fa-clock fa-3x text-primary"></i>
                        </div>
                        <h5 className="feature-title">Timely Delivery</h5>
                        <p className="feature-text">We understand the importance of time and always deliver your edited photos within the promised timeframe.</p>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="600">
                    <div className="feature-card text-center p-4 h-100">
                        <div className="feature-icon mb-3">
                            <i className="fas fa-heart fa-3x text-primary"></i>
                        </div>
                        <h5 className="feature-title">Personalized Service</h5>
                        <p className="feature-text">Every client is unique. We tailor our approach to match your vision and personality.</p>
                    </div>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-sm-12 col-md-6 mb-4' data-aos="fade-right" data-aos-delay="300">
                    <div className="stats-card p-4 text-center">
                        <h2 className="stats-number text-white">500+</h2>
                        <p className="stats-label">Happy Clients</p>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 mb-4' data-aos="fade-left" data-aos-delay="300">
                    <div className="stats-card p-4 text-center">
                        <h2 className="stats-number text-white">1000+</h2>
                        <p className="stats-label">Photos Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs