import React, { useEffect, useRef, useState } from 'react'
import Chart from './charts/Chart'
import { BiExport } from "react-icons/bi";
import './Dash.css'
import Sdibar from './sidibar/Sdibar';
import Minutes from './charts/Minutes';
import AccountUser from './charts/component/AccountUser';
import Notification from './charts/component/Notifacation';
import Wallet from './charts/component/Wallet';
import DealNotif from './charts/component/DealNotif';
import Support from './charts/component/Support';
import Balance from './charts/component/wallet/Balance';
import EditProfile from './charts/component/EditProfile';
import Analytices from './charts/component/Analytics';
import Admin from '../../amdin/AmdinDash';
import LoadingPage from './LoadingPage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserById } from '../../../redux/api/authApi';
import { io } from 'socket.io-client';
import OpenDeal from './charts/component/OpenDeal';
import { SidibarDash } from '../../../function/adminDash';
import ChartsSidibar from './charts/component/ChartsSidibar';



function Dashbord({}) {

  
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('userInfo')))
 
  const [chartC,setchartC] = useState(true)

  const [dataChart,setDataCahrt] = useState([])
  const [sidibar,setSidibar] = useState(true)
  const [arrowOpen,setarrowOpen] = useState(true)
  const [account,setAccount] = useState(false)
  const [Desposit,setDesposit] = useState(false)
  const [Notif,setNotif] = useState(false)
  const [DealNotifCation,setDealNotif] = useState(false)
  const [support,setSupport] = useState(false)
  const [Balancei,setBalance] = useState(false)
  const [EditProf,SetEditProf] = useState(false)
  const [adminDash,setAdminDash]= useState(false)
  const [loading,setLoading] = useState(false)
  const [openDeal,setopenDeal] = useState(false)
  const dispatch = useDispatch()
  const [Mont,setMont] = useState()
  const [data,setData] = useState()
  const [min,setmin] = useState('1m')
  const [userAdmin,setAdmin]=useState()
  const [arrivalDeal,setArriv] = useState()
  const [value, setValue] = useState('BTC');
  const [totale,seTotale] = useState()
  const [Charts,seTCharts] = useState(false)
  // chart
  const [BlueRibbon,setBlueRibbon] = useState(false) // true checkbox
  const [barSeriesChart,setbarSeries] = useState(false) // true
  const [Candel,setCandel] = useState(true) // true
  const [areaSeriesChart,setareaSeries] = useState(false) // true checkbox
  const [baselineSeriesCH,setbaselineSeriesCH] = useState(false) // true
  const [histogramSeriesCh,sethistogramSeriesCh] = useState(false) // true
  const [lineSeriesCh,setlineSeriesCh] = useState(false) // true check box


  //socket io
  const socket = useRef()
  useEffect(()=>{
    socket.current = io ('http://localhost:2002/')
    socket.current.emit('add-user',user._id)
    socket.current.on('dataReiceve',(data)=>{
      console.log(data);
    })
    socket.current.on('receiveId',(userId)=>{
      if(userId){
        const getUser =async()=>{
          setLoading(true)
          await  axios.get(`${process.env.REACT_APP_API_URL}/api/v2002/auth/user/`+userId)
          .then((res)=>{
              if(res.data){
                  localStorage.setItem('userAdmin',JSON.stringify(res.data))
                  dispatch(getUserById(res.data))
                  setUser(res.data)
                  setAdmin(res.data)
              }
              setLoading(false)
          }).catch(err=>{
              console.log(err);
          })
        }
        getUser()
      }
    })
    return ()=>{
        socket.current.off('onlineUsers')
    }
},[socket,Mont,arrivalDeal,min,value])

  
  useEffect(()=>{
    socket.current.on('mony-reicive',(data)=>{
      setMont(data)
  })
  
  },[socket.current])



  
  
  return (
    <div>
      {chartC &&  <Chart lineSeriesCh={lineSeriesCh} histogramSeriesCh={histogramSeriesCh} baselineSeriesCH={baselineSeriesCH} areaSeriesChart={areaSeriesChart} Candel={Candel} barSeriesChart={barSeriesChart} BlueRibbon={BlueRibbon} userAdmin={userAdmin} value={value} setValue={setValue} setMont={setMont} arrivalDeal={arrivalDeal} setArriv={setArriv} min={min} setData={setData} dataChart={dataChart} socket={socket.current} setLoading={setLoading} />}
      <div className="dash-arrow-open">
       {arrowOpen && <h3  onClick={()=>setSidibar(true)} ><span ><BiExport/></span></h3>}
      </div>
      {sidibar &&<Sdibar seTCharts={seTCharts} setAdminDash={setAdminDash} SetEditProf={SetEditProf} setBalance={setBalance} setopenDeal={setopenDeal} setDesposit={setDesposit} setSupport={setSupport} setDealNotif={setDealNotif} setNotif={setNotif}  setAccount={setAccount} user={userAdmin} setSidibar={setSidibar} setarrowOpen={setarrowOpen} />}
      <div className="dash-price-crypto">
        <div className="minutes">
        <Minutes min={min}  setmin={setmin} />
      </div>
        <p>{value} : {data?.close} </p>
      {account && <AccountUser SetEditProf={SetEditProf} setAccount={setAccount} user={user} />}
      {Desposit &&  <Wallet setAccount={setDesposit} user={user} />}
      {Notif && <Notification setAccount={setNotif} user={user} />}
      {DealNotifCation && <DealNotif value={value}  socket={socket} setMont={setMont}  userAdmin={userAdmin} setUserAdmin={setAdmin} data={data} setAccount={setDealNotif} />}
      {support && <Support setAccount={setSupport} user={user} />}
      {Balancei && <Balance setBalance={setBalance} />}
      {EditProf && <EditProfile  setMont={setMont} setAccount={SetEditProf} set SetEditProf={SetEditProf} />}
      {adminDash && <Admin setdashAdmin={setAdminDash}  />}
      {openDeal && <OpenDeal totale={totale} seTotale={seTotale} value={value} userAdmin={userAdmin} socket={socket}  setMont={setMont} setLoading={setLoading} setAccount={setopenDeal} data={data} />}
      {loading && <LoadingPage/> }
      {Charts && <ChartsSidibar barSeriesChart={barSeriesChart} Candel={Candel} baselineSeriesCH={baselineSeriesCH} histogramSeriesCh={histogramSeriesCh}   BlueRibbon={BlueRibbon} areaSeriesChart={areaSeriesChart} lineSeriesCh={lineSeriesCh}   setBlueRibbon={setBlueRibbon} setareaSeries={setareaSeries} setlineSeriesCh={setlineSeriesCh}   setbarSeries={setbarSeries} setCandel={setCandel} setbaselineSeriesCH={setbaselineSeriesCH} sethistogramSeriesCh={sethistogramSeriesCh}   setAccount={seTCharts}/>}
      </div>
 </div>
  )
}

export default Dashbord

