import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { PiHandDepositBold } from "react-icons/pi";
import { BsBank2 } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import axios from 'axios'
import { MdVerified } from "react-icons/md";
import './witdraw.css'
import {useSelector} from "react-redux"
import { IoCloseCircleOutline } from "react-icons/io5";
import {ColorRing} from 'react-loader-spinner'
import {ThreeDots} from 'react-loader-spinner'
import {toast} from 'react-toastify'
import { io } from 'socket.io-client';
function Witdraw({setMont}) {

 
  

    const navigate = useNavigate()

    const {user} = useSelector(state => state.auth)
    const [clienSucc,setClientSuccess] = useState(false)
    const [clienErr,setclienErr] = useState(false)
    const [loading,setLoading] = useState(false)
    const [LoadingClien,setLoadingClien] = useState(false)
    const [amount,setAmount] = useState('')
    const [clientId,setclientId] = useState('')


    const userTrim = clientId.trim()
    const amountNumber = parseFloat(amount)


    const getUseById  = async()=>{
       if(clientId.length > 0){
        setLoadingClien(true)
        await axios.get(`${process.env.REACT_APP_API_URL}/api/v2002/auth/user/`+clientId)
        .then((res)=>{
         
          setClientSuccess(true)
          setclienErr(false)
          if(res.data.message){
              setclienErr(true)
              setClientSuccess(false)
          }
          setLoadingClien(false)
        }).catch((err)=>{
          setclienErr(true)
          setClientSuccess(false)
          setLoadingClien(false)
          console.log(err);
        })
       }
    }
  

    const socket = useRef()
    useEffect(()=>{
      socket.current = io ('http://localhost:2002/')
      socket.current.emit('add-user',user._id)
      return ()=>{
          socket.current.off('onlineUsers')
      }
  },[socket])

    const sendMoney = async()=>{
      if(!loading){
        setLoading(true)
      if (!/^\d+$/.test(amount)) {
        toast.error( 'Only numbers must be entered' );
        return setLoading(false)
     }
     await axios.post(`${process.env.REACT_APP_API_URL}/api/v2002/auth/send-money`,{
        from : user._id,
        to : userTrim,
        ment: amountNumber
     }).then((res)=>{
      setLoading(false)
      if(res.data.sendMony){
        toast.success('operation accomplished successfully')
        setTimeout(()=>{
        setTimeout("")
          setclientId("")
          setAmount('')
        },2000)
      }
      if(res.data.sendMony){
        socket.current.emit("send-mony",{
          from : user._id,
          to : clientId,
          ment: amountNumber
        }) 
      }
      if(res.data.message){
        toast.error(res.data.message)
      }
     }).catch((error)=>{
      console.log(error);
      setLoading(false)
     })
      }
    }

  return (
    <div className="Account">
        <div className="Account-container">
            <div className="account-btn-close col-12">
            <h1 onClick={()=>navigate(-1)} className='text-white'>
              <FaArrowRight/>
            </h1>
            </div>
            <div className="WhitDraw">
                <h3>Transfer Funds Securely</h3>
                <p>A verification message is sent after initiating a financial transaction, such as transferring funds or making a payment. This ensures the security and accuracy of the operation.</p>
                <div className="WhitDraw-input">
                    <p>Client ID Verified Successfully</p>
                    <div className="WhiteDraw-input-Client-id">
                    <input value={clientId} onChange={(e)=>setclientId(e.target.value)} type="text" placeholder='Client-id' />
                    <h5 onClick={getUseById}><FaSearch/></h5>
                    </div>
                    {clienSucc &&  <h4 ><span style={{color:'green',fontSize:'18px'}}> <MdVerified />  </span> 
                                    set user success</h4> }
                                    {LoadingClien && <ThreeDots
                            visible={true}
                            height="30"
                            width="30"
                            color="white"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />}
                            {clienErr && <h4><span style={{color:'red',fontSize:'18px'}}> <IoCloseCircleOutline />  </span> 
                            Client ID Not Found</h4>}
                            <p>Amount to Transfer</p>
                    <div className="WhiteDraw-input-amount">
                    <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Amount' />
                    <h5 className='WhiteDraw-input-amount-h5'><IoLogoUsd/></h5>
                    </div>
                    <div className="whitdraw-input-check">
                    <p>I agree to the terms and conditions for this financial transfer.</p>
                    <input type="checkbox" name="" id="" />
                    </div>      
                    <button onClick={sendMoney} className='whitdraw-input-send'>{loading ? <ColorRing
                  visible={true}
                  height="30"
                  width="30"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={['white', 'white', 'white', 'white', 'white']}
                  /> : 'Send'}</button>                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Witdraw
