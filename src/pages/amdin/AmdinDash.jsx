import React, { useEffect, useState } from 'react'
import './css/adminDash.css'
import Users from './components/users'
import axios from 'axios'
import { headerDashAdmin } from '../../function/adminDash'
import Notifs from './components/notifs'
import MetaMessage from './components/MetaMessage'
import Adminchat from './components/adminchat'
import Shipping from './components/Shipping'

function Admin({setdashAdmin,user}) {
  
  const [users,setUsers]= useState(true)
  const [shpippong,setshpippong] = useState(false)
  const [btnAtive,setBtnactive] = useState(1)
  const [usersData,setUserData] = useState([])
  const [usersnotif,setusersnotif] = useState([])
  const [loading,setloading] = useState(false)
  const [notif,setnotif] = useState(false)
  const [metaMessage,setMetaMessage] = useState(false)
  const [adminChats,setAdminChats] = useState(true)

useEffect(()=>{
    headerDashAdmin({setUsers,setshpippong,setBtnactive,setnotif,setMetaMessage,setAdminChats})
  },[])

   //get all users
   useEffect((getState)=>{
    const getAllUsers= async()=>{
      await axios.get(`${process.env.REACT_APP_API_URL}/users`)
      .then((res)=>{
        setUserData(res.data)
        setloading(false)
      })
    }
    getAllUsers()
  },[])
 //getAllNotif
  useEffect(()=>{
    setloading(true)
    const getAllUsers= async()=>{
      await axios.get(`${process.env.REACT_APP_API_URL}/notifs`)
      .then((res)=>{
        setusersnotif(res.data)
        setloading(false)
      })
    }
    getAllUsers()
  },[])
  return (
    <div className="admin-dash">
        <div className="admin-dash-container col-12">
            <div className="admin-dash-contianer-header  col-5 ">
                <div id='users' className={btnAtive === 1 ? "admin-dash-contianer-header-btn-active col" :"admin-dash-contianer-header-btn col" }>users    <span style={{fontWeight:'600'}} >: {usersData?.length} </span></div>
                <div id='notif' onClick={()=>setBtnactive(2) } className={btnAtive === 2 ? "admin-dash-contianer-header-btn-active col" :"admin-dash-contianer-header-btn col" }>notif    <span style={{fontWeight:'600'}}>: {usersnotif?.length} </span></div>
                <div id='shipping'  className={btnAtive === 6 ? "admin-dash-contianer-header-btn-active col" :"admin-dash-contianer-header-btn col" }>shipping</div>
                <div id='chats' onClick={()=>setBtnactive(4) } className={btnAtive === 4 ? "admin-dash-contianer-header-btn-active col" :"admin-dash-contianer-header-btn col" }>chats</div>
                <div id='MetaMessage' onClick={()=>setBtnactive(5) } className={btnAtive === 5 ? "admin-dash-contianer-header-btn-active col" :"admin-dash-contianer-header-btn col" }>Meta-Message</div>
                <div  onClick={()=>setdashAdmin(false)} className="admin-dash-contianer-header-btn col-1">x</div>
            </div>
            <div className="test">
                {users && <Users  loading={loading} setloading={setloading}  usersData={usersData} />}
                {shpippong && <Shipping userInfo={user} />}
                {notif &&  <Notifs  loading={loading} setloading={setloading} usersnotif={usersnotif}/>}
                {metaMessage && <MetaMessage userInfo={user} />}
                {adminChats &&  <Adminchat/>}
            </div>
        </div>
    </div>
  )
}

export default Admin
