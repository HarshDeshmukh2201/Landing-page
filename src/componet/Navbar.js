import React, { useState ,useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
 const [active, setActive]=useState("home");


 const listen =()=>{
  
  const winScroll= document.body.scrollTop || document.documentElement.scrollTop;


  if(winScroll<608){
     setActive("home")
  } else if (winScroll<1338.6666259765624){
  //  setActive("about")
  }else if ( winScroll<1993){
  // setActive("services")
  }else if ( winScroll<2661){
  //  setActive("team")
  }
   
    else{
   //   setActive("contact")
   
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

const team =()=>{
  setActive("team")
}

const contact =()=>{
  setActive("contact")
}



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="#">
          Nav<span className="text-info">tech</span>
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2  fs-6 mb-lg-0 text-center">
            <li className="nav-item">
              <Link
                to="/"
                smooth={true}
                offset={-10}
                duration={1000}
                className={active === "home" ?"nav-link active text-info fw-bold":"nav-link active"}
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
                className={active === "about"?"nav-link active text-info fw-bold":" nav-link active"}
                aria-current="page"
                onClick={about}
                style={{cursor: "pointer"}}
               
               >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  className={active === "services"?"nav-link active text-info fw-bold":" nav-link active"}
                  aria-current="page"
                  onClick={services}
                  style={{cursor: "pointer"}}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="team"
                  spy={true}
                  smooth={true}
                  offset={-170}
                  duration={1000}
                  className={active === "team"?"nav-link active text-info fw-bold":" nav-link active"}
                  aria-current="page"
                  onClick={team}
                  style={{cursor: "pointer"}}>

                    
                Our team
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={350}
                duration={1000}
                className={active === "contact"?"nav-link active text-info fw-bold":" nav-link active"}
                aria-current="page"
                style={{cursor: "pointer"}}
                onClick={contact}>
               
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
