import React, { useState ,useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
 const [active, setActive]=useState("home");


const listen =()=>{

  const winScroll= document.body.scrollTop || document.documentElement.scrollTop;

  const sections = [
    { id: "home", offset: 0 },
    { id: "about", offset: 608 },
    { id: "services", offset: 1338 },
    { id: "portfolio", offset: 1993 },
    { id: "testimonials", offset: 2661 },
    { id: "team", offset: 3333 },
    { id: "contact", offset: 4000 }
  ];

  for (let i = sections.length - 1; i >= 0; i--) {
    if (winScroll >= sections[i].offset) {
      setActive(sections[i].id);
      break;
    }
  }
}


useEffect(()=>{
  window.addEventListener("scroll" ,listen)
})

const home = ()=>{
setActive("home")

}

const about =()=>{
  setActive("about")
 
}

const services =()=>{
  setActive("services")
}

const portfolio =()=>{
  setActive("portfolio")
}

const testimonials =()=>{
  setActive("testimonials")
}

const team =()=>{
  setActive("team")
}

const contact =()=>{
  setActive("contact")
}



  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <div className="brand-logo me-2">
            <i className="fas fa-camera text-whitex"></i>
          </div>
          <div className="brand-text">
            <span className="brand-main">LensCraft</span>
            <span className="brand-tag text-primary fw-bold">Photography</span>
          </div>
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                smooth={true}
                offset={-10}
                duration={1000}
                className={`nav-link ${active === "home" ? "active" : ""}`}
                onClick={home}
                style={{cursor: "pointer"}}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className={`nav-link ${active === "about" ? "active" : ""}`}
                aria-current="page"
                onClick={about}
                style={{cursor: "pointer"}}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  className={`nav-link ${active === "services" ? "active" : ""}`}
                  aria-current="page"
                  onClick={services}
                  style={{cursor: "pointer"}}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  className={`nav-link ${active === "portfolio" ? "active" : ""}`}
                  aria-current="page"
                  onClick={portfolio}
                  style={{cursor: "pointer"}}
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="team"
                  spy={true}
                  smooth={true}
                  offset={-170}
                  duration={1000}
                  className={`nav-link ${active === "team" ? "active" : ""}`}
                  aria-current="page"
                  onClick={team}
                  style={{cursor: "pointer"}}>
                Our Team
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={350}
                duration={1000}
                className={`nav-link ${active === "contact" ? "active" : ""}`}
                aria-current="page"
                style={{cursor: "pointer"}}
                onClick={contact}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="navbar-actions d-flex align-items-center ms-3">
            <a href="#contact" className="btn btn-primary btn-sm">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
