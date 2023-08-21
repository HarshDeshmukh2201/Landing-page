import React from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
function Team() {
    useEffect(()=>{
        Aos.init();
      },[])
  return (

    <section className='team my-4' id="team">
     <div className='container'>

     <div className=' text-center' >
      <h1 data-aos="fade-up"  data-aos-offset="200"> Our<span className='text-info'> Teams</span></h1>
      <hr className='w-25 m-auto'></hr>
    </div>
    
     <div className="row container my-5" id="contact">
      <div className="col-sm-12 col-md-4 "  data-aos="fade-right"  data-aos-offset="200">
      <div class="card">
      <div class="card-body ourteam text-center">
        <img src={require("../img/s6.jpg")} className='img-fluid rounded-circle border border-info p-2' alt="" />
        <h5 class="card-title mt-4">Rohan</h5>
        <p class="card-text">Front-end Developer</p>
        <a href="#" class="btn btn-primary">Read more</a>
      </div>
    </div>
      </div>
    
  
      <div className="col-sm-12 col-md-4"  data-aos="fade-up"  data-aos-offset="200">
      <div class="card">
      <div class="card-body ourteam text-center">
        <img src={require("../img/s1.jpg")} className='img-fluid rounded-circle border border-info p-2' alt="" />
        <h5 class="card-title mt-4">Pranjal</h5>
        <p class="card-text">Backend-end Developer</p>
        <a href="#" class="btn btn-primary">Read more</a>
      </div>
    </div>
    </div>
    <div className="col-sm-12 col-md-4"  data-aos="fade-left"  data-aos-offset="200">
      <div class="card">
      <div class="card-body ourteam text-center">
        <img src={require("../img/s2.jpg")} className='img-fluid rounded-circle border border-info p-2' alt="" />
        <h5 class="card-title mt-4">Aakash</h5>
        <p class="card-text">Front-end Developer</p>
        <a href="#" class="btn btn-primary">Read more</a>
      </div>
    </div>
    </div>
     </div>

   
     

     </div>

    </section>
  )
}

export default Team