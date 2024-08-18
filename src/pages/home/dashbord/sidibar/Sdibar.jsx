import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { GrAnalytics } from "react-icons/gr";
import { FaWallet , FaHome } from "react-icons/fa";
import './Sidibar.css'
import { BiExport } from "react-icons/bi";
import { PiPowerFill } from "react-icons/pi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdAccountCircle,MdOutlineSupportAgent  , MdCandlestickChart } from "react-icons/md";
import { IoIosSettings , IoIosNotifications } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaMoneyBillTrendUp ,FaMoneyBillWave } from "react-icons/fa6";
import Swal from 'sweetalert2'
import {useDispatch, useSelector} from 'react-redux'
import { Logout } from '../../../../redux/api/authApi';
import { SidibarDash } from '../../../../function/adminDash';
function Sdibar({seTCharts,setAdminDash,SetEditProf,SetAnalytics,setBalance,setopenDeal,setSidibar,user,setAccount,setDealNotif,setNotif,setDesposit,setSupport}) {

  const dispatch = useDispatch()
  const navigate = useNavigate('')

    const logOut = ()=>{

      Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!"
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear('userInfo')
          setTimeout(async()=>{
           await dispatch(Logout())
            navigate('/')
          },1000) 
        }
      });

    }

    useEffect(()=>{
      SidibarDash({seTCharts,setAdminDash,SetEditProf,SetAnalytics,setBalance,setopenDeal,setAccount,setSidibar,setDealNotif,setNotif,setDesposit,setSupport})
    },[])

  return (
    <div className="Dashbod-sidibar">
        <div className="Dasch-Sidibar-Container">
            <div className="Profile-user">
                <div className="Profile-user-info">
                <img src={user?.profileImg?.url} alt="" />
                <div className="Profile-user-name">
                <h3>{user?.amount.toFixed(2)} USD </h3>
                <h5>{user?.email} </h5>
                </div>
                </div>
            </div>
           <div className="Dash-Sidibar-Container-btn">
            <h2 id='Dashbord'><FaHome/><span>Dashbord</span> </h2>
            <h2 id='Balance'><MdAccountBalanceWallet/><span>Balance</span> </h2>
            <h2 id='Deal'><FaMoneyBillTrendUp/><span>Deal</span><span className='deal-number'> {user?.deals?.filter(deal => deal.close === false).length} </span> </h2>
            <h2 id='Deals'><FaMoneyBillWave/><span>Analytics</span><span className='deal-number'>{user?.deals?.length} </span> </h2>
            <h2 id='Charts'><MdCandlestickChart/><span>Charts</span> </h2>
            <h2 id='Notification'><IoIosNotifications/><span>Notification</span><span className='deal-number'>{user?.notification?.length} </span> </h2>
            <h2 id='Wallet'><FaWallet/><span>Wallet</span> </h2>
            <h2 id='Account'><MdAccountCircle/><span>Account</span> </h2>
            <h2 id='Supports' ><MdOutlineSupportAgent /><span>Supports</span><span className='deal-number'>1</span> </h2>
           {user?.isAdmin && <h2 id='AdminBtn' onClick={()=>setAdminDash(true)}><MdOutlineSupportAgent /><span>Admin</span> </h2>}
            </div>
            <div className="Dasch-Sidibar-Container-logout">
            <h2 onClick={logOut}><span>Log-out</span><PiPowerFill/></h2>
           </div>
        </div>
        <div onClick={()=>setSidibar(false)}    className="dash-arrow-close">
               <h3><span ><BiExport/></span></h3>
          </div>
    </div>
  )
}

export default Sdibar
