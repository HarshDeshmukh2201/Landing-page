import React from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Testimonials() {
    useEffect(()=>{
        Aos.init();
      },[])

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Bride",
            img: "team1.jpg",
            text: "Amazing photography! Our wedding photos turned out absolutely stunning. The photographer captured every special moment perfectly. Highly recommend!",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Corporate Client",
            img: "team2.jpg",
            text: "Professional service from start to finish. The team was punctual, creative, and delivered high-quality images for our company event.",
            rating: 5
        },
        {
            id: 3,
            name: "Emma Davis",
            role: "Family Portrait",
            img: "team3.jpg",
            text: "Our family portraits are absolutely beautiful! The photographer made everyone comfortable and captured our family's personality perfectly.",
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return Array.from({length: 5}, (_, i) => (
            <i key={i} className={`fas fa-star ${i < rating ? 'text-warning' : 'text-muted'}`}></i>
        ));
    };

  return (
    <section className='testimonials py-5 bg-light' id="testimonials">
        <div className='container'>
            <div className='text-center mb-5'>
                <h1 data-aos="fade-up">Client <span className='text-info'>Testimonials</span></h1>
                <hr className='w-25 m-auto'></hr>
                <p className='mt-3' data-aos="fade-up" data-aos-delay="200">What our happy clients say about our photography services</p>
            </div>

            <div className='row'>
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className='col-sm-12 col-md-4 mb-4' data-aos="fade-up" data-aos-delay={index * 200}>
                        <div className="card testimonial-card h-100">
                            <div className="card-body text-center">
                                <div className="testimonial-img mb-3">
                                    <img src={require(`../img/${testimonial.img}`)} className='rounded-circle' alt={testimonial.name} />
                                </div>
                                <div className="mb-3">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <p className="card-text mb-3">"{testimonial.text}"</p>
                                <h6 className="card-title text-info">{testimonial.name}</h6>
                                <small className="text-muted">{testimonial.role}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials