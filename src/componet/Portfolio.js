import React, { useState } from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Portfolio() {
    useEffect(()=>{
        Aos.init();
      },[])

    const [filter, setFilter] = useState('all');

    const portfolioItems = [
        { id: 1, category: 'wedding', img: 'p1.jpg', title: 'Wedding Photography' },
        { id: 2, category: 'portrait', img: 'p2.jpg', title: 'Portrait Session' },
        { id: 3, category: 'event', img: 'p3.jpg', title: 'Corporate Event' },
        { id: 4, category: 'nature', img: 'p4.jpg', title: 'Nature Photography' },
        { id: 5, category: 'wedding', img: 'p5.jpg', title: 'Destination Wedding' },
        { id: 6, category: 'portrait', img: 'p6.jpg', title: 'Family Portrait' },
        { id: 7, category: 'event', img: 'p7.jpg', title: 'Birthday Celebration' },
        { id: 8, category: 'nature', img: 'p8.jpg', title: 'Landscape Photography' },
        { id: 9, category: 'wedding', img: 'p9.jpg', title: 'Intimate Wedding' }
    ];

    const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <section className='portfolio py-5' id="portfolio">
        <div className='container'>
            <div className='text-center mb-5'>
                <h1 data-aos="fade-up">Our <span className='text-info'>Portfolio</span></h1>
                <hr className='w-25 m-auto'></hr>
                <p className='mt-3' data-aos="fade-up" data-aos-delay="200">Capturing life's precious moments with creativity and passion</p>
            </div>

            <div className='text-center mb-4' data-aos="fade-up" data-aos-delay="300">
                <button className={`btn ${filter === 'all' ? 'btn-info' : 'btn-outline-info'} mx-2`} onClick={() => setFilter('all')}>All</button>
                <button className={`btn ${filter === 'wedding' ? 'btn-info' : 'btn-outline-info'} mx-2`} onClick={() => setFilter('wedding')}>Weddings</button>
                <button className={`btn ${filter === 'portrait' ? 'btn-info' : 'btn-outline-info'} mx-2`} onClick={() => setFilter('portrait')}>Portraits</button>
                <button className={`btn ${filter === 'event' ? 'btn-info' : 'btn-outline-info'} mx-2`} onClick={() => setFilter('event')}>Events</button>
                <button className={`btn ${filter === 'nature' ? 'btn-info' : 'btn-outline-info'} mx-2`} onClick={() => setFilter('nature')}>Nature</button>
            </div>

            <div className='row'>
                {filteredItems.map((item, index) => (
                    <div key={item.id} className='col-sm-12 col-md-6 col-lg-4 mb-4' data-aos="zoom-in" data-aos-delay={index * 100}>
                        <div className="card portfolio-card">
                            <div className="portfolio-img-container">
                                <img src={require(`../img/${item.img}`)} className='card-img-top portfolio-img' alt={item.title} />
                                <div className="portfolio-overlay">
                                    <h5 className="portfolio-title">{item.title}</h5>
                                    <div className="portfolio-icons">
                                        <i className="fas fa-eye mx-2"></i>
                                        <i className="fas fa-heart mx-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Portfolio