import React, { useEffect } from 'react'

function LargetAmount({usersData,largestamount,setuserDetails,setblockUserAccount}) {
      usersData.sort((a, b) => b.amount - a.amount);
  return (
    <>{usersData && usersData?.map(user =>{
        return (
            <div className="admin-dash-users-container-user-header col-12">
        <div style={{flexDirection:'row'}} className="admin-dash-users-container-user-col col-1">
            <div className={user?.onlineUser ? "olineUser bg-primary" : "olineUser bg-primary"} ></div>
            <img src={user?.profileImg.url} alt="" />
        </div>
        <div className="admin-dash-users-container-user-col col-2">{user?.username} </div>
        <div className="admin-dash-users-container-user-col col-3">{user?._id} </div>
        <div className="admin-dash-users-container-user-col col-1">{user?.notification?.length} </div>
        <div className="admin-dash-users-container-user-col col-1"> message</div>

        <div style={{flexDirection:'row',justifyContent:'center',gap:'40px'}} className="admin-dash-users-container-user-col col-1">
            <h6 style={{background:'yellow',padding:'2px 10px',color:'black'}}>{user?.amount?.toFixed(2)}</h6>
        </div>
        <div style={{flexDirection:'row',justifyContent:'center',gap:'10px'}} className="admin-dash-users-container-user-col col-2">
            <button onClick={()=>setuserDetails(user)} className='btn btn-success'>view</button>
            <button onClick={()=>setblockUserAccount(user._id)} className={user.accountBlock ? 'btn btn-dark text-white':'btn btn-danger'}>block</button>
            <button className='btn btn-primary'>b-chat</button>
        </div>
        <div style={{flexDirection:'row',justifyContent:'center',gap:'10px'}} className="admin-dash-users-container-user-col col-1">
                {new Date(user?.createdAt).toLocaleDateString()}
        </div>
        </div>
        )
    })}</>
  )
}

export default LargetAmount
