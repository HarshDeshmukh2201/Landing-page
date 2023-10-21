import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {HiArrowCircleUp} from 'react-icons/hi';



function ToScroller() {
    const [visible ,setVisible ]= useState(false)
     const goTotop =()=>{
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }
const listen =()=>{
    let heightToHidden = 250;
    const winScroll= document.body.scrollTop || document.documentElement.scrollTop;
  console.log(winScroll)

    if(winScroll>heightToHidden){
        setVisible(false)
    }else{
        setVisible(true)
    }
}

    useEffect(()=>{
        window.addEventListener("scroll" ,listen)
    })
  
  return (
    <>
    <div  onClick={goTotop} className={visible ? "d-none   ":"rounded-circle bg-info text-center text-white  posit  "} style={{width:"75px" ,height:"75px " }} > < HiArrowCircleUp/> </div>
    
    </>
 )
}

export default ToScroller