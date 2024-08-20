import React, { useEffect, useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import './css/LoginPhone.css'
import HeaderPhone from '../PhonePage/header';
import Sidibar from '../PhonePage/Sidibar';
import { MdEmail } from "react-icons/md";
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import { FaUser ,FaFacebook ,FaGooglePlus } from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux'
import { CloseRegister, RegisterUser } from '../../../../redux/api/authApi';
import {ColorRing} from 'react-loader-spinner'
import { toast } from 'react-toastify';
import swal from 'sweetalert';




function RegisterPhone({sidiabrH,setSidibarH,sidibar,setsidibar   }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register} = useSelector(state => state.auth)


    const [username,setUsername] = useState('')
    const [email,setEmail] = useState("")
    const [password,setPass] = useState("")
    const [eye,setEye] = useState(false)
    const [loading,setLoading] = useState(false)

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
    const registerUser = async()=>{
        if(username.length === 0){
            return toast.error('Please enter your username')
        }
        if(email.length === 0){
            return toast.error('Please enter your email')
        }
        if(password.length === 0){
            return toast.error('Please enter your password')
        }
        setLoading(true)
        await dispatch(RegisterUser({username,email,password}))
        setLoading(false)
    }

    useEffect(()=>{
        if(register) {
            swal({
              title : ('Log in to your email account'),
              icon : 'success',
            }).then(async(isOk) => {
              if(isOk){
                toast.success('we are waiting for you')
                await dispatch(CloseRegister())
              }
            })
          }
    },[register])

  return (
    <div className="LoginPone">
            {sidiabrH && <Sidibar sidibar={sidibar}   setSidibarH={setSidibarH} setsidibar={setsidibar} />}
            <HeaderPhone sidiabrH={sidiabrH}  setSidibarH={setSidibarH}  sidibar={sidibar}  setsidibar={setsidibar} />
            <div className="LoginPone-container text-white">
           
            <h2>
                Create Account
            </h2>
                <div className="login-phone-inp">
                    <div className="login-phone-inp-email">
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text"  placeholder='username'/>
                    <a href="#">
                        <FaUser />
                    </a>
                    </div>
                    <div className="login-phone-inp-email">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Email'/>
                    <a href="#">
                        <MdEmail />
                    </a>
                    </div>
                    <div className="login-phone-inp-pass">
                        <input value={password} onChange={(e)=>setPass(e.target.value)} id='pass' type="password" placeholder='Password' />
                        <a href="#">{eye ? <FaEye onClick={watchF}/> : <FaEyeSlash onClick={watch}/>}
                        </a>
                    </div>
                    <button onClick={registerUser} className="login-phone-login">
                    {loading ?   (<ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={["black","black","black","black","black"]}
                    />) : "Sing Up"}
                    </button>
                </div>
                <a href="#" style={{fontSize:'24px',textDecoration:'none',color:'yellow'}}><FaFacebook /> <FaGooglePlus /></a>
                <p id='copyrite' >Don't have an account ? <span ><Link style={{color:'yellow',textDecoration:'underline'}} to={'/login'}>Sign in</Link></span></p>
        </div>
    </div>
  )
}

export default RegisterPhone
