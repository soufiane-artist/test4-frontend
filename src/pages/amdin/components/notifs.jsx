import React, { useEffect, useState } from 'react'
import '../css/adminDashNotif.css'
import ViewNotif from './viewNotif';
import Comp from './compNotif/Comp';
import AllNotifs from './compNotif/AllNotifs';
import {ThreeCircles} from 'react-loader-spinner'
function Notifs({usersnotif , loading , setloading}) {

    const [notifDetails,setDetails] = useState()
    const [pageNotif,setpageNotif] = useState()
    const [notifaction,seteavtion] = useState("send")
    const [usersnotifs,setusersnotifs] = useState([])
    const [allNotifs,setallNotifs] = useState(true)
    const [oneNotifs,setoneNotifs] = useState(false)

// استخدم دالة filter لجلب الإشعارات التي تحتوي على العملية "send"
    useEffect(()=>{
        const sendNotifications = usersnotif.filter(notification => notification.operation === notifaction);
        setusersnotifs(sendNotifications)
    },[notifaction])


  return (
   <div className="admin-dash-notif ">
        <div className="admin-dash-notif-container col-12">
           <div className="admin-dash-notif-container-header">
           <div className="admin-dash-notif-container-col col-1">
                <h3>image</h3>
            </div>
            <div className="admin-dash-notif-container-col col-3">
                <h3>username</h3>
            </div>
            <div className="admin-dash-notif-container-col col-2">
                <h3>email</h3>
            </div>
            <div className="admin-dash-notif-container-col col-3">
                <h3>id</h3>
            </div>
            <div className="admin-dash-notif-container-col col-2">
                <h3>transfer</h3>
            </div>
            <div className="admin-dash-notif-container-col col-1">
                <h3>date</h3>
            </div>
           </div>
           <div className="admin-dash-notif-container-header">
           <div style={{cursor:'pointer'}} onClick={()=>seteavtion('send') + setallNotifs(true) + setoneNotifs(false)} className="admin-dash-notif-container-col col-2 bg-primary text-white">
                <h3>all</h3>
            </div>
           <div style={{cursor:'pointer'}} onClick={()=>seteavtion('send') + setallNotifs(false) + setoneNotifs(true)} className="admin-dash-notif-container-col col-2 bg-primary text-white">
                <h3>Send</h3>
            </div>
            <div style={{cursor:'pointer'}} onClick={()=>seteavtion('Dèposit') + setallNotifs(false) + setoneNotifs(true)} className="admin-dash-notif-container-col col-2 bg-primary text-white">
                <h3>Dèposit</h3>
            </div>
            <div style={{cursor:'pointer'}} onClick={()=>seteavtion('recieve') + setallNotifs(false) + setoneNotifs(true)} className="admin-dash-notif-container-col col-3 bg-primary text-white">
                <h3>Recieve</h3>
            </div>
            <div style={{cursor:'pointer'}} onClick={()=>seteavtion('Pull') + setallNotifs(false) + setoneNotifs(true)} className="admin-dash-notif-container-col col-3 bg-primary text-white">
                <h3>Pull</h3>
            </div>
           </div>
           
          {oneNotifs && <Comp   usersnotifs={usersnotifs} setDetails={setDetails}  setpageNotif={setpageNotif}  />}
          {allNotifs &&  <AllNotifs   usersnotif={usersnotif} setDetails={setDetails}  setpageNotif={setpageNotif}  />}
          <div className="loading col-12">
          {loading && <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="white"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />}
          </div>
        </div>
        {pageNotif && <ViewNotif notifDetails={notifDetails} setpageNotif={setpageNotif} />}
   </div>
  )
}

export default Notifs
