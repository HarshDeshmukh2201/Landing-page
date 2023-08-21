
import { useEffect } from 'react';
import './App.css';


import Aos from 'aos';
import 'aos/dist/aos.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './componet/About';
import Services from './componet/Services';
import Contact from './componet/Contact';
import Team from './componet/Team';
import ScrollToTop from "./componet/ScrollToTop"
import Navbar from './componet/Navbar';
import Hearder from "./componet/Header"
import Footer from './componet/Footer';



function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
 
 <BrowserRouter>
 
     <ScrollToTop/>
     <Navbar/>
      
<Routes>
<Route path='/' element={<Hearder/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/team' element={<Team/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>
<Footer/>

 </BrowserRouter> 


  
  
    


    </>
  
  );
}

export default App;
