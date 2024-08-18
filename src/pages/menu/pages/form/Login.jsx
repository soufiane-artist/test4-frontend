import React, { useEffect, useState } from 'react'
import './css/Login.css'
import { MdEmail } from "react-icons/md";
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import {useDispatch, useSelector} from 'react-redux'
import { CloseRegister, LoginUser } from '../../../../redux/api/authApi';
import { Link, useNavigate } from 'react-router-dom';
import {ColorRing} from 'react-loader-spinner'
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Login({setLogin,setregister}) {
    
    const [eye,setEye] = useState(false)
    const [loading,setLoading] = useState(false)
    const dispatch  = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector(state => state.auth)

    const [email,setEmail] = useState("")
    const [password,setPass] = useState("")

    const watch = ()=>{
        const pass = document.getElementById('pass')
        pass.type ='text'
        setEye(true)
    }

    const watchF = ()=>{
        const pass = document.getElementById('pass')
        pass.type ='password'
        setEye(false)
    }

    const loginUser = async ()=>{


        if(email.length === 0){
            return toast.error('Please enter your email')
        }
        if(password.length === 0){
            return toast.error('Please enter your password')
        }
       setLoading(true)
       await dispatch(LoginUser({email,password}))
        setLoading(false)
    }

    



  return (
    <div className="Login col-12">
        <div className="Login-container">
            <div className="Login-container-left col-6">
                <div className="Login-container-left-container text-white">
                    <div className="text-Login-container-left">
                    <h2>Welcome to META2FX</h2>
                    <p>Welcome to META2FX, your trusted platform for secure and efficient currency trading. Join our community and start trading with confidence.</p>
                    </div>
                    <div className="text-Login-container-bottom">
                        <h3 onClick={()=>setregister(true)+setLogin(false)} className="text-Login-container-bottom-btn">
                        Create an Account
                        </h3>
                    </div>
                </div>
            </div>
            <div className="Login-container-rigth ">
                    <h2 onClick={()=>setLogin(false)} className='Login-container-rigth-btn-close' href="#"><IoIosCloseCircle />
                    </h2>
                <div className="Login-container-rigth-container">
                   <h5>Login </h5>
                   <p>Access your META2FX account to manage your trades, funds, and more.</p>                
                    <div className="Login-container-rigth-container-input">
                    <p>User Name</p>
                    <div className="Input-Username">
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
                        <a href="#">
                        <MdEmail />
                        </a>
                    </div>
                    <p>Remember me</p>
                    <div className="Input-Password">
                        <input value={password} onChange={(e)=>setPass(e.target.value)} type="password" id='pass' placeholder='Password' />
                        <a href="#">{eye ? <FaEye onClick={watchF}/> : <FaEyeSlash onClick={watch}/>}
                        </a>
                    </div>
                    <div className="Input-checked">
                        <input type="checkbox" />
                        <p>Remember me</p>
                        </div>
                    <div className="Login-container-rigth-btn">
                        <button onClick={loginUser}>{loading ? <ColorRing
                            visible={true}
                            height="30"
                            width="30"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={["white","white","white","white","white"]}
                            /> : "Login"} </button>
                                        </div>
                            <Link to={'/reset-password'}>
                    <p style={{cursor:'pointer'}}>Forget <span style={{color:'rgb(0, 0, 119)',fontWeight:'600'}}>Password!</span></p>
                            </Link>
                    </div>               
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Login