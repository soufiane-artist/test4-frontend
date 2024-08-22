import React, { useEffect, useRef, useState } from 'react'
import './css/Deal.css'
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import axios from 'axios'
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
function DealNotif({value,data,socket,setAccount,userAdmin ,setUserAdmin,setMont}) {

  
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('userInfo')))



  const [totaleDeals,setTotale] = useState()
  useEffect(()=>{
    const getUser =async()=>{
      await  axios.get(`${process.env.REACT_APP_API_URL}/api/v2002/auth/user/`+user?._id,{
        headers : {
          Authorization : 'bearer ' + user.token
        }
       })
      .then((res)=>{
          if(res.data){
              localStorage.setItem('userAdmin',JSON.stringify(res.data))
              setUserAdmin(res.data)
          }
      }).catch(err=>{
          console.log(err);
      })
    }
    getUser()
  },[])

  const closeDeal = async(id,openPrice,buy,volume,name)=>{
    if(value+'USDT' === name ){
      await axios.put(`${process.env.REACT_APP_API_URL}/api/v2002/auth/deals/`+id,{
        closePrice:data.close,
        close:true,
        totale:(buy === true ? data.close - openPrice : openPrice - data.close) * (volume < 0 ? 1 : volume)
    },{
      headers : {
        Authorization : 'bearer ' + user.token
      }
     }).then(async(res)=>{
        await axios.put(`${process.env.REACT_APP_API_URL}/api/v2002/auth/deals/user/`+userAdmin?._id,{
          /*amount*/amount:/*user?.amount*/ parseFloat(userAdmin?.amount) + parseFloat(res.data?.totale?.toFixed(2))
        },{
          headers : {
            Authorization : 'bearer ' + user.token
          }
         })
        .then((res)=>{
          socket.current.emit('openDeal',(res.data))
          setMont(res.data)
        })
    })
    }else{
      return toast.warning(`You cannot lock the deal here ${value+'USDT'}`)
    }
  }

  useEffect(() => {
    const openDeals = userAdmin.deals.filter(d => d.close === true);
    const total = openDeals.reduce((sum, deal) => sum + deal.totale, 0);
    setTotale(total?.toFixed(2));
  }, [userAdmin.deals]);

  console.log();

  return (
    <div className="Account">
        <div className="DealNotifs-container">
        <div className="account-btn-close col-12">
            <h1 className='text-primary' onClick={()=>setAccount(false)} >
              <FaArrowRight/>
            </h1>
            </div>
            
          <div className="DealNotif-navbar">
          <div className="DealNotifs-deal-amount">
                <h5>Money balance: <span>{userAdmin?.amount?.toFixed(2)} </span></h5>
                <h5>Available capital: <span>{userAdmin?.amount?.toFixed(2)} </span></h5>
                <h5>Profit margin: <span>{totaleDeals}</span></h5>
            </div>
            <div className="DealNotifs-deal-position">
                <h1>Positions</h1>
            </div>
          {userAdmin?.deals.map(d =>{
            return (
              <div key={d?._id} style={{background :d.close === true && '#cccccc2f'}}  className={ "DealNotifs-deal col-12"}>
                  <div className="DealNotifs-deal-left">
                    <h3>{d?.name ? d?.name : 'not found'} <span style={{color: d.buy === true ? 'rgb(36, 113, 255)' : 'red'}} >{d.buy === true ? "buy" : "sell"} {d?.volume} </span></h3>
                    <h5>{d?.openPrice} → {d?.closePrice? d?.closePrice : data?.close} </h5>
                  </div>
                  <div className="DealNotifs-deal-rigth">
                    <div className="DealNotifs-deal-rigth-text">
                    <h5>{new Date(d?.createdAt).toISOString()} </h5>
                    {
             d.close === false ?  <h3 style={{color:(d.buy === true ? data?.close - d?.openPrice < 0 ?  'red' : 'rgb(36, 113, 255)' :  d?.openPrice- data?.close < 0 ?  'red' : 'rgb(36, 113, 255)' )}} >{
             (d?.buy === true ? (data?.close - d?.openPrice)*d.volume : (d?.openPrice - data?.close) * d.volume)?.toFixed(2) 
            } </h3> : <h3 style={{color:d.totale > 0 ?'rgb(36, 113, 255)' : 'red'}} >{
              (d?.totale)?.toFixed(2)
            } </h3>
          }
                    </div>
                  {d?.close ===  false && <div className="DealNotifs-deal-rigth-btn">
                    <button onClick={()=>closeDeal(d._id,d.openPrice,d.buy,d.volume,d.name)}>Close</button>
                  </div>}
                  </div>
              </div>
            )
          })}
          </div>
        </div>
    </div>
  )
}

export default DealNotif
