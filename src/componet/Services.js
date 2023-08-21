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
    <section className='servies py-5 bg-light' id="servies">
   <div className=' text-center'>
      <h1 data-aos="fade-up"  data-aos-offset="200"> Our<span className='text-info'> servies</span></h1>
      <hr className='w-25 m-auto'></hr>
    </div>

    <div className=" row mt-5 container m-auto  " data-aos="zoom-out-up" data-aos-offset="300">

      <div className="col-sm-12 col-md-4">
        <div class="card">
      <div class="card-body">
      <i class="fa-brands fa-discord bg-primary p-2 text-white rounded mb-2"></i>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div></div>
      <div className="col-sm-12 col-md-4"><div class="card">
      <div class="card-body bg-primary">
      <i class="fa-solid fa-code bg-white p-2 text-Dark rounded mb-2"></i>
        <h5 class="card-title">Web Development</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div></div>
      <div className="col-sm-12 col-md-4"><div class="card">
      <div class="card-body">
      <i class="fa-brands fa-android bg-primary p-2 text-white rounded mb-2"></i>
        <h5 class="card-title">App Development</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div></div>
    </div>
    <div className=" row my-4 container m-auto ">

<div className="col-sm-12 col-md-4">
  <div class="card">
<div class="card-body">
<i class="fa-brands fa-discord bg-primary p-2 text-white rounded mb-2"></i>
  <h5 class="card-title">Graphics Design</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div></div>
<div className="col-sm-12 col-md-4"><div class="card">
<div class="card-body bg-primary">
<i class="fa-brands fa-android bg-white p-2 text-Dark rounded mb-2"></i>
  <h5 class="card-title">App Development</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div></div>
<div className="col-sm-12 col-md-4"><div class="card">
<div class="card-body">
<i class="fa-solid fa-code bg-primary p-2 text-white rounded mb-2"></i>
  <h5 class="card-title">Web Development</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div></div>
</div>
    </section> 
  )
}

export default Services