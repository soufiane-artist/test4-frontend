import React, { useEffect } from 'react'
import Header from './header'
import '../css/page1.css'


function Page1({setLogin,setregister}) {

 

 
  return (
    <div className='page1'>
      <Header setLogin={setLogin} setregister={setregister} />
      <div className="page1-meiller col-12 ">
        <div className="page1-text col-6">
            <h1  className="text-white ">
             META<span style={{color:'yellow'}}>2</span>FX 
            </h1>
            <p className='text-white'>
            Trade with confidence on META2FX, where you can explore all foreign currencies, manage secure fund transfers, and top up your account with ease. Experience a protected and efficient trading environment tailored to meet your needs.
          </p>
            <div className="page1-text-btn">
              <div className="page1-text-btn-container">
              <button className="page1-text-login" onClick={()=>setLogin(true)}>Login</button>
              <button className="page1-text-register" onClick={()=>setregister(true)}>Sign Up</button>
           </div>
          </div>
          <div className="page1-text-bottom col-12">
          <div className="page1-text-bottom-left col-5">
              <h6 style={{color: 'yellow'}}>01</h6>
              <p style={{color: 'yellow'}}>Secure Trading Environment</p>
              <p style={{color: 'white'}}>Manage all your currency trades safely and efficiently.</p>
            </div>
            <div className="page1-text-bottom-left col-5">
              <h6 style={{color: 'yellow'}}>02</h6>
              <p style={{color: 'yellow'}}>Comprehensive Fund Management</p>
              <p style={{color: 'white'}}>Top up your account and handle fund transfers securely.</p>
            </div>
           </div>
        </div>
        <div className="page1-image col-6">
            <img src="https://fp-markets.net/assets/Mob-devices.png" alt="" />
            <div className="page1-image-bottom col-12">
              <div className="page1-image-bottom-left col-6">
                <img src="pngwing.png" alt="" />
                <p className='text-white'>Explore our platform and experience secure trading.</p>
                </div>
              <div className="page1-image-bottom-rigth col-6">
                  <div className="page1-image-bottom-rigth-number">
                    <h1>1.24m</h1>
                  </div>
                  <div className="page1-image-bottom-rigth-images">
                    <div className="page1-image-bottom-rigth-image">
                      <img src="https://www.tozzigreen.com/wp-content/uploads/2023/11/Azienda_Persone_foto_01_900x600px.jpg" alt="" />
                      <img src="https://testerelazioni.it/wp-content/uploads/2017/05/persone-img.jpg" alt="" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtoK8nFlMEnukHI2MOBjDW-6vfznWJvYAHg&s" alt="" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&s" alt="" />
                    </div>
                    <p>Join our community of active traders.</p>
                    </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page1
