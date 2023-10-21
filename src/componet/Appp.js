import React from 'react'
import { useForm } from "react-hook-form";
//  

function Appp() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

  const onSubmit2 =(data)=>{
    const userData = JSON.parse(localStorage.getItem(data.email));

    if(userData){
      if(userData.password === data.password){
        alert(userData.name + " You Are Successfully Logged In");
      }else{
        console.log("Email or Password is not matching with our record");
      }
    }
    reset()
  }
  return (
  <>
     <div className='d-flex justify-content-center mt-4'>
 <p className="title">Login Form</p>
 </div>


 <form className="App" onSubmit={handleSubmit(onSubmit2)}>
     <input type="email" {...register("email", { required: true })} />
     {errors.email && <span style={{ color: "red" }}>
         *Email* is mandatory </span>}
     <input type="password" {...register("password")} />
     <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
 </form>
  
  </>
  )
}

export default Appp
