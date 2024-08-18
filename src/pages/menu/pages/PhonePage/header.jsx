import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import '../../css/phonePage.css'

function HeaderPhone({setSidibarH,sidibar,setsidibar}) {
  return (
    <div className="Phonepage-header col-12">
        <div className="Phonepage-header-container">
            <a href="#" className="Phonepage-header-sidibar text-white">
                {sidibar && <GiHamburgerMenu onClick={()=>setsidibar(false)+setSidibarH(true)}/>}
             </a>
             <div className="Phonepage-header-container-logo">
              <img src="https://res.cloudinary.com/dvivzto6g/image/upload/v1723814231/m1l3anmwhl4amtdyzach.png" alt="" />
              <h3 style={{color:'white'}}>META<span style={{color:'yellow'}}>2</span>FX</h3>
             </div>
        </div>
    </div>
  )
}

export default HeaderPhone
