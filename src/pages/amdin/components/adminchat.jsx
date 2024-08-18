import React, { useEffect, useState } from 'react'
import '../css/Adminchat.css'
import {ThreeCircles} from 'react-loader-spinner'

function Adminchat() {

  const [active,setActive] = useState(false)
    

  return (
    <div className="Adminchat col-12">
      <div className="Adminchat-container col-12">
        <div className="Adminchat-container-left col-2">
          <div className={active ? "Adminchat-container-left-user" :"Adminchat-container-left-user-active"  }>
            <img className='Adminchat-container-left-user-img' src="https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1717545600&semt=ais_user" alt="" />
            <h6>soufiane</h6>
          </div>
          <div className={!active ? "Adminchat-container-left-user" :"Adminchat-container-left-user-active"  }>
            <img className='Adminchat-container-left-user-img' src="https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1717545600&semt=ais_user" alt="" />
            <h6>soufiane</h6>
          </div>
          <div className={!active ? "Adminchat-container-left-user" :"Adminchat-container-left-user-active"  }>
            <img className='Adminchat-container-left-user-img' src="https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1717545600&semt=ais_user" alt="" />
            <h6>soufiane</h6>
          </div>
        </div>
        <div className="Adminchat-container-rigth  col-10">
        <div className="Adminchat-container-rigth-admin col-12">
          <p>hello world</p>
          </div>
          <div className="Adminchat-container-rigth-client col-12">
          <img src="https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1717545600&semt=ais_user" alt="" />
          <p>hello world</p>
          </div>
        <div className="spinner text-center col-12">
        <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="white"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Adminchat
