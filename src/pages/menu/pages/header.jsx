import React from 'react'
import '../css/page1.css'
import {  toast } from 'react-toastify';

function Header({setLogin,setregister}) {
    const contactbtn = ()=>{
        toast.warning('Please try loging in to your account')
      }

      //https://res.cloudinary.com/dvivzto6g/image/upload/v1723814231/m1l3anmwhl4amtdyzach.png

    return (
    <div className="menu-header col-12">
        <div className="menu-header-container">
            <div className="menu-header-logo">
              <img src="https://res.cloudinary.com/dvivzto6g/image/upload/v1723814231/m1l3anmwhl4amtdyzach.png" alt="" />   <h1>META<span style={{color:'yellow'}}>2</span>FX</h1>
            </div>
            <div className="menu-header-scrollbar">
                <a href="/service" className="menu-header-scrollbar-a">Service</a>
                <a href="/about" className="menu-header-scrollbar-a">About</a>
                <a onClick={contactbtn} href="#" className="menu-header-scrollbar-a">Contact</a>
            </div>
            <div className="menu-header-button">
                <button className="menu-header-btn-Login" onClick={()=>setLogin(true)}>Login</button>
                <button className="menu-header-btn-Register" onClick={()=>setregister(true)}>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Header
