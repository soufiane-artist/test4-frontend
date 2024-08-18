import React, { useEffect, useState } from 'react'
import './skrill.css'
import './SkrillWithdrawal.css'
//import Country from '../../Country';
import {ThreeDots} from 'react-loader-spinner'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";


import { FaArrowRight } from "react-icons/fa";


function MasterCardPull({imgBank}) {
  const [money,setmoney] = useState('0.00')
  const [loading,setLoding] = useState(false)
    const navigate = useNavigate()

    
  useEffect(()=>{
    const inPmoney = document.getElementById('inp-money')
    window.onload = ()=>{
      inPmoney.focus()
    }
  },[])

  const widrawMoney = ()=>{
    toast.error('You cannot currently withdraw from this bank')
  }


  return (
    <div className="skrill">
 <div className="account-btn-close  col-12">
            <h1 onClick={()=>navigate(-1)} className='text-dark'>
              <FaArrowRight/>
            </h1>
         </div>
         <img className='imgSrc' src={imgBank} alt="" />
      <audio id='audio-success' src="short-success-sound-glockenspiel-treasure-video-game-6346.mp3"></audio>
      <p style={{width:'85%'}}> Complete your withdrawal process by providing the necessary details below.
      </p>
      <div className="inp-money-withdrawale">
        <input id='inp-money'  value={money} onChange={(e)=>setmoney(e.target.value)} type="number" />
        <h4>usd</h4>
      </div>
      <h3 className='your-balance-metabank'>Meta-Bank <span style={{color:'black',fontSize:'14px'}}> Balance : </span>450 USD </h3>
     <div className="input-skrill-Withdrawal">
      <h6>
        Bank-Name
      </h6>
      <div className="skrill-Withdrawal-name-bank">
        <input type="text" placeholder='Bank Name'/>
      </div>
      <h6>
        Number Bank
      </h6>
      <div className="skrill-Withdrawal-name-bank">
        <input type="number" placeholder='RIB' />
      </div>
      <h6>
        Code Postale
      </h6>
      <div className="skrill-Withdrawal-name-bank">
        <input type="number" placeholder='Code Postale'/>
      </div>
      <div >
     <div className="btn-withdraw">
     <p >          Make sure all details are correct before proceeding with the withdrawal.
     </p>
      <button onClick={widrawMoney}>
     {loading ? <ThreeDots
                                        visible={true}
                                        height="30"
                                        width="30"
                                        color="white"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        />:'withdraw'}
      </button>
     </div>
      </div>
      </div>       
    </div>
  )
}

export default MasterCardPull
