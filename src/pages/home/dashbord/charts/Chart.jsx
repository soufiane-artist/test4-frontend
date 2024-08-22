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


function Chart({lineSeriesCh,histogramSeriesCh,baselineSeriesCH,areaSeriesChart,BlueRibbon,userAdmin,value,setValue, setLoading ,setData,min,setArriv,arrivalDeal,setMont,barSeriesChart,Candel}) {
  const chartRef = useRef(null);
  const chart = useRef(null);
  const newSeries = useRef(null);
  const barSeries = useRef(null);
  const areaSeries = useRef(null);
  const baselineSeries = useRef(null);
  const histogramSeries = useRef(null);
  const lineSeries = useRef(null);

  const [Acount,setAccount] = useState(true)
  const [dealValue,setdealValue] = useState(0.001)
  const [dealNotif,setDialNotif] = useState(false)
  const [dataSidibarRigth,setDataSidibarRith] = useState()
  const {user} = useSelector(state => state.auth)
  
  const socket = useRef()
  useEffect(()=>{
    socket.current = io ('http://localhost:2002/')
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

      // chart barseries
       barSeries.current = chart.current.addBarSeries({ upColor: '#26a69a', downColor: '#ef5350' });


     // const lindata = cdata.map((item) => ({time:item.time,value : (item.close + item.high)/2}) ,)


       //t____
       chart.current.timeScale().fitContent()
       //____
       chart.current.priceScale('right').applyOptions({
         borderColor:'rgba(255, 255, 255, 0.603)',
         
       })
        //_____
        chart.current.timeScale().applyOptions({
          borderColor:'rgba(255, 255, 255, 0.603)',
          minBarSpacing:5,
          fixLeftEdge:true,
          timeVisible:true,
        })

      /// line chart

      areaSeries.current = chart.current.addAreaSeries({
        lineColor: 'yellow', topColor: 'rgba(255, 255, 255, 0)',
        bottomColor: 'rgba(255, 255, 255, 0)',
       });

       // line chart 2
       baselineSeries.current = chart.current.addBaselineSeries({ baseValue: { type: 'price', price: 25 },
         topLineColor: 'rgba( 38, 166, 154, 1)',
          topFillColor1: 'rgba( 38, 166, 154, 0.28)',
           topFillColor2: 'rgba( 38, 166, 154, 0.05)',
            bottomLineColor: 'rgba( 239, 83, 80, 1)',
             bottomFillColor1: 'rgba( 239, 83, 80, 0.05)',
         bottomFillColor2: 'rgba( 239, 83, 80, 0.28)' });
        // line chart 3
        histogramSeries.current = chart.current.addHistogramSeries({ color: '#26a69a' });

        // line chart 4
         lineSeries.current = chart.current.addLineSeries({ color: '#2962FF' });
        // line chart 5


      newSeries.current = chart.current.addCandlestickSeries({
        upColor: BlueRibbon ?"rgb(44, 113, 216)":'#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: BlueRibbon ?"rgb(44, 113, 216)":'#26a69a',
        wickDownColor: '#ef5350',
      });

      const handleResize = () => {
        if (chart.current) {
          chart.current.applyOptions({
            width: chartRef.current.clientWidth,
            height: chartRef.current.clientHeight,
          });
        }
      };
     

      window.addEventListener('resize', handleResize);

      const handleSocketData = (dataChart) => {
        if(barSeriesChart){
          barSeries.current.update(dataChart)
        }
        if(Candel){
          newSeries.current.update(dataChart)
        }
       // 
      };
  
      socket.current.on('dataReiceve',handleSocketData)
  
  

      return () => {
        window.removeEventListener('resize', handleResize);
        if (chart.current) {
          chart.current.remove();
          chart.current = null;
        }
        if (socket?.current) {
          socket?.current?.off('dataReiceve', handleSocketData); 
        }
      };
    }
  
  },[BlueRibbon,barSeriesChart,Candel,areaSeriesChart,baselineSeriesCH,histogramSeriesCh,lineSeriesCh]);



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
        // baries
        const cdata2 = data.map(d => {
          return {
            time: Math.round((d[0]/1000)),
            value: (parseFloat(d[1]) + parseFloat(d[4]) ) /2 ,
          };
        })
        if(baselineSeriesCH){
           baselineSeries.current.setData(cdata2)
              setLoading(false)
        }
        if(histogramSeriesCh){
          histogramSeries.current.setData(cdata2)
             setLoading(false)
        }
        if(lineSeriesCh) {
          lineSeries.current.setData(cdata2)
             setLoading(false)
        }
        if(areaSeriesChart){
          areaSeries.current.setData(cdata2)
             setLoading(false)
        }

        if (barSeriesChart) {
          barSeries.current.setData(cdata);
          setLoading(false)
        }
        if (Candel) {
          newSeries.current.setData(cdata);
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

  },[value,min,BlueRibbon,barSeriesChart,Candel,areaSeriesChart,baselineSeriesCH,histogramSeriesCh,lineSeriesCh,]);

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
      <SidibarRigth setLoading={setLoading} setMont={setMont} value={value} socket={socket} arrivalDeal={arrivalDeal} setArriv={setArriv} dataSidibarRigth={dataSidibarRigth} />
      <OpenDealphone value={value} setMont={setMont} socket={socket} arrivalDeal={arrivalDeal} setArriv={setArriv} dataSidibarRigth={dataSidibarRigth} setDialNotif={setDialNotif} dealValue={dealValue} setLoading={setLoading}  setdealValue={setdealValue} />
      {dealNotif &&<DealNotif/>}
      </div> 
    </div>
  );
}

export default Chart;
