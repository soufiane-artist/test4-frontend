import React, { useState } from 'react'
import './deposit.css'
import Banks from '../BanksDepo'
import SkrillWithdrawal from './components/MasterCardPull'

function CashWidraw()  {
    const [banks,setBanks] = useState(false)
    const [Skriil,setSkriil] = useState(true)
    const [imgBank,setImgBank] = useState()
  
    console.log(imgBank);
  
    return (
      <div className="Deposit">
          <div className="Deposit-nav">
              <img className='imgSrc' src={imgBank} alt="" />
              <div className="text">
              <h6>
              Un texte est une série orale ou écrite
              </h6>
              <p>
              perçus comme constituant un ensemble cohérent, porteur de sens et 
              </p>
              </div>
              <div className="banks">
                 {banks &&<Banks setImgBank={setImgBank} setSkriil={setSkriil} setBanks={setBanks} />}
                 {Skriil && <SkrillWithdrawal/>}
              </div>
          </div>
      </div>
    )
  }

export default CashWidraw
