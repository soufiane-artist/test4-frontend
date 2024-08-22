import React from 'react'
//import '../../css/userView.css'
import {ThreeCircles} from 'react-loader-spinner'
function Userview({userDetails , setprofile}) {

    console.log(userDetails);

  return (
    <div  className="userview col-12">
        <h1 onClick={()=>setprofile(false)}  className='btn text-white btn-dark'>x</h1>
        <div className="userview-container">
            <img src={userDetails?.profileImg.url} alt="" />
            <div className="userview-container-info">
                <h6 >amount :  <span style={{background : 'yellow'}}>{userDetails?.amount?.toFixed(2)} USD</span> </h6>
                <h6>_id  :  {userDetails?._id}: </h6>
                <h6>username :  {userDetails?.username} </h6>
                <h6>email :  {userDetails?.email} </h6>
                <h6>age :  {userDetails?.age} </h6>
                <h6>accountBlock :  {userDetails?.accountBlock !== false ? 'true' : 'false'} </h6>
                <h6>blockChat :  {userDetails?.blockChat !== false ? 'true' : 'false'} </h6>
                <h6>adress :  {userDetails?.adress} </h6>
                <h6>codepostale  : {userDetails?.codepostale} {userDetails?.codepostale} </h6>
                <h6>country  : {userDetails?.country} </h6>
                <h6>coupone  : {userDetails?.coupone} </h6>
                <h6>createdAd  : {new Date(userDetails?.createdAt).toLocaleDateString()} </h6>
                <h6>isAdmin  : {userDetails?.isAdmin !== false ? 'true' : 'false'}  </h6>
                <h6>notification  : {userDetails?.notification?.length}  </h6>
                <h6>onlineUser  : {userDetails?.onlineUser !== false ? 'true' : 'false'}  </h6>
                <h6>phoneNumber  : {userDetails?.phoneNumber}  </h6>
                <h6>sexy  : {userDetails?.sexy}  </h6>
                <h6>verfyEmail  : {userDetails?.verfyEmail !== false ? 'true' : 'false'}  </h6>
                <h6>verfyAccount  : {userDetails?.verfyAccount !== false ? 'true' : 'false'}  </h6>
            </div>
            
            {!userDetails && <ThreeCircles
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
  )
}

export default Userview
