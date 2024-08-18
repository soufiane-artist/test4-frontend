import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './css/Deposit.css'
import { PiHandDepositBold } from "react-icons/pi";
import { BsBank2 } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Wallet({setAccount}) {
  return (
    <div className="Account">
        <div className="Account-container">
            <div className="account-btn-close col-12">
            <h1 onClick={()=>setAccount(false)} className='text-white'>
              <FaArrowRight/>
            </h1>
            </div>
            <div className="account-btns">
            <Link className='text-center' style={{color:"#253248",width:'100%'}}  to={'/Dashbord/Deposit'}> <button className='account-btn-deposit'> Dèposit  <span style={{fontSize:'20px'}}><PiHandDepositBold/></span></button></Link>
            <Link  className='text-center' style={{color:"#253248",width:'100%'}} to={'/Dashbord/witdraw'}><button className='account-btn-Transformation'>Transformation <span style={{fontSize:'20px'}}><BiTransferAlt/></span></button></Link>
            <Link  className='text-center' style={{color:"#253248",width:'100%'}} to={'/Dashbord/Pull'}>  <button className='account-btn-Transformation'>pull <span style={{fontSize:'20px'}}><BsBank2/></span> </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Wallet
