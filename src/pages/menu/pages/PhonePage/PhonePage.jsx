import React, { useState } from 'react'
import '../../css/phonePage.css'
import HeaderPhone from './header'
import Sidibar from './Sidibar'
import PhoneLogin from './PhoneLogin'

function PhonePage({setSidibarH,sidibar,setsidibar,sidiabrH}) {


  return (
   <div className="PhonePage">
    <HeaderPhone setSidibarH={setSidibarH} sidibar={sidibar} setsidibar={setsidibar} />
    {sidiabrH && <Sidibar sidibar={sidibar}   setSidibarH={setSidibarH} setsidibar={setsidibar} />}
    <PhoneLogin  />
   </div>
  )
}

export default PhonePage
