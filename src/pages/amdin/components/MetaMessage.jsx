import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function MetaMessage({userInfo}) {

  const [operation,setoperation] = useState('')
  const [message,setmessage] = useState('')
  const [userId,setuserId] = useState('')
  const [user,setUser]= useState()

  const sendmessage = async()=>{
    if(userId ===''){
      return  toast.error('get user Id')
    }
    if(operation ===''){
      return  toast.error('get operation')
    }
    if(message ===''){
      return  toast.error('get message')
    }
    await axios.post('http://localhost:2006/api/meta-bank/v150//meta-message',{
      userId:userId,
      message : message ,
      operation:operation
    }).then(()=>{
      toast.success('message sending')
    })
  }

  useEffect(()=>{
    if(userId){
      const getUser = async()=>{
        await axios.get('http://localhost:2006/api/meta-bank/v150/user/'+userId,{
          headers: {
            Authorization: "Bearer " + userInfo.token,
        }
        })
        .then((res)=>{
          setUser(res.data)
        }).catch(()=>{
          toast.error('user not found')
        })
      }
      getUser()
    }
  },[userId])

  //delete message 
  const deleteMsg = async(id)=>{
    await axios.delete('http://localhost:2006/api/meta-bank/v150//meta-message/delete/'+id,{
      headers: {
        Authorization: "Bearer " + userInfo.token,
    }
    })
    .then(()=>{
      toast.success('msg delected')
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div style={{display:"flex",alignItems:'center',height:'80vh',justifyContent:'center'}} className="MetaMessage col-12">
       <div style={{ display:"flex",alignItems:'center',gap:'20px',height:'100',justifyContent:'center',flexDirection:'column'}} className="MetaMessage-contianer  col-6 bg-white">
            <input value={userId} onChange={(e)=>setuserId(e.target.value)} type="text" style={{width:'80%',height:'45px'}} placeholder='userId'/>
            <input value={operation} onChange={(e)=>setoperation(e.target.value)} type="text" style={{width:'80%',height:'45px'}} placeholder='operation'/>
            <input value={message} onChange={(e)=>setmessage(e.target.value)} type="text" style={{width:'80%',height:'45px'}} placeholder='message'  />
            <button onClick={sendmessage} className='btn btn-primary'>send</button>
            {user && user?.metaMessages.map(msg=>{
              return(
                <div className="MetaMessage-contianer-messges  col-12">
                <p className='text-center'> message : {msg?.message}  <div onClick={()=>deleteMsg(msg?._id)} className="btn btn-danger">delete</div></p>
              </div>
              )
            })}
        </div> 
    </div>
  )
}

export default MetaMessage
