import React from 'react'

function AllNotifs({usersnotif ,setDetails , setpageNotif}) {
  return (
    <>
    { usersnotif?.map(notif=>{
           return(
               <div key={notif?._id} style={{cursor:'pointer'}} onClick={()=>setDetails(notif)+setpageNotif(true)} className="admin-dash-notif-container-data">
          <div className="admin-dash-notif-container-col col-1">
               <img src={notif?.imgProfile} alt="" />
           </div>
           <div className="admin-dash-notif-container-col col-3">
               <h3>{notif?.username} </h3>
           </div>
           <div className="admin-dash-notif-container-col col-2">
               <h3>{notif?.clientEmail}</h3>
           </div>
           <div className="admin-dash-notif-container-col col-3">
               <h3>i{notif?.userId}</h3>
           </div>
           <div className="admin-dash-notif-container-col col-2">
              <h6>
              
                 <span style={{background:(notif?.operation === "send" && 'yellow') || (notif?.operation === "recieve" && 'green' ) || (notif?.operation === "Dèposit" && "blue"),color:notif?.operation === "send" ? "black" : "white"  }}> {notif?.operation}  </span>   /  {notif?.operation === "send" && "-"} {notif?.amount?.toFixed(2)} USD
             </h6>
           </div>
           <div className="admin-dash-notif-container-col col-1">
                           <h6>
                           {new Date(notif?.createdAt).toLocaleDateString()}
                           </h6>
           </div>
          </div>
           )
          })}
   </>
  )
}

export default AllNotifs
