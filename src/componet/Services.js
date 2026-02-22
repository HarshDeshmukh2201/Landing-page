import React from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Services() {
    useEffect(()=>{
        Aos.init();
      },[])
  return (
    <section className='servies py-5 bg-light' id="services">
   <div className=' text-center'>
      <h1 data-aos="fade-up"  data-aos-offset="200"> Our<span className='text-info'> servies</span></h1>
      <hr className='w-25 m-auto'></hr>
    </div>

    <div className=" row mt-5 container m-auto  " data-aos="zoom-out-up" data-aos-offset="300">

      <div className="col-sm-12 col-md-4">
        <div className="card service-card">
      <div className="card-body text-center">
      <i className="fas fa-heart bg-primary p-3 text-white rounded-circle mb-3 fa-2x"></i>
        <h5 className="card-title">Wedding Photography</h5>
        <p className="card-text">Capture your special day with our professional wedding photography services. From engagement shoots to the reception, we document every magical moment.</p>

      </div>
    </div></div>
      <div className="col-sm-12 col-md-4"><div className="card service-card">
      <div className="card-body text-center bg-primary text-white">
      <i className="fas fa-users bg-white p-3 text-primary rounded-circle mb-3 fa-2x"></i>
        <h5 className="card-title">Event Photography</h5>
        <p className=" text-white">Professional coverage for corporate events, parties, and celebrations. We ensure every important moment is beautifully documented.</p>
      
      </div>
    </div></div>
      <div className="col-sm-12 col-md-4"><div className="card service-card">
      <div className="card-body text-center">
      <i className="fas fa-camera bg-primary p-3 text-white rounded-circle mb-3 fa-2x"></i>
        <h5 className="card-title">Portrait Photography</h5>
        <p className="card-text">Beautiful portrait sessions for individuals, families, and professionals. Studio and outdoor options available.</p>

      </div>
    </div></div>
    </div>
    <div className=" row my-4 container m-auto ">

<div className="col-sm-12 col-md-4">
  <div className="card service-card">
<div className="card-body text-center">
<i className="fas fa-tree bg-primary p-3 text-white rounded-circle mb-3 fa-2x"></i>
  <h5 className="card-title">Nature Photography</h5>
  <p className="card-text">Stunning landscape and nature photography. Perfect for travel, real estate, and artistic projects.</p>

</div>
</div></div>
<div className="col-sm-12 col-md-4"><div className="card service-card">
<div className="card-body text-center bg-primary text-white">
<i className="fas fa-edit bg-white p-3 text-primary rounded-circle mb-3 fa-2x"></i>
  <h5 className="card-title">Photo Editing</h5>
  <p className="text-white">Professional photo editing and retouching services. Enhance your images with our expert editing techniques.</p>

</div>
</div></div>
<div className="col-sm-12 col-md-4"><div className="card service-card">
<div className="card-body text-center">
<i className="fas fa-video bg-primary p-3 text-white rounded-circle mb-3 fa-2x"></i>
  <h5 className="card-title">Video Services</h5>
  <p className="card-text">Cinematic wedding videos and event videography. Complete multimedia coverage for your special occasions.</p>

</div>
</div></div>
</div>
    </section> 
  )
}

export default Services