import React from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Contact() {
    useEffect(()=>{
        Aos.init();
      },[])
  return (
    <section className='contact bg-light py-5'>
      <div className="container">
        <div className="text-center my-5">
          <h1 data-aos="fade-up"  data-aos-offset="200">Feel Free <span className='text-primary'>to Connect</span></h1>
          <hr className='w-25 m-auto'></hr>
        </div>
        <div className="row">
        <div className="col-sm-12 col-md-6 "  data-aos="fade-left"  data-aos-offset="200">
          <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">
      Email
    </label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">
      Password
    </label>
    <input type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">
      Address
    </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress"
      placeholder="1234 Main St"
    />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">
      Address 2
    </label>
    <input
      type="text"
      className="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">
      City
    </label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">
      State
    </label>
    <select id="inputState" className="form-select">
      <option selected="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">
      Zip
    </label>
    <input type="text" className="form-control" id="inputZip" />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">
      Sign in
    </button>
  </div>
</form>
          </div>
          <div className="col-sm-12 col-md-6">
         <img src={require("../img/contact.jpg")}className='img-fluid img-thumbnail p-2'></img>

          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Contact