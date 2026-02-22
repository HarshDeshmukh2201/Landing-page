
import { useEffect } from 'react';
import './App.css';



import Aos from 'aos';
import 'aos/dist/aos.css'
import About from './componet/About';
import Services from './componet/Services';
import WhyChooseUs from './componet/WhyChooseUs';
import Process from './componet/Process';
import Portfolio from './componet/Portfolio';
import Testimonials from './componet/Testimonials';
import FAQ from './componet/FAQ';
import Contact from './componet/Contact';
import Team from './componet/Team';
import Navbar from './componet/Navbar';
import Header from './componet/Header';
import Footer from './componet/Footer';

import ToScroller from './componet/ToScroller';



function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      once: true
    })
  },[])

  return (
    <>
 

 
 
  

<Header/>
<Navbar/>
<About/>
<Services/>
<WhyChooseUs/>
<Process/>
<Portfolio/>
<Testimonials/>
<FAQ/>
<Team/>
<Contact/>
<ToScroller/>
<Footer/>


 






 





  
  
    


    </>
  
  );
}

export default App;
