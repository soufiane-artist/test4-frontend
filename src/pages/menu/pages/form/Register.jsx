import React, { useEffect, useState } from 'react'
import './css/Login.css'
import { MdEmail } from "react-icons/md";
import { FaEye ,FaEyeSlash ,FaUser } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import {useDispatch, useSelector} from 'react-redux'
import { CloseRegister, RegisterUser } from '../../../../redux/api/authApi';
import { toast } from 'react-toastify';
import {ColorRing} from 'react-loader-spinner'
import swal from 'sweetalert';

function Register({setLogin,setregister}) {
    const [loading,setLoading] = useState(false)

    const [eye,setEye] = useState(false)
    const dispatch = useDispatch()
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState("")
    const [password,setPass] = useState("")
    const {register} = useSelector(state => state.auth)


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

    useEffect(()=>{
        if(register) {
            swal({
              title : ('Check your email'),
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
    <div className="Login col-12">
        <div className="Login-container">
            <div className="Login-container-left col-6">
                <div className="Login-container-left-container text-white">
                    <div className="text-Login-container-left">
                    <h2>Welcome to META2FX</h2>
                    <p>Join META2FX today and start your journey in secure and efficient currency trading. Create an account to access all features and benefits.</p>
                    </div>
                    <div className="text-Login-container-bottom">
                        <h3 onClick={()=>setLogin(true)+setregister(false)} className="text-Login-container-bottom-btn">
                           Sign In
                        </h3>
                    </div>
                </div>
            </div>
            <div className="Login-container-rigth ">
                    <h2 onClick={()=>setregister(false)} className='Login-container-rigth-btn-close' href="#"><IoIosCloseCircle />
                    </h2>
                <div className="Login-container-rigth-container">
                    <h5>Create Your Account</h5>
                    <p>Register now to unlock full access to META2FX's currency trading platform.</p>
                    <div className="Login-container-rigth-container-input">
                    <p>User Name</p>
                    <div className="Input-Username">
                        <input   value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Username' />
                        <a href="#">
                        <FaUser />
                        </a>
                    </div>
                    <p>Email</p>
                    <div className="Input-Username">
                        <input   value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
                        <a href="#">
                        <MdEmail />
                        </a>
                    </div>
                    <p>Password</p>
                    <div className="Input-Password">
                        <input id='pass'  value={password} onChange={(e)=>setPass(e.target.value)} type="password" placeholder='Password' />
                        <a href="#">{eye ? <FaEye onClick={watchF}/> : <FaEyeSlash onClick={watch}/>}
                        </a>
                    </div>
                    <div className="Input-checked">
                        <input type="checkbox" />
                        <p>Remember me</p>
                    </div>
                    <div className="Login-container-rigth-btn">
                    <button onClick={registerUser}>{loading ?   (<ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={["white","white","white","white","white"]}
                    />) : "Sing Up"} </button>                    </div>
                    </div>               
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Register