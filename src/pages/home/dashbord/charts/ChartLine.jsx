import React, { useEffect, useRef, useState } from 'react';
import { ColorType, CrosshairMode, LineStyle, createChart } from 'lightweight-charts';
import axios from 'axios';
import { io } from 'socket.io-client';
import './chart.css'
import Crypto from './Crypto';
import SidibarRigth from './SidibarRigth';
import DealNotif from './component/DealNotif';
import { useSelector } from 'react-redux';
import OpenDealphone from './OpenDealphone';


function Chart({BlueRibbon,userAdmin,value,setValue, setLoading ,setData,min,setArriv,arrivalDeal,setMont}) {
  const chartRef = useRef(null);
  const chart = useRef(null);
  const newSeries = useRef(null);

  const [Acount,setAccount] = useState(true)
  const [dealValue,setdealValue] = useState(0.001)
  const [dealNotif,setDialNotif] = useState(false)
  const [dataSidibarRigth,setDataSidibarRith] = useState()


  const {user} = useSelector(state => state.auth)
  
  const socket = useRef()
  useEffect(()=>{
    socket.current = io ('https://test4-backend.onrender.com/')
    socket.current.emit('add-user',user?._id)
    return ()=>{
        socket.current.off('onlineUsers')
    }
  },[socket])

  useEffect(() => {
    if (!chart.current) {
      chart.current = createChart(chartRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: '#253248' },
          textColor: 'white',
        },
        grid: {
          horzLines: { color: '#334158' },
          vertLines: { color: '#334158' },
        },// one ____
        crosshair:{
          vertLine:{
            width:5,
            style:LineStyle.Solid,
            color:'#C38CDB44',
            labelBackgroundColor:'rgba(255, 255, 255, 0.603)'
          },
          horzLine:{
            color:'#C38CDB44',
            labelBackgroundColor:'blue'
          },
          mode: CrosshairMode.Magnet,
        },
        width: chartRef.current.clientWidth,
        height: chartRef.current.clientHeight,
      });


       //t____
       chart.current.timeScale().fitContent()
       //____
       chart.current.priceScale('right').applyOptions({
         borderColor:'rgba(255, 255, 255, 0.603)',
         
       })
        //_____
        chart.current.timeScale().applyOptions({
          borderColor:'rgba(255, 255, 255, 0.603)',
          rightOffset:20,
          barSpacing:15,
          minBarSpacing:5,
          fixLeftEdge:true,
          timeVisible:true,
        })

      /// line chart

      newSeries.current = chart.current.addAreaSeries({
        lineColor: 'rgb(103, 103, 255)',
        topColor: 'blue',
        bottomColor: 'rgba(0, 26, 255, 0.288',
      })

      const handleResize = () => {
        if (chart.current) {
          chart.current.applyOptions({
            width: chartRef.current.clientWidth,
            height: chartRef.current.clientHeight,
          });
        }
      };
     

      window.addEventListener('resize', handleResize);

      
  
  

      return () => {
        window.removeEventListener('resize', handleResize);
        if (chart.current) {
          chart.current.remove();
          chart.current = null;
        }
      };
    }
  
  }, []);

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${value}USDT&interval=${min}&limit=1000`)
        const data = res.data;
        const cdata = data.map((d) => ({
          time:Math.round((d[0]/1000)),
          open: parseFloat(d[1]),
          high: parseFloat(d[2]),
          low: parseFloat(d[3]),
          close: parseFloat(d[4]),
        }));
        if (newSeries.current) {
            const lindata = cdata.map((item) => ({time:item.time,value : (item.close + item.high)/2}) ,)
            newSeries.current.setData(lindata);

          setLoading(false)
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    getData();
    return () => {
      if (newSeries.current) {
        newSeries.current.setData([]);
        setLoading(false);
      }
    };

  },[value,min]);

  useEffect(()=>{
    const dealInput = document.getElementById('deal-input')
    window.onload =  ()=>{
      dealInput.focus()
    }
  },[])

  


  return (
    <div>
      <audio  id='audio' src="./cash-register-kaching-sound-effect-125042.mp3" controls></audio>
      <div className='Chart-navbar' style={{display:'flex',height:'100vh'}}>
      <div className="chart" ref={chartRef} ></div>
      <Crypto userAdmi={userAdmin} socket={socket} min={min} setData={setData} setDataSidibarRith={setDataSidibarRith} value={value}  setValue={setValue} />
      <SidibarRigth setMont={setMont} value={value} socket={socket} arrivalDeal={arrivalDeal} setArriv={setArriv} dataSidibarRigth={dataSidibarRigth} />
      <OpenDealphone value={value} setMont={setMont} socket={socket} arrivalDeal={arrivalDeal} setArriv={setArriv} dataSidibarRigth={dataSidibarRigth} setDialNotif={setDialNotif} dealValue={dealValue}  setdealValue={setdealValue} />
      {dealNotif &&<DealNotif/>}
      </div> 
    </div>
  );
}

export default Chart;
