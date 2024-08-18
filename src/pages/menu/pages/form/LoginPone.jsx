import React, { useEffect, useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import './css/LoginPhone.css'
import HeaderPhone from '../PhonePage/header';
import Sidibar from '../PhonePage/Sidibar';
import { MdEmail } from "react-icons/md";
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { CloseRegister, LoginUser } from '../../../../redux/api/authApi';
import {useDispatch, useSelector} from 'react-redux'
import {ColorRing} from 'react-loader-spinner'
import { toast } from 'react-toastify';
import swal from 'sweetalert';



function LoginPone({sidiabrH,setSidibarH,sidibar,setsidibar   }) {
    const [email,setEmail] = useState("")
    const [password,setPass] = useState("")
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const dispatch  = useDispatch()
    const {user} = useSelector(state => state.auth)

    const [eye,setEye] = useState(false)

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
        if(password.length === 0){
            return toast.error('Please enter your password')
        }
        if(password.length === 0){
            return toast.error('Please enter your password')
        }
        setLoading(true)
        await dispatch(LoginUser({email,password}))
        setTimeout(()=>{
            setLoading(false)
            navigate('/')
        },3000)
    }


  return (
    <div className="LoginPone">
            {sidiabrH && <Sidibar sidibar={sidibar}   setSidibarH={setSidibarH} setsidibar={setsidibar} />}
            <HeaderPhone sidiabrH={sidiabrH}  setSidibarH={setSidibarH}  sidibar={sidibar}  setsidibar={setsidibar} />
            <div className="LoginPone-container text-white">
            <h3 className="back-icons">
            <IoIosArrowBack onClick={()=>navigate(-1)} />
            </h3>
            <h2>
                Welcome Back
            </h2>
                <div className="login-phone-inp">
                    <div className="login-phone-inp-email">
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email"  placeholder='Email'/>
                    <a href="#">
                        <MdEmail />
                    </a>
                    </div>
                    <div className="login-phone-inp-pass">
                        <input onChange={(e)=>setPass(e.target.value)} value={password} id='pass' type="password" placeholder='Password' />
                        <a href="#">{eye ? <FaEye onClick={watchF}/> : <FaEyeSlash onClick={watch}/>}
                        </a>
                    </div>
                    <button onClick={loginUser} className="login-phone-login">
                    {loading ? <ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={["black","black","black","black","black"]}
                    /> : "Login"} 
                    </button>
                </div>
                <a href="/reset-password" style={{color:'yellow'}}><span className='text-white'>Forgat</span> Password?</a>
                <p id='copyrite' >Don't have an account ? <span ><Link style={{color:'yellow',textDecoration:'underline'}} to={'/register'}>Sign Up</Link> </span></p>
        </div>
    </div>
  )
}

export default LoginPone
