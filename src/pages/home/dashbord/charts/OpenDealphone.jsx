import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { io } from 'socket.io-client'

function OpenDealphone({value,socket,dealValue,setdealValue,dataSidibarRigth,arrivalDeal,setArriv,setMont,setLoading}) {


    const {user} = useSelector(state => state.auth)

   
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
                totale:0,
                userId:user._id,
                buy:true,
                name:value+'USDT',
                sell:false,
                volume : (dealValue < 0) ? 1 : (dealValue === 0) ? 0.0001 : (dealValue ? dealValue : 0.001)
            }).then(res=>{
                socket?.current?.emit('openDeal',(res.data))
                setMont(res.data)
            })
           }
      }
      
      useEffect(()=>{
        socket?.current?.on('reiciveDeal',(data)=>{
            setArriv(data)
          })
      },[arrivalDeal])

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

      useEffect(()=>{
        const volumeInp = document.getElementById('deal-input2')
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

  return (
    <div className="Deal col-12">
              <audio  id='audio' src="./cash-register-kaching-sound-effect-125042.mp3" controls></audio>
        <button onClick={buy} id='btn-buy' className='bg-success col-4 '>Buy</button>
        <div className="Deal-input col-4 ">
          <input id='deal-input2' value={dealValue} onChange={(e)=>setdealValue(e.target.value)} type="Number"/>
        </div>
        <button onClick={sell} className='bg-danger col-4 '>Sell</button>
      </div>
  )
}

export default OpenDealphone
