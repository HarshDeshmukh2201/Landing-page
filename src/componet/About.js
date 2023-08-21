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
    <seaction className="about " id="
    about">
  <div className="container my-5 ">
   <div className=' text-center'>
     <h1 data-aos="fade-up"  data-aos-offset="200"
   >About<span className='text-info'> me</span></h1>
     <hr className='w-25 m-auto'></hr>
   </div>

   <div className='row'
   >
      <div className='col-sm-12 col-md-6 my-4' data-aos="zoom-out-down" data-aos-offset="200">
     <h1> what do you <span className='text-info'>what to know?</span></h1>
    <p className='p-2 fs-5'>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos soluta tenetur non possimus sequi eius harum enim praesentium repellat dignissimos, doloribus modi, assumenda ex rerum in! Nam animi illo earum?
    </p>
    
   <button type="button" className="button-font btn btn-light">more about me</button>

<div className="accordion my-4" id="accordionExample">
<div class="accordion-item">
<h2 class="accordion-header">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  My hobbies
  </button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
 My Qualification
  </button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
  </div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header">
  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
 My Dreams
  </button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
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