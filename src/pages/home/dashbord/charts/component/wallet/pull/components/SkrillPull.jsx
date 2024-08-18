import React, { useEffect, useState } from 'react'
import './skrill.css'
import './SkrillWithdrawal.css'
//import Country from '../../Country';
import {ThreeDots} from 'react-loader-spinner'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'
import { useSelector } from 'react-redux'

function SkrillPull({imgBank}) {

    const navigate = useNavigate()
  const {user} = useSelector(state => state.auth)

  const [money,setmoney] = useState('0.00')
  const [loading,setLoding] = useState(false)
  const [emailBank,setEmailBank] = useState('')
  const [bankName,setBankName] = useState('')


  ///auth/SkrillPull

  useEffect(()=>{
    const inPmoney = document.getElementById('inp-money')
    window.onload = ()=>{
      inPmoney.focus()
    }
  },[])

  const widrawMoney = async()=>{
    if(bankName === ''){
      setLoding(false)
      return toast.error('please get your bank-Name')
    }
    if(money < 5){
      setLoding(false)
      return toast.error('please get your amount')
    }
    if(emailBank === ''){
      setLoding(false)
      return toast.error('please get your email-Bank')
    }
    setLoding(true)
  await axios.post(`${process.env.REACT_APP_API_URL}/SkrillPull`,{
      userId : user._id,
      bankName :  bankName,
      amount : money,
      emailBank : emailBank
  }).then((res)=>{
    if(res.data._id){
      toast.success('Withdrawal completed successfully')
      setTimeout(()=>{
        window.location.reload()
      },2000)
    }
    if(res.data.message){
      toast.error(res.data.message)
    }
    setLoding(false)
  }).catch(()=>{
    setLoding(false)
  })
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
      <p style={{width:'85%'}}>Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une ...</p>
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
        <input value={bankName} onChange={(e)=>setBankName(e.target.value)} type="text" placeholder='Bank Name'/>
      </div>
      <h6>
        Banks-Email
      </h6>
      <div className="skrill-Withdrawal-name-bank">
        <input value={emailBank} onChange={(e)=>setEmailBank(e.target.value)} type="text" placeholder='Banks-Email'/>
      </div>
      <div >
     <div className="btn-withdraw">
     <p >Un texte est une série constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une ...</p>
      <button style={{background:'purple'}} onClick={widrawMoney}>
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

export default SkrillPull
