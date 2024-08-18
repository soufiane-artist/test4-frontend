import React from 'react'
import '../css/viewNotif.css'

function ViewNotif({notifDetails , setpageNotif}) {
    console.log(notifDetails);
  return (
    <div style={{flexDirection:'column',display:'flex'}}  className="viewNotif col-12">
      <h1 onClick={()=>setpageNotif(false)} className='text-white btn btn-primary'>X</h1>
        <div style={{flexDirection:'column',display:'flex'}} className="viewNotif-container col-6 bg-white">
          <h6>username   :  {notifDetails?.username} </h6>
          <h6>chentEmail   :  {notifDetails?.clientEmail} </h6>
          <h6>userId   :  {notifDetails?.userId} </h6>
          <h6>chentId   :  {notifDetails?.clientId}  </h6>
          <h6>amount   :  {notifDetails?.amount} USD </h6>
          <h6>message   :  {notifDetails?.message} </h6>
          <h6>operation   :  {notifDetails?.operation} </h6>
          <h6>createdAt   :  {notifDetails?.createdAt} </h6>
          <h6>imgProfile   :  {notifDetails?.imgProfile} </h6>
        </div>
        
    </div>
  )
}

export default ViewNotif
