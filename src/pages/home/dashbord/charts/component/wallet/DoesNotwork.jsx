import React from 'react'
import './doesNotwork.css'
import { IoIosWarning } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function DoesNotWork({imgBank}) {
    const navigate = useNavigate()


  return (
   <div className="Account ">
    <div className="Account-container bg-white text-center">
    <div className="account-btn-close bg-white col-12">
            <h1 onClick={()=>navigate(-1)} className='text-dark'>
              <FaArrowRight/>
            </h1>
         </div>
         <img className='imgSrc' src={imgBank} alt="" />
    <div className="MetaCard bg-white">
        <div className="MetaCard-nav">
            <div className="MetaCard-nav-left col-12">
                <div className="warning">
                    <h6><span><IoIosWarning/></span>This service is not simple in your country currently </h6>
                </div>
            </div>
        </div>
    </div>
    </div>
   </div>
  )
}

export default DoesNotWork
