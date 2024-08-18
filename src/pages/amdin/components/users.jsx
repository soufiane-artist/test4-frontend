import React, { useEffect, useState } from 'react'
import '../css/adminDash.css'
import LargetAmount from './largetAmount';
import UsersDate from './usersDate';
import { users } from '../../../function/adminDash';
import MinorAmount from './minorAmount';
import {ThreeCircles} from 'react-loader-spinner'
import Userview from './comusers/Userview';
import axios from 'axios';
import Swal from 'sweetalert2'

function Users({usersData ,loading , setloading }) {
    const [largestamount,setlargestamount] = useState(false)
    const [dateUsers,setUsersDate] = useState(true)
    const [minor,setminor] = useState(false)
    const [userDetails,setuserDetails] = useState()
    const [profile,setprofile] = useState(false)
    const [idUserBlckaccount,setidUserBlckaccount] = useState()
    const [blockUserAccount,setblockUserAccount] = useState()

   useEffect(()=>{
        users({setlargestamount,setUsersDate,setminor})
        if(userDetails){
          setprofile(true)
        }
        setidUserBlckaccount(userDetails?._id)
    },[userDetails])
  // block userAccount
    useEffect(()=>{


      if(blockUserAccount){


        Swal.fire({
          title: "Block user account",
          text: "Are you sure you need to Blockeuserd ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "blue",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Block !"
        }).then(async(result) => {
          if (result.isConfirmed) {
            const update = async()=>{
              await axios.put('http://localhost:2006/api/meta-bank/v150//blockAccount/'+blockUserAccount,{
              })
            .then((res)=>{
              console.log(res.data);
            }).catch((err)=>{
              console.log(err);
            })
            }
            update()
          }
        });
      }
    },[blockUserAccount])

  return (
    <div className="admin-dash-users col-12">
        <div className="admin-dash-users-container col-12">
            <div className="admin-dash-users-container-user -12">
                <div className="admin-dash-users-container-user-header col-12">
                <div className="admin-dash-users-container-user-col col-1">
                    <h1>image</h1>
                </div>
                <div className="admin-dash-users-container-user-col col-2">username</div>
                <div className="admin-dash-users-container-user-col col-3">id</div>
                <div className="admin-dash-users-container-user-col col-1">notif</div>
                <div className="admin-dash-users-container-user-col col-1">msg</div>
                <div className="admin-dash-users-container-user-col col-1">current</div>
                <div className="admin-dash-users-container-user-col col-2">action</div>
                <div className="admin-dash-users-container-user-col col-1">date</div>
                </div>
            </div>
            <div className="admin-dash-users-container-user -12">
                <div className="admin-dash-users-container-user-header col-12">
                <div style={{cursor:'pointer'}} id='largestamount' className="admin-dash-users-container-user-col col-3 bg-primary text-white" >largest amount </div>
                <div style={{cursor:'pointer'}} id='Minoramount' className="admin-dash-users-container-user-col col-3 bg-primary text-white">Minor amount</div>
                <div style={{cursor:'pointer'}} id='date' className="admin-dash-users-container-user-col col-3 bg-primary text-white">date</div>
                <div style={{cursor:'pointer'}} id='online' className="admin-dash-users-container-user-col col-3 bg-primary text-white">online</div>
                </div>
            </div>
            <div className="admin-dash-users-container-user-data col-12">
           {largestamount && <LargetAmount  setblockUserAccount={setblockUserAccount} setuserDetails={setuserDetails} largestamount={largestamount} usersData={usersData}/>}
           {dateUsers && <UsersDate setblockUserAccount={setblockUserAccount}  setuserDetails={setuserDetails} usersData={usersData}/>}
           {minor && <MinorAmount setblockUserAccount={setblockUserAccount} setuserDetails={setuserDetails}  usersData={usersData}/>}
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
        </div>
        {profile && <Userview setprofile={setprofile}  userDetails={userDetails} />}
    </div>
  )
}

export default Users
