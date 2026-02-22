import React, { useState } from 'react'
import { useEffect } from 'react';
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function FAQ() {
    useEffect(()=>{
        Aos.init();
      },[])

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How far in advance should I book your photography services?",
            answer: "We recommend booking at least 2-3 months in advance for weddings and major events. For portrait sessions and smaller events, 2-4 weeks notice is usually sufficient, but popular dates book up quickly."
        },
        {
            question: "Do you provide photography services outside your local area?",
            answer: "Yes! We travel for destination weddings and events. Travel fees may apply depending on the location and distance. Contact us to discuss your specific needs and location."
        },
        {
            question: "How long does it take to receive my edited photos?",
            answer: "Our standard turnaround time is 2-3 weeks for edited photos. Rush orders are available for an additional fee. You'll receive a private online gallery to view and download your images."
        },
        {
            question: "Do you offer engagement or pre-wedding shoots?",
            answer: "Absolutely! We highly recommend engagement sessions as they help us get to know you and your style before the big day. These sessions are typically 1-2 hours and include 20-30 edited photos."
        },
        {
            question: "What is included in your photography packages?",
            answer: "Each package includes professional photography, expert editing, high-resolution digital images, and an online gallery. Additional services like albums, prints, and videography can be added. Contact us for detailed package information."
        },
        
    ];

  return (
    <section className='faq py-5' id="faq">
        <div className='container'>
            <div className='text-center mb-5'>
                <h1 data-aos="fade-up">Frequently Asked <span className='text-info'>Questions</span></h1>
                <hr className='w-25 m-auto'></hr>
                <p className='mt-3' data-aos="fade-up" data-aos-delay="200">Find answers to common questions about our photography services</p>
            </div>

            <div className='row justify-content-center'>
                <div className='col-sm-12 col-lg-8'>
                    <div className="accordion" id="faqAccordion">
                        {faqs.map((faq, index) => (
                            <div key={index} className="accordion-item mb-3 shadow-sm" data-aos="fade-up" data-aos-delay={index * 100}>
                                <h2 className="accordion-header">
                                    <button
                                        className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={activeIndex === index}
                                    >
                                        {faq.question}
                                    </button>
                                </h2>
                                <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                                    <div className="accordion-body">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='text-center mt-5' data-aos="fade-up" data-aos-delay="500">
                <h4>Still have questions?</h4>
                <p className='mb-4'>We're here to help! Contact us directly and we'll be happy to answer any questions you may have.</p>
                <a href="#contact" className="btn btn-primary btn-lg">Contact Us <i className="fas fa-envelope ms-2"></i></a>
            </div>
        </div>
    </section>
  )
}

export default FAQ