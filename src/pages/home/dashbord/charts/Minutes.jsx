import React, { useState } from 'react'

function Minutes({min,setmin}) {

    

  return (
    <select value={min} onChange={(e) => setmin(e.target.value)} >
        <option value="1m">1m</option>
        <option value="1h">1h</option>
        <option value="4h">4h</option>
        <option value="1d">1d</option>
        <option value="1w">1w</option>  {/* إضافة خيار الأسبوع */}
        <option value="1M">1M</option>  {/* إضافة خيار الشهر */}
    </select>
  )
}

export default Minutes
