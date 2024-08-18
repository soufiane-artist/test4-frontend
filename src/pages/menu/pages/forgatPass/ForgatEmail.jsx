import React, { useState } from 'react'
import './forgat.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import {ColorRing} from 'react-loader-spinner'


function ForgatEmail() {

    const [email,setEmeil] = useState('')
    const [loading,setLoading] = useState(false)


    const send = async(e)=>{
        setLoading(true)
        e.preventDefault()
        await axios.post(`${process.env.REACT_APP_API_URL}/forgotPass`,{
            email:email
        }).then((res)=>{
            if(res.data.message === 'user not found'){
                toast.error(res.data.message)
            }
            if(res.data.messageV){
              toast.success(res.data.messageV)
            }
            setLoading(false)
            setEmeil('')
        })
    }

  return (
    <div className='reset-pass'>
      <div className="reset-pass-container">
        <h2>META<span>2</span>FX</h2>
        <p>Enter your email address below to receive a password reset link. Follow the instructions to regain secure access to your META2FX account.</p>
        <form onSubmit={send} className="form-reset-pass">
            <h3>Email</h3>
            <input value={email} onChange={(e)=>setEmeil(e.target.value)} type="text" placeholder='Emeil' />
            <button className='btn-reset '>{loading ? <ColorRing
                            visible={true}
                            height="30"
                            width="30"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={["white","white","white","white","white"]}
                            /> : "send"} </button>
        </form>
        <Link to={'/'}>
        <p className='Sign-in text-dark'>Don't have an account? <span style={{color:'blue',cursor:'pointer'}}>Sign up</span></p>
        </Link>
        <p className='copiryt-reset'>&copy; META2FX</p>
      </div>
    </div>
  )
}

export default ForgatEmail
