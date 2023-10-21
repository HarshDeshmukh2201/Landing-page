
import { useEffect } from 'react';
import './App.css';



import Aos from 'aos';
import 'aos/dist/aos.css'
import About from './componet/About';
import Services from './componet/Services';
import Contact from './componet/Contact';
import Team from './componet/Team';
import Navbar from './componet/Navbar';
import Header from './componet/Header';
import Footer from './componet/Footer';

import ToScroller from './componet/ToScroller';
import Appp from './componet/Appp';
import { useForm } from "react-hook-form";



function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
 
  const onSubmit = (data) =>{
    localStorage.setItem(data.email, JSON.stringify({ 
      name: data.name, password: data.password 
  }));
  reset()
  console.log(JSON.parse(localStorage.getItem(data.email)));

  }

  return (
    <>
 

 
 
  

<Header/>
<Navbar/>
<About/>
<Services/>
<Team/>
<Contact/>
<ToScroller/>
<Footer/>
<Appp/>

 <div className='d-flex justify-content-center mt-4'>
 <p className="title ">Registration Form</p>

 </div>
 <form className="App" onSubmit={handleSubmit(onSubmit)}>
     <input type="text" placeholder='Name' {...register("name")} />
     <input type="email"  placeholder='Email'{...register("email", { required: true })} />
     {errors.email && <span style={{ color: "red" }}>
         *Email* is mandatory </span>}
     <input type="password" placeholder='Password'{...register("password")} />
     <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
 </form>







 





  
  
    


    </>
  
  );
}

export default App;
