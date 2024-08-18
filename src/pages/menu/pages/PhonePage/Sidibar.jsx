import React from 'react'
import '../../css/phonePage.css'
import { IoCloseSharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { MdHomeRepairService,MdContactPhone  } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import {  toast } from 'react-toastify';

function Sidibar({sidibar,
    setSidibarH,setsidibar}) {

      const navigate = useNavigate()

      const contactbtn = ()=>{
        toast.warning('Please try logging in to your account')
        navigate('/login')
        setsidibar(true)
        setSidibarH(false)
      }

  return (
    <div className="SidibarPhone col-10 ">
             <div style={{flexDirection:'column'}} className="Phonepage-header-container">
              <a href="#" style={{width:'100%'}} className="Phonepage-header-sidibar text-white">
              {!sidibar && <IoCloseSharp onClick={()=>setsidibar(true)+setSidibarH(false)}/>}
              </a>
              <div className="Phonepage-header-container-text">
                <h3 onClick={()=>navigate('/login')+setsidibar(true)+setSidibarH(false)}><span><FaSignInAlt /></span>
                Sign in</h3>
                <h3 onClick={()=>navigate('/register')+setsidibar(true)+setSidibarH(false)}><span><TiUserAdd /></span>
                Sign Up</h3>
                <h3 onClick={()=>navigate('/service')}><span><MdHomeRepairService /></span>
                Service</h3>
                <h3 onClick={contactbtn} href="#"><span><MdContactPhone />
                </span> Contact</h3>
                <h3 onClick={()=>navigate('/about')}><span><FcAbout /></span> About</h3>
              </div>
              <div className="Phonepage-header-container-bottom">
              <img src="https://res.cloudinary.com/dvivzto6g/image/upload/v1723814231/m1l3anmwhl4amtdyzach.png" alt="" />
               <h3 className='text-white'>META<span style={{color:'yellow'}}>2</span>FX</h3>
              </div>
            </div>
    </div>
  )
}

export default Sidibar
