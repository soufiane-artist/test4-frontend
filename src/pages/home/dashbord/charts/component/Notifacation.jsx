import React from 'react'
import './css/Notif.css'
import { FaArrowRight } from "react-icons/fa";

function Notification({setAccount,user}) {
  
  

  return (
    <div className="Account">
        <div className="Account-container">
            <div className="account-btn-close col-12">
            <h1 onClick={()=>setAccount(false)} className='text-white'>
              <FaArrowRight/>
            </h1>
            </div>
            <div className="notif-container col-12">
                {user?.notification?.map(notif =>{
                  return(
                    <div key={notif._id} className="notif-container-msg">
                    <p><span>{new Date(notif?.createdAt).toLocaleDateString()}  </span> //  {notif?.message} </p>
                </div>
                  )
                })}
            </div>
        </div>
    </div>
  )
}

export default Notification
