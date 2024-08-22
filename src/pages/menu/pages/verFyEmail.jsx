import React, { useEffect } from 'react'
import { MdVerified } from "react-icons/md";
import './compenent/verify.css'
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function VerFyEmail() {

    const {userId} = useParams()
    const {token} = useParams()


    useEffect(()=>{
        if(userId){
            const VerfyEmail =async()=>{
                await axios.get(`${process.env.REACT_APP_API_URL}/api/v2002/auth/${userId}/verify/${token}`)
                .then((res)=>{
                    toast.success(res.data.message)
                }).catch((err)=>{
                    console.log(err);
                })
            }
            VerfyEmail()
        }
    },[userId])


  return (
    <div className='verify-email'>
      <div className="verify-email-container">
        <h1 className="verify-email-container-h1 text-success">
            <MdVerified/>
        </h1>
        <h3 >
            Email Verified
        </h3>
        <p>
         Your email account has been confirmed
        </p>
        <Link to={'/'}>
        <button className=" verify-botton">
            Login
        </button></Link>
      </div>
    </div>
  )
}

export default VerFyEmail
