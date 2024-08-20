import React, { useEffect, useState } from 'react'
import './css/Deal.css'
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import axios from 'axios'
import { toast } from 'react-toastify';
function OpenDeal({totale,seTotale,setAccount,data,setMont,socket,value,userAdmin,setLoading}) {


  const {user} = useSelector(state => state.auth)
 

  console.log(userAdmin);

  console.log(userAdmin.deals);
  
  const closeDeal = async(id,openPrice,buy,volume,name)=>{

    setLoading(true)

    if(value+'USDT' === name ){
      await axios.put(`${process.env.REACT_APP_API_URL}/deals/`+id,{
        closePrice:data.close,
        close:true,
        totale:(buy === true ? data.close - openPrice : openPrice - data.close) * (volume < 0 ? 1 : volume)
    },{
      headers : {
        Authorization : 'bearer ' + user.token
      }
     }).then(async(res)=>{
        await axios.put(`${process.env.REACT_APP_API_URL}/deals/user/`+userAdmin?._id,{
          /*amount*/amount:/*user?.amount*/ parseFloat(userAdmin?.amount) + parseFloat(res.data?.totale.toFixed(2))
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
    const openDeals = userAdmin.deals.filter(d => d.close === false);
    const total = openDeals.reduce((sum, deal) => sum + (deal?.buy === true ? (data?.close - deal?.openPrice)*deal.volume : (deal?.openPrice - data?.close) * deal.volume), 0);
    seTotale(total?.toFixed(2))
  }, [userAdmin.deals,data]);

  useEffect(()=>{
    if(userAdmin.amount * (-1) > totale){
      const UpdateDeals =async ()=>{
        await axios.put(`${process.env.REACT_APP_API_URL}/dealsClose/`+userAdmin._id,{
          closePrice : data?.close,
          data:data?.close
        },{
          headers : {
            Authorization : 'bearer ' + user.token
          }
         })
        .then(async(res)=>{
          await axios.put(`${process.env.REACT_APP_API_URL}/amountUser/`+userAdmin._id,{
            amount : - userAdmin?.amount ,
          },{
            headers : {
              Authorization : 'bearer ' + user.token
            }
           }).then((res)=>{
            console.log(res.data)
            setMont(res.data)
          }).catch((err)=>{
            toast.warning('error request amount')
          }) 
        }).catch((error)=>{
          console.log(error);
        })
    }
    UpdateDeals()
    }
  },[totale])
 
 
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
                <h5>Money balance: <span>{user?.amount?.toFixed(2)} </span></h5>
                <h5>Available capital: <span>{user?.amount.toFixed(2)} </span></h5>
                <h5>Profit margin: <span> {totale} </span></h5>
            </div>
            <div className="DealNotifs-deal-position">
                <h1>Positions</h1>
            </div>
          {userAdmin?.deals.map(d =>{
            return (
                d?.close === false  && <div key={d?._id} style={{background :d.close === true && '#cccccc2f'}}  className={"DealNotifs-deal col-12"}>
                <div className="DealNotifs-deal-left">
                  <h3>{d?.name ? d?.name : 'not found'} <span style={{color: d.buy === true ? 'rgb(36, 113, 255)' : 'red'}} >{d.buy === true ? "buy" : "sell"} {d?.volume} </span></h3>
                  <h5>{d?.openPrice} → {data?.close} </h5>
                </div>
                <div className="DealNotifs-deal-rigth">
                  <div className="DealNotifs-deal-rigth-text">
                  <h5>{new Date().toDateString()} </h5>
                  {
             d.close === false ?  <h3 style={{color:(d.buy === true ? data?.close - d?.openPrice < 0 ?  'red' : 'rgb(36, 113, 255)' :  d?.openPrice- data?.close < 0 ?  'red' : 'rgb(36, 113, 255)' )}} >{
             (d?.buy === true ? (data?.close - d?.openPrice)*d.volume : (d?.openPrice - data?.close) * d.volume).toFixed(2) 
            } </h3> : <h3 style={{color:d.totale > 0 ?'rgb(36, 113, 255)' : 'red'}} >{
              (d?.totale).toFixed(2)
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

export default OpenDeal
