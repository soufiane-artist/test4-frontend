import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneNumber({phone,setPhone}) {



  return (
    <PhoneInput
    className="number"
    country={"us"}
    value={phone}
    onChange={(phone) => setPhone(phone)}
  />
  )
}

export default PhoneNumber
