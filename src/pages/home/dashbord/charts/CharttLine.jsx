import React, { useEffect, useRef, useState } from 'react';
import { ColorType, createChart } from 'lightweight-charts';
import axios from 'axios';
import { io } from 'socket.io-client';
import './chart.css'
import Crypto from './Crypto';
import SidibarRigth from './SidibarRigth';


function ChartLine() {
  const chartRef = useRef(null);
  const [value, setValue] = useState('BTC');
  const chart = useRef(null);
  const newSeries = useRef(null);


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
        },
        width: chartRef.current.clientWidth,
        height: chartRef.current.clientHeight,
      });

      newSeries.current = chart.current.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
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
      try {
        const res = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${value}USDT&interval=1m&limit=1000`);
        const data = res.data;
        const cdata = data.map((d) => ({
          time: d[0] / 1000,
          open: parseFloat(d[1]),
          high: parseFloat(d[2]),
          low: parseFloat(d[3]),
          close: parseFloat(d[4]),
        }));
        if (newSeries.current) {
          newSeries.current.setData(cdata);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    getData();

   /* const handleSocketData = ()=>{
      if (socket.current) {
        socket.current.on('data', (data) => {
          if (newSeries.current) {
            newSeries.current.update(data);
            console.log(data);
          }
        });
      }
    }
    handleSocketData()
    return () => {
      if (socket.current) {
        socket.current.on('data', handleSocketData)
      }
    };*/
  }, [value]);

  return (
    <div>
      <div className="chart" ref={chartRef} style={{ width: '100%',height:'100%' }}></div>
    </div>
  );
}

export default ChartLine;
