import React, { useEffect, useRef, useState } from 'react'
import './SidibarRigth.css'
import { IoIosPricetags } from "react-icons/io";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function SidibarRigth({setLoading,setMont,value,socket,dataSidibarRigth,setArriv,arrivalDeal}) {

    const container = useRef()
    const [dealValue,setdealValue] = useState(0.001)
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('userInfo')))


    useEffect(()=>{

        const SidibarRigth = document.getElementById('Sidibar-Rigth')
    if(dataSidibarRigth){
           const totale = dataSidibarRigth.open - dataSidibarRigth.close
            SidibarRigth.innerHTML +=`<div class="Sidibar-rigth-prices d-flex col-12">
                <p style="color:red;">${dataSidibarRigth.close}</p>
                <p>${totale.toFixed(3)}</p>
                <p style="color:#26a69a;">${dataSidibarRigth.open}</p>
           </div>`
        }

        const pricechart = document.getElementById('price-chart')
        if(dataSidibarRigth){
            pricechart.innerHTML = `<p style="color: ${dataSidibarRigth?.open - dataSidibarRigth?.close > 0 ? '#26a69a' : 'red'}; display: flex; justify-content: center;">${dataSidibarRigth?.close} </p>
`
        }

        const dealInput = document.getElementById('deal-input')
        window.onload =  ()=>{
          dealInput.focus()
        }
    },[dataSidibarRigth])
      
    useEffect(() => {
        if (dataSidibarRigth) {
          // العثور على العنصر الأخير داخل الحاوية والتمرير إليه
          const lastElement = container.current.lastElementChild;
          if (lastElement) {
            lastElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [dataSidibarRigth,value]);

      const buy = async()=>{
        setLoading(true)
        if(user?.amount < 1){
          return toast.error("Your balance is not enough")
        }
        const audio = document.getElementById('audio')
        audio.volume = 0.3
        audio.play()
      if(dataSidibarRigth){
          await axios.post(`${process.env.REACT_APP_API_URL}/deal`,{
              open:dataSidibarRigth.close,
              close:0,
              name:value+'USDT',
              totale:0,
              userId:user._id,
              buy:true,
              sell:false,
              volume : (dealValue < 0) ? 1 : (dealValue === 0) ? 0.0001 : (dealValue ? dealValue : 0.001)
          },{
            headers : {
              Authorization : 'bearer ' + user.token
            }
           }).then(res=>{
              socket.current.emit('openDeal',(res.data))
              setMont(res.data)

            })
         }
      }

      useEffect(()=>{
        socket?.current?.on('reiciveDeal',(data)=>{
            setArriv(data)
          })
      },[arrivalDeal])


      useEffect(()=>{
        const volumeInp = document.getElementById('deal-input')
        volumeInp.onkeyup = function(){
          if(volumeInp.value > 5){
            volumeInp.value = 1
            toast.warning('Please enter a number less than 5')
          }
           if (volumeInp.value < 0.0001 & volumeInp.value > 0.00000000000001) {
            volumeInp.value = 0.0001
            toast.warning('Please enter a number more  than  0.0001 ')
          }
          setdealValue(parseFloat(volumeInp.value))
        }
    },[dealValue])

      const sell = async()=>{
        setLoading(true)
        if(user?.amount < 1){
          return toast.error("Your balance is not enough")
        }
        const audio = document.getElementById('audio')
        audio.volume = 0.3
        audio.play()
         if(dataSidibarRigth){
            await axios.post(`${process.env.REACT_APP_API_URL}/deal`,{
                open:dataSidibarRigth?.close,
                close:0,
                totale:0,
                name:value+'USDT',
                userId:user._id,
                buy:false,
                sell:true,
                volume : (dealValue < 0) ? 1 : (dealValue === 0) ? 0.0001 : (dealValue ? dealValue : 0.001)
              },{
                headers : {
                  Authorization : 'bearer ' + user.token
                }
               }).then(res=>{
                  socket?.current?.emit('openDeal',(res.data))
                  setMont(res.data)
                })
         }
      }

  return (
    <div className="Sidibar-Rigth">
                    <audio  id='audio' src="./cash-register-kaching-sound-effect-125042.mp3" controls></audio>
        <div className="Sidibar-Rigth-container text-white">
            <div ref={container} id='Sidibar-Rigth' className="Sidibar-Rigth-container-top">
                <div className="Sidibar-Rigth-container-top-title1 d-flex">
                   <img src="https://res.cloudinary.com/dvivzto6g/image/upload/v1723814231/m1l3anmwhl4amtdyzach.png" alt="" />
                    <h6 >META<span style={{color:'yellow'}}>2</span>FX</h6>
                </div>
                <div className="Sidibar-Rigth-container-top-title2 d-flex col-12">
                    <p>Price({value})</p>
                    <p>Auvereer(T) </p>
                    <p>ClosePice</p>
                </div>
                <div  className="Sidibar-rigth-prices d-flex col-12 ">
                <p style={{color:'red'}}>266166464</p>
                <p >542</p>
                <p style={{color:'#26a69a'}}>266166464</p>
                </div>
            </div>
                <div className="Sidibar-Rigth-container-mellieur col-12  text-center">
                    <h6>Transaction size
                    </h6>
                    <div className="Deal-pc d-flex col-12">
                    <button onClick={buy} id='btn-buy' className='bg-success text-white col-4 '>Buy</button>
                    <div   className="Deal-input col-4 ">
                    <input style={{width:'100%'}} id='deal-input' value={dealValue} onChange={(e)=>setdealValue(e.target.value)}   type="Number"/>
                    </div>
                    <button onClick={sell} className='bg-danger text-white col-4 '>Sell</button>
                </div>
                <div className="Sidibar-Rigth-container-mellieur col-12 ">
                    <div  className="Sidibar-Rigth-container-mellieur-contianer">
                    <p>Current market trend: <span>-</span> Positive</p>
                    <p>Last transaction: <span>-</span> 1.5 {value} Buy</p>
                    <p>Profit margin: <span>-</span> 2.3%</p>
                    <p>Average trans.. t: <span>-</span> 5 minutes</p>
                    <p>Today's top trader: <span>-</span> User1652</p>
                    <p>Market volatility: <span>-</span> High</p>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}} className="Sidibar-Rigth-container-mellieur  col-12 ">
                    <div id='price-chart' style={{backgroundColor:'#0d1524',width:'97%'}} className="Sidibar-Rigth-container-mellieur-contianer ">
                       <p style={{display:'flex',justifyContent:'center'}}>dfjslfjdslkj</p>
                    </div>
                    <div className="Sidibar-Rigth-container-mellieur-btn col-12 ">
                        <Link to={'/Dashbord/Deposit'}>
                        <button > Charge the account </button>
                        </Link>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default SidibarRigth
