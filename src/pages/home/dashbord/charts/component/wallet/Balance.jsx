import React, { useEffect, useRef, useState } from 'react'
import './balance.css'
import { IoStatsChart } from "react-icons/io5";
import {ThreeDots} from 'react-loader-spinner'
import Chart from 'chart.js/auto'; // Import Chart.js
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Balance({setwidthDraw , setBalance , setActive}) {

    const {user} = useSelector(state => state.auth)

    const navigate = useNavigate()
    const [totalReceivedAmount,sttotalReceivedAmount] =useState()
    const [totalsendedAmount,sttotalsendedAmount] =useState()
    const [userInfo,setUserInfo] = useState(true)
    const chartRef = useRef(null);
    useEffect(()=>{
        let myChart = null; // Variable to hold the chart instance

        // Function to create or update the chart
        const updateChart = () => {
          if (chartRef.current) {
            if (myChart) {
              myChart.destroy(); // Destroy the previous chart instance
            }
            // Create new chart instance
            myChart = new Chart(chartRef.current, {
              type: 'bar',
              data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                  label: 'transfer money',
                  data: [12, 19, 3, 5, 2, 80],
                  backgroundColor:[
                    "rgba(0, 0, 255, 0.37)",
                  ],
                  borderColor :[
                    'blue'
                  ],
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }
            });
          }
        };
    
        // Call updateChart initially and whenever userInfo changes
        updateChart();
    
        const totalReceivedAmount = user?.notification?.filter(not => not.operation === "recieve").reduce((acc, not) => acc + not.amount , 0);
        sttotalReceivedAmount(totalReceivedAmount)
        //send mony
        const totalsendedAmount = user?.notification?.filter(not => not.operation === "send")
        .reduce((acc, not) => acc + not.amount, 0);
        sttotalsendedAmount(totalsendedAmount)
        // Clean up function to destroy the chart instance when component unmounts
        return () => {
          if (myChart) {
            myChart.destroy();
          }
        };
        //recieve mony
    },[user])
            

  return (
   <div className="Account2">
    <div className="Account-container2">
    <div className="account-btn-close bg-white col-12">
            <h1 onClick={()=>setBalance(false)} className='text-dark'>
              <FaArrowRight/>
            </h1>
         </div>
         <div className="Balance">
        <div className="container col-10">
            <> <div className="Balance-Left col-5">
                <div className="amount col-12 ">
                    <h3>Meta-Bank Balance</h3>
                    <h1 style={{rotate:'0deg'}}>{user?.amount?.toFixed(2)} USD*</h1>
                    <p style={{color:'rgb(0, 36, 109)'}}>Available</p>
                    <div className="money">
                        <p>USD <span>-----------------</span> {user?.amount?.toFixed(2)} USD</p>
                        <p>EUR <span>-----------------</span> 0.00 EUR</p>
                        <p>GBP <span>-----------------</span> 0.00 GBP</p>
                    </div>
                    <p style={{color:'rgb(0, 36, 109)'}}>Un texte est une série orale ou écrite de mots perçus comme </p>
                    <button onClick={()=>navigate('/dashbord/witdraw')}>Transfer Money</button>
                    <p style={{color:'rgb(0, 36, 109)'}}>
                    Set up auto transfers
                    </p>
                </div>
                    <h6 style={{color:'rgb(0, 36, 109)'}}>Insights <span>Last 7 days</span></h6>
                    <div className="transfer-wek col-12">
                    <h6 style={{color:'rgb(0, 36, 109)'}}>Money received</h6>
                    <h1 style={{color:'rgb(0, 36, 109)',rotate:'0deg'}}>{totalReceivedAmount ? totalReceivedAmount : 0} USD</h1>
                    <p style={{color:'rgb(0, 36, 109)'}}> Total money received</p>
                </div>
                <div className="transfer-wek col-12">
                    <h6 style={{color:'rgb(0, 36, 109)'}}>Dispatches</h6>
                    <h1 style={{color:'rgb(0, 36, 109)',rotate:'0deg'}}> - {totalsendedAmount ? totalsendedAmount : 0} USD</h1>
                    <p style={{color:'rgb(0, 36, 109)'}}>Total funds sent</p>
                </div>
                <div className="transfer-wek col-12">
                    <p style={{color:'rgb(0, 36, 109)'}}>Dispatches</p>
                </div>
            </div>
            <div className="Balance-right col-7 ">
               <div className="user-id">
                <h6>
                    Your id : <span>{user?._id} </span>
                </h6>
                <div className="line-data">
                    <h3>61 %</h3>
                    <h4>Ircome Goale</h4>
                    <h5>progress to month <span>61% / 100%</span></h5>
                    <div className="line">
                        <div className="line-nav"></div>
                    </div>
                </div>
               </div>
               <div className="chart">
                    <h6>data charts <span><IoStatsChart/>  </span></h6>
                    <p>
                    Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant 
                    </p>
                    <canvas ref={chartRef} width="300" height="180" id="barChart"></canvas>
               </div>
            </div> </> 
        </div>
    </div>
    </div>
   </div>
  )
}

export default Balance
