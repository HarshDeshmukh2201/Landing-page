import React from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function About() {
    useEffect(()=>{
        Aos.init();
      },[])
  return (
    <seaction className="about" id="about">
  <div className="container my-5 ">
   <div className=' text-center'>
     <h1 data-aos="fade-up"  data-aos-offset="200"
   >About<span className='text-info'> Us</span></h1>
     <hr className='w-25 m-auto'></hr>
   </div>

   <div className='row'
   >
      <div className='col-sm-12 col-md-6 my-4' data-aos="zoom-out-down" data-aos-offset="200">
     <h1> Passionate <span className='text-info'>Photographers</span></h1>
    <p className='p-2 fs-5'>
     We are a team of professional photographers dedicated to capturing life's most precious moments. With years of experience and a passion for storytelling through images, we specialize in wedding, event, and portrait photography that reflects your unique personality and style.
    </p>
    
   <button type="button" className="button-font btn btn-light">more about me</button>

<div className="accordion my-4" id="accordionExample">
<div className="accordion-item">
<h2 className="accordion-header">
  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  Our Experience
  </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
  <div className="accordion-body">
    With over 10 years of combined experience in professional photography, our team has captured thousands of special moments. We stay updated with the latest techniques and equipment to deliver stunning results.
  </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
 Our Approach
  </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
  <div className="accordion-body">
    We believe every client is unique. Our approach combines technical expertise with artistic vision to create photographs that truly represent your personality and tell your story.
  </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
 Our Promise
  </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
  <div className="accordion-body">
    We promise professional service, timely delivery, and complete satisfaction. Your special moments deserve to be captured beautifully, and we're committed to making that happen.
  </div>
</div>
</div>
</div>
   </div>

   <div className='col-sm-12 col-md-6 m-auto'>
   
     <img  src={ require('../img/s3.jpg')} className='img-fluid img-thumbnail '></img>

   </div>
   </div>
  


  </div>

   </seaction>
  )
}

export default About