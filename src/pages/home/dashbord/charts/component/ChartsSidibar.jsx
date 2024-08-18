import React, { useEffect, useState } from 'react'
import { FaArrowRight,FaCamera} from "react-icons/fa";
import './css/Charts.css'
function ChartsSidibar({BlueRibbon,areaSeriesChart,lineSeriesCh,setBlueRibbon,setareaSeries,setlineSeriesCh,setbarSeries,setCandel,setbaselineSeriesCH,sethistogramSeriesCh,setAccount}) {
    const [selectedOption, setSelectedOption] = useState('');
    const [checkedOption, setCheckedOption] = useState(null);

    const [checkedOptions, setCheckedOptions] = useState({
        horzLine: false,
        Blueribbon:false,
        areaSeries:false
    });

    const handleChange = (event) => {
        const { id, checked } = event.target;
        setCheckedOptions(prevState => ({
            ...prevState,
            [id]: checked
        }));
    };

   useEffect(()=>{

    const horzLine = document.getElementById('horzLine');
    const Blueribbon = document.getElementById('Blueribbon');
    const areaSeries = document.getElementById('areaSeries');



    if (horzLine && horzLine.checked) {
        setlineSeriesCh(true)
    }
    if (Blueribbon && Blueribbon.checked) {
        setBlueRibbon(true)
    }
    if (areaSeries && areaSeries.checked) {
        setareaSeries(true)
    }

   },[checkedOptions,BlueRibbon,areaSeriesChart,lineSeriesCh,])


    useEffect(() => {



        if(selectedOption === "barSeries"){
            setbarSeries(true)
            setCandel(false)
            setbaselineSeriesCH(false)
            sethistogramSeriesCh(false)
        }
        if(selectedOption === "Candel"){
            setbarSeries(false)
            setCandel(true)
            setbaselineSeriesCH(false)
            sethistogramSeriesCh(false)
        }
        if(selectedOption === "histogramSeries"){
            setbarSeries(false)
            setCandel(false)
            setbaselineSeriesCH(false)
            sethistogramSeriesCh(true)
        }
        if(selectedOption === "baselineSeries"){
            setbarSeries(false)
            setCandel(false)
            setbaselineSeriesCH(true)
            sethistogramSeriesCh(false)
        }
    }, [selectedOption]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

   

  return (
    <div className="Account">
    <div className="Account-container">
       <div className="account-btn-close col-12">
        <h1 onClick={()=>setAccount(false)} className='text-white'>
          <FaArrowRight/>
        </h1>
        </div>
       <div className="Account-container-heigth">
       <hr />
        <div className="Account-container-checkeck ">
            <input 
                id='horzLine'
                type="checkbox"
                checked={checkedOptions.horzLine}
                onChange={handleChange}
          />
            <h3>horzLine</h3>
        </div>
        <hr />
        <div className="Account-container-checkeck ">
            <input 
              id='Blueribbon'
              type="checkbox"
              checked={checkedOptions.Blueribbon}
              onChange={handleChange}
            />
            <h3>Blue ribbon</h3>
        </div>
        <hr />
        <div className="Account-container-checkeck ">
            <input
              id='areaSeries'
              type="checkbox"
              checked={checkedOptions.areaSeries}
              onChange={handleChange}
            />
            <h3>areaSeries</h3>
        </div>
        <hr />
            <div className="Account-container-checkeck">
                <input
                    type="radio"
                    value="barSeries"
                    checked={selectedOption === 'barSeries'}
                    onChange={handleOptionChange}
                />
                <h3>barSeries</h3>
            </div>
            <hr />
            <div className="Account-container-checkeck">
                <input
                    type="radio"
                    value="Candel"
                    checked={selectedOption === 'Candel'}
                    onChange={handleOptionChange}
                />
                <h3>Candel</h3>
            </div>
            <hr />
            <div className="Account-container-checkeck">
                <input
                    type="radio"
                    value="histogramSeries"
                    checked={selectedOption === 'histogramSeries'}
                    onChange={handleOptionChange}
                />
                <h3>histogramSeries</h3>
            </div>
            <hr />
            <div className="Account-container-checkeck">
                <input
                    type="radio"
                    value="baselineSeries"
                    checked={selectedOption === 'baselineSeries'}
                    onChange={handleOptionChange}
                />
                <h3>baselineSeries</h3>
            </div>
            <hr />
       </div>
    </div>
</div>
  )
}

export default ChartsSidibar
