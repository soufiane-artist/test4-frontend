import React from 'react'
import { MdVerified } from "react-icons/md";
import { MdOutlineError } from "react-icons/md";

function EditPass() {
  return (
    <div className="edit-pass-page">
        <h3 className='text-dark'>Change password</h3>
        <h4 className='text-dark'>
        To change your password, please enter your email address
        </h4>
        <input type="email" placeholder='your email'/>
        <button className='btn btn-primary'>Send Email</button>
        <p className='text-dark'><span style={{color:'green'}}><MdVerified /></span> Check your email</p>
        <p className='text-dark'><span style={{color:'red'}}><MdOutlineError /></span> This email is invalid</p>
    </div>
  )
}

export default EditPass
