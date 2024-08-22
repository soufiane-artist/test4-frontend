import React, { useEffect, useState } from 'react'
import '../css/shpping.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useSelector } from 'react-redux'
function Shipping({userInfo}) {

    const [userId,setUserId] = useState('')
    const [userIdAmount,setuserAmount] = useState('')

    const [amount,setAmount] = useState()
    const [copone,setcopone] = useState('')
    const [CouponeHolder,setCouponeHolder] = useState()
    const {user} = useSelector(state=>state.auth)
    

 useEffect(()=>{
      if(userId){
        const getUserBiyId = async()=>{
          await axios.get(`${process.env.REACT_APP_API_URL}/api/v2002/auth/user/`+userId)
        .then((res)=>{
          setuserAmount(res.data.amount)
        }).catch((err)=>{
          toast.error('user not found');
          return false
        })
        }
        getUserBiyId()
      }
      if(copone){
        const getUserCoupone = async()=>{
        await axios.get(`${process.env.REACT_APP_API_URL}/api/v2002/auth/coponeUser/`+copone)
        .then((res)=>{
          setCouponeHolder(res.data[0])
        }).catch((err)=>{
          toast.warning('error request to coupone')
        })
        }
        getUserCoupone()
      }
    },[userId,copone,userIdAmount])


    const DepositMany=async ()=>{
      
      if(userId ===  ""){
        return toast.error('get  userId')
      }
      if(amount ===  ""){
        return toast.error('get  amount')
      }
     

     
       await axios.put(`${process.env.REACT_APP_API_URL}/api/v2002/auth/amountUser/`+userId,{
          amount : (copone ? parseFloat(amount) + parseFloat(amount)/20 : parseFloat(amount)) 
        }).then((res)=>{
          toast.success('your deposit sucess')
          console.log(res.data);
        }).catch((err)=>{
          toast.warning('error request amount')
        }) 
        
        if(CouponeHolder?._id ){
        await axios.put(`${process.env.REACT_APP_API_URL}/api/v2002/auth/amountUser/`+CouponeHolder?._id ,{
          amount:  parseFloat(amount) /20
        }).then((res)=>{
          console.log(res.data);
        })

      }else{
        toast.error("please check your coupone")
      }
     /**/
    }
  return (
    <div className="admin-shipping">
        <div className="admin-shipping-container">
            <input value={userId} onChange={(e)=>setUserId(e.target.value)} type="text" placeholder='ID user' />
            <input value={copone} onChange={(e)=>setcopone(e.target.value)} type="text" placeholder='copone' />
            <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" placeholder='amount' />
            <button onClick={DepositMany} className='btn btn-primary'>Dèposit</button>
        </div>
    </div>
  )
}

export default Shipping
