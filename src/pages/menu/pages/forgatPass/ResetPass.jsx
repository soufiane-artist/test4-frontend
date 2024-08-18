import React, { useEffect, useState } from 'react'
import './forgat.css'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
import {ColorRing} from 'react-loader-spinner'


function ResetPass() {

    const [password,setpassword] = useState('')
    const [password2,setpassword2] = useState('')

    const [loading,setLoading] = useState(false)


    const navigate= useNavigate()


    const {userId} = useParams()
    const {token} = useParams()

    useEffect(()=>{
        const Verfy = async()=>{
            await axios.get(`${process.env.REACT_APP_API_URL}/resetPass/${userId}/${token}`).then((res)=>{
                console.log(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
        Verfy()
    },[])

    const send = async(e)=>{
        e.preventDefault()
        setLoading(true)
        if(password.length < 5){
            return toast.error('Please type the password')
        }
        if(password2.length < 5){
            return toast.error('Please type the password')
        }
        if(password  !==  password2 ){
            return toast.error('Password does not match')
        }
        await axios.post(`${process.env.REACT_APP_API_URL}/resetPass/${userId}/${token}`,{
            password : password
        }).then((res)=>{
            if(res.data.message){
                toast.error(res.data.message)
            }else{
               toast.success('Your password has been modified')
           //swale
            swal({
              title : ('Do you want to return to the login page?'),
              icon : 'success',
            }).then(async(isOk) => {
              if(isOk){
                navigate('/')
              }
            })            
            }
            setLoading(false)
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div className='reset-pass'>
      <div className="reset-pass-container">
        <h2>META<span>2</span>FX</h2>
        <p>Reset your password to regain access to your META2FX account. Please follow the instructions below to set a new password.</p>
        <form onSubmit={send} className="form-reset-pass">
            <h3>New Password</h3>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='new password' />
            <h3>Confermer Password</h3>
            <input value={password2} onChange={(e)=>setpassword2(e.target.value)} type="text" placeholder='confermer password' />
            <button className='btn-reset '>{loading ? <ColorRing
                            visible={true}
                            height="30"
                            width="30"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={["white","white","white","white","white"]}
                            /> : "Reset Password"} </button>
        </form>
        <Link to={'/'}>
        <p className='Sign-in text-dark'>Don't have an account? <span style={{color:'blue',cursor:'pointer'}}>Sign up</span></p>
        </Link>
        <p className='copiryt-reset'>&copy; META2FX</p>
      </div>
    </div>
  )
}

export default ResetPass
