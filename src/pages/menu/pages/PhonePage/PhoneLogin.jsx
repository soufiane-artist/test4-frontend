import React from 'react'
import './css/PhoneLogin.css'
import { Link } from 'react-router-dom'
function PhoneLogin() {
  return (
    <div className="Phone-login">
        <div className="phone-login-container text-center text-white">
            <div className="phone-login-text">
            <h4 className='text-white'>Planty</h4>
            <p>inconne your noutuud beauty</p>
            </div>
            <div className="phone-login-btn">
            <Link style={{width:'100%', color:'black',textDecoration:'none'}} to={'/login'}>  <button className='phone-login-btn-login'>Log in</button></Link> 
            <Link style={{width:'100%', color:'white',textDecoration:'none'}} to={'/register'}>  <button className='phone-login-btn-register'>Sign up</button></Link>
            </div>
            
            <p id='copyrite'>Terms of service</p>
        </div>
    </div>
  )
}

export default PhoneLogin
