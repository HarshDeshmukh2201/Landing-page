import React from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Process() {
    useEffect(()=>{
        Aos.init();
      },[])

  return (
    <section className='process py-5 bg-light' id="process">
        <div className='container'>
            <div className='text-center mb-5'>
                <h1 data-aos="fade-up">How We <span className='text-info'>Work</span></h1>
                <hr className='w-25 m-auto'></hr>
                <p className='mt-3' data-aos="fade-up" data-aos-delay="200">Our streamlined process ensures a smooth and enjoyable experience</p>
            </div>

            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="300">
                    <div className="process-step text-center">
                        <div className="step-number mb-3">
                            <span className="step-circle">1</span>
                        </div>
                        <div className="step-icon mb-3">
                            <i className="fas fa-handshake fa-2x text-primary"></i>
                        </div>
                        <h5 className="step-title">Consultation</h5>
                        <p className="step-description">We discuss your vision, requirements, and preferences to understand your needs.</p>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="400">
                    <div className="process-step text-center">
                        <div className="step-number mb-3">
                            <span className="step-circle">2</span>
                        </div>
                        <div className="step-icon mb-3">
                            <i className="fas fa-calendar-check fa-2x text-primary"></i>
                        </div>
                        <h5 className="step-title">Planning</h5>
                        <p className="step-description">We create a detailed plan including timeline, locations, and shot list for your session.</p>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="500">
                    <div className="process-step text-center">
                        <div className="step-number mb-3">
                            <span className="step-circle">3</span>
                        </div>
                        <div className="step-icon mb-3">
                            <i className="fas fa-camera fa-2x text-primary"></i>
                        </div>
                        <h5 className="step-title">Shooting</h5>
                        <p className="step-description">Professional photography session where we capture all the special moments.</p>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="600">
                    <div className="process-step text-center">
                        <div className="step-number mb-3">
                            <span className="step-circle">4</span>
                        </div>
                        <div className="step-icon mb-3">
                            <i className="fas fa-edit fa-2x text-primary"></i>
                        </div>
                        <h5 className="step-title">Editing</h5>
                        <p className="step-description">Expert photo editing and retouching to bring out the best in every image.</p>
                    </div>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="700">
                    <div className="process-step text-center">
                        <div className="step-number mb-3">
                            <span className="step-circle">5</span>
                        </div>
                        <div className="step-icon mb-3">
                            <i className="fas fa-share fa-2x text-primary"></i>
                        </div>
                        <h5 className="step-title">Delivery</h5>
                        <p className="step-description">Final edited photos delivered in high resolution with online gallery access.</p>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="800">
                    <div className="process-step text-center">
                        <div className="step-number mb-3">
                            <span className="step-circle">6</span>
                        </div>
                        <div className="step-icon mb-3">
                            <i className="fas fa-smile fa-2x text-primary"></i>
                        </div>
                        <h5 className="step-title">Satisfaction</h5>
                        <p className="step-description">Your complete satisfaction is our priority. We offer revisions until you're happy.</p>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 mb-4' data-aos="fade-up" data-aos-delay="900">
                    <div className="process-contact p-4 bg-white rounded shadow">
                        <h4 className="text-center mb-3">Ready to Start Your Project?</h4>
                        <p className="text-center mb-4">Contact us today to discuss your photography needs and get started on creating beautiful memories.</p>
                        <div className="text-center">
                            <a href="#contact" className="btn btn-primary btn-lg">Get Started <i className="fas fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Process