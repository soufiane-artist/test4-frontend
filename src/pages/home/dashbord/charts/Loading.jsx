import React from 'react'
import {ThreeDots} from 'react-loader-spinner'
 function Loading() {
  return (
    <div style={{background:'#253248',display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',width:'100%',position:'fixed',zIndex:'5'}} className="loading">
 <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="white"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loading
