import React, { useEffect, useState } from 'react'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import PhonePage from './pages/PhonePage/PhonePage'
import Login from './pages/form/Login'
import Register from './pages/form/Register'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Page6 from './pages/page6'
import Page7 from './pages/page7'
import Page8 from './pages/page8'
import Page9 from './pages/page9'
import Page10 from './pages/page10'
import { FaLocationArrow } from "react-icons/fa";
import './arrow.css'

function Menu({
  sidiabrH,setSidibarH,sidibar,setsidibar}) {
  const [login,setLogin] = useState(false)
  const [register,setregister] = useState(false)
  const arrow = () => {
    window.scrollTo(0, 0);
  }
  useEffect(()=>{
    const arrow = document.getElementById('arrowMenu')
    window.onscroll = ()=>{
      if(window.scrollY > 300){
        arrow.style.display ='flex'
      }else{
        arrow.style.display ='none'
      }
      if(window.scrollY > 1260){
        arrow.style.backgroundColor ='blue'
        arrow.style.color ='white'
      }else{
        arrow.style.backgroundColor =''
        arrow.style.color =''
      }
    }
  },[])



  return (
    <div >
      {login && <Login setLogin={setLogin} setregister={setregister} />}
      {register && <Register setLogin={setLogin} setregister={setregister}/>}
      <Page1 setLogin={setLogin} setregister={setregister} />
      <Page2/>
      <Page3/>
      <Page4/>
      <Page6/>
      <Page7/>
      <Page8/>
      <Page9/>
      <Page10/>
      {/*
      <Page5/>
      */}
      <PhonePage sidiabrH={sidiabrH} setSidibarH={setSidibarH} sidibar={sidibar} setsidibar={setsidibar} />
      <h6 id='arrowMenu' onClick={arrow} className="arrowMenu">
            <FaLocationArrow/>
      </h6>
    </div>
  )
}

export default Menu
