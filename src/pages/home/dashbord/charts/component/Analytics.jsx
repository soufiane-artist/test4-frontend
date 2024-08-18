import React, { useEffect, useState } from 'react'
import './css/Deal.css'
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Analytices({setAccount}) {

    const {user} = useSelector(state=>state.auth)
    

  return (
    <div className="Account">
        <div className="DealNotifs-container">
        <div className="account-btn-close col-12 ">
            <h1 className='text-primary' onClick={()=>setAccount(false)} >
              <FaArrowRight/>
            </h1>
            </div>
          <div className="DealNotif-navbar">
          <div className="DealNotifs-deal-amount">
                <h5>Amount: <span>{user?.amount?.toFixed(2)} </span></h5>
                <h5>Equity: <span>65.25</span></h5>
                <h5>Margin: <span>2006,00</span></h5>
                <h5>Free Margin <span>332.25</span></h5>
                <h5>Margin Level (%) <span>402.25</span></h5>
            </div>
            <div className="DealNotifs-deal-position">
                <h1>Positions</h1>
            </div>
          <div className="DealNotifs-deal col-12">
            <div className="DealNotifs-deal-left">
              <h3>XAUUSD <span style={{color:'red'}} >sell 0.03</span></h3>
              <h5>2323.15 → 2035.32</h5>
            </div>
            <div className="DealNotifs-deal-rigth">
              <h5>{new Date().toDateString()} </h5>
              <h3 style={{color:'rgb(36, 113, 255)'}}>100.17</h3>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Analytices
