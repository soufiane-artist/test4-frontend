import React, { useEffect, useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import './skrill.css'
import { FaRegFileImage } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner'
import { IoSend } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { toast } from 'react-toastify';
import { MdVerified } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineError } from "react-icons/md";
import axios from 'axios';
import { FaArrowRight,FaCamera} from "react-icons/fa";
import { useSelector } from 'react-redux';


function Skrill({setSkrill,imgBank,setAccount}) {
  const [loading,setLoding] = useState(false)
  const [file,setFile] = useState(null)
  const [CouponeSucc,setCouponeSucc] = useState(false)
  const [CouponeErr,setCouponeErr] = useState(false)
  const [coupone,setCoupone] = useState()
  const {user } = useSelector(state => state.auth)

    const navigate = useNavigate()
  const Upload = ()=>{
    const fileUp = document.getElementById('file')
    fileUp.click()
  }

  const send = async()=>{
    
   setLoding(true) 
    if(file){
     /*if(user?.coupone === coupone){
        setLoding(false)
        return toast.error('Try entering another code')
      }*/
      const formdata = new FormData()
      formdata.append('image',file)
      await axios.post(`${process.env.REACT_APP_API_URL}/api/v2002/auth/deposit/skrill/`+user?._id,formdata,{
        amount :coupone ?  parseFloat(coupone) : 0,
      }).then((res)=>{
        toast.success("image Upload ")
        console.log(res.data);
        setTimeout(()=>{
          setLoding(false)
          setFile(null)
        },1000)
      }).catch(err=>{
        console.log(err);
      })
    }
  }



  //get user by copone
  const getCoupone = async()=>{
    if(coupone === "" ){
      return toast.error('please get coupone code')
    }
    if(user?.coupone === coupone){
      return toast.error('Try entering another code')
    }
    setCouponeSucc(false)
    setCouponeErr(false)

    await axios.get(`${process.env.REACT_APP_API_URL}/api/v2002/auth/coponeUser/`+coupone).then((res)=>{
      if(res.data[0]?.coupone){
        setCouponeSucc(true)
      }else{
      setCouponeErr(true)
      }
    })
  }


  useEffect(()=>{
    if(file){
      setLoding(false)
    }
  },[file])


  return (
    <div className="Account">
       <div className="Account-container text-center bg-white">
       <div className="account-btn-close col-12">
            <h1 onClick={()=>navigate(-1)} className=' text-dark'>
              <FaArrowRight/>
            </h1>
            </div>
        <div className="skrill ">
        <img className='imgSrc' src={imgBank} alt="" />
            <div className="text">
            <p>
            Securely top up your account using Skrill. Follow the instructions below to complete your bank transfer.
            </p>
            </div>
      <audio src="./sucess.mp3" id="audioSuccess"></audio>
        <h5>
        Bank Transfer Confirmation
        </h5>
        <h6>
         mbank.globe@gmail.com
        </h6>
          <ol>
            <li>Ensure the transfer details match your Skrill account information.</li>
            <li>Attach a screenshot or document of the transfer confirmation below.</li>
          </ol>
        <div  className="SenderImg">
        <img id='img' src={file && URL.createObjectURL(file)} alt="" />
        {file && <a onClick={()=> setFile(null)} href="#"> <IoCloseCircle /></a> }
        </div>
        <div className='inp-cobone'>
          <input value={coupone} onChange={(e)=>setCoupone(e.target.value)} type="text" placeholder='Code Copone' /> <h6 onClick={getCoupone} ><RxUpdate /></h6>
        </div>
       {CouponeSucc &&  <p><span style={{color:'green'}}><MdVerified /></span> Your coupon code has been accepted</p>}
       {CouponeErr &&  <p><span style={{color:'red'}}><MdOutlineError /></span> This coupon is invalid</p>}
        <input type="file" onChange={(e)=>setFile(e.target.files[0])} hidden  id="file" />
        {loading ? <ThreeDots
                        visible={true}
                        height="50"
                        width="50"
                        color="blue"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        /> :  <button onClick={file ?send : Upload} className={file? 'btn btn-success' : "btn btn-primary"} >
          {file ? 'send' : 'Upload'} {!file?<FaRegFileImage/> : <IoSend /> } 
        </button>}
    </div>
       </div>
    </div>
  )
}

export default Skrill
