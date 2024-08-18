import './css/Account.css'
import './css/Account-user.css'
import React, { useEffect, useState } from 'react'
import { FaArrowRight,FaCamera} from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useSelector } from 'react-redux';
import { IoIosCopy } from "react-icons/io";

import 'animate.css';
import { SidibarDash } from '../../../../../function/adminDash';
function AccountUser({setAccount,user,SetEditProf}) {
  const [fileImg,setfileImg] = useState(null)
  const [copy,setCopy] = useState(false)




  const CopyId = ()=>{
    const textToCopy = document.getElementById('input-id-user').textContent;
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    console.log('Copied text: ' + textToCopy);
    setCopy(true)
    setTimeout(()=>{
      setCopy(false)
    },1500)
  }



  return (
    <div className="Account">
        <div className="Account-container">
            <div className="account-btn-close col-12">
            <h1 onClick={()=>setAccount(false)} className='text-white'>
              <FaArrowRight/>
            </h1>
            </div>
            <div className="user-Profile  text-white">
              <div className="img-profile">
                <img src={user?.profileImg?.url} alt="" />
                <input onChange={(e)=>setfileImg(e.target.files[0])} type="file" id='fileSettig' hidden />
                <div className="user-profile-Id">
                  <h3>ID : </h3>
                 <h3 id='input-id-user'>{user?._id}</h3>
                  <h3  style={{cursor:'pointer'}} onClick={CopyId}><IoIosCopy/></h3>
                 {copy &&  <div className="message-copy animate__animated animate__backInRight" >
                Copy
              </div>}
                  </div>
              </div>
              <div className="user-profile-username">
               <h5>User-name</h5>
               <h3>{user?.username}</h3>
              </div>
              <div className="user-profile-email">
                <h5>Email-user</h5>
                <h3>{user?.email} </h3>
              </div>
              <div className="user-profile-email">
                <h5>city</h5>
                <h3>{user?.city === ' ' ? 'not found' : user?.city  }</h3>
              </div>
              <div className="user-profile-adress">
                <h5>Adress-user</h5>
                <h3>{user?.adress === 'false' ? 'not found' : user?.adress  }</h3>
              </div>
              <div className="user-profile-adress">
                <h5>Code postale</h5>
                <h3>{user?.codepostale === 0 ? 'not found' : user?.codepostale  } </h3>
              </div>
              <div className="user-profile-adress">
                <h5>Sexy</h5>
                <h3>{user?.sexy === 'false' ? 'not found' : user?.sexy  } </h3>
              </div>
              <div className="user-profile-adress">
                <h5>Age</h5>
                <h3>{user?.age ===  0 ? 'not found' : user?.age  } </h3>
              </div>
              <div className="user-profile-Code-copone">
                <h5>Copone Code</h5>
                <h3>{user?.coupone}</h3>
              </div>
              <div className="user-profile-Code-copone">
                <h5>Amount</h5>
                <h3>{user?.amount?.toFixed(2)} USD</h3>
              </div>
              <div className="user-profile-Code-copone">
                <h5>Number Phone</h5>
                <h3>{user?.phoneNumber} </h3>
              </div>
              <div className="user-profile-Code-copone">
                <h5>the date of join</h5>
                <h3>{new Date(user?.createdAt).toLocaleString()} </h3>
              </div>
              <div className="user-profile-edit col-12">
                  <button onClick={()=> SetEditProf(true)} className='btn btn-primary'>Edit <MdEdit/> </button>
              </div>
                  <p className="text-white text-center">This account is secure</p>
            </div>
        </div>
       
    </div>
  )
}

export default AccountUser
