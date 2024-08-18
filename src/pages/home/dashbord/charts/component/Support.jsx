import React, { useEffect, useState } from 'react'
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

import './css/support.css'
import { toast } from 'react-toastify';
function Support({setAccount}) {
    const [fileImg,setfileImg] = useState(null)
    const [message,setMessage] = useState('')

    const Uplaod = ()=>{
        const fileSettig = document.getElementById('fileSettig')
        fileSettig.click()
    }

    useEffect(()=>{
        window.onload =()=>{
            const Supportinput =  document.getElementById('Support-input')
           Supportinput.focus() 
        }
    },[])

    const send = ()=>{
        setMessage("")
        toast.error('This feature is currently not enabled on your account')
    }

  return (
   <div className="Account">
    <div className="Support">
        <div className="Support-container">
           <div className="account-btn-close col-12">
            <h1 onClick={()=>setAccount(false)} >
              <FaArrowRight/>
            </h1>
            </div>
            <div className="Support-header">
                <h1> <span><MdOutlineSupportAgent/></span> Support </h1>
            </div>
            <div className="Support-Chat">
                <div className="message-admin">
                <img className='img' src="https://cdn-icons-png.freepik.com/512/3611/3611357.png" alt="" />
                <p>Thank you for joining our community and opening a new account on our website! We are very happy to have you with us and look forward to providing you with the best services <span ><MdMessage/></span></p>
                </div>
                {/*<div className="message-client">
                <img className='img' src="https://img.freepik.com/psd-gratuit/personne-celebrant-son-orientation-sexuelle_23-2150115662.jpg" alt="" />
                <p >
                une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, 
                </p>
                </div>
                <div className="message-client">
                <img className='img' src="https://img.freepik.com/psd-gratuit/personne-celebrant-son-orientation-sexuelle_23-2150115662.jpg" alt="" />
                <p>
                    <img src="https://img.freepik.com/psd-gratuit/personne-celebrant-son-orientation-sexuelle_23-2150115662.jpg" alt="" />
                </p>
                </div>
                <div className="avatar-chat">
                    <p>You can contact our team and ask for assistance at any time <span ><MdMessage/></span></p>
                </div> */}
            </div>
            <div className="Support-input">
                <h3 onClick={Uplaod}><FaImage/></h3>
                <input  onChange={(e)=>setfileImg(e.target.files[0])} type="file" id='fileSettig' hidden />
                <input value={message} onChange={(e)=>setMessage(e.target.value)} id='Support-input' type="text" placeholder='ècree...' />
                <h3 onClick={send}> <IoSend/></h3>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Support
