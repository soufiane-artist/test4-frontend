import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Crypto({ userAdmin, socket, value, setData, setValue, setDataSidibarRith, min }) {
  const { user } = useSelector(state => state.auth);


  const currencies = [
    'BTC', 'ETH', 'ADA', 'XRP', 'SOL', 'DOT', 'DOGE', 'UNI', 'LTC', 'LINK',
    'BCH', 'XLM', 'MATIC', 'VET', 'ETC', 'FIL', 'TRX', 'EOS', 'XTZ', 'THETA',
    'AAVE', 'MKR', 'COMP', 'ALGO', 'AVAX', 'ATOM', 'NEO', 'KSM', 'MIOTA', 'GRT',
    'DASH', 'ZEC', 'YFI', 'REN', 'SNX', 'OMG', 'BAT', 'ZRX', 'LRC', 'SUSHI',
    'UMA', 'CRV', '1INCH', 'ENJ', 'STORJ', 'ANKR', 'CHZ', 'CVC', 'OCEAN', 'RSR',
    'KNC', 'BAL', 'BNT', 'MANA', 'REN', 'QNT', 'NANO', 'RLC', 'BAND', 'REP',
    'ARDR', 'ICX', 'WAVES', 'HBAR', 'HNT', 'OXT', 'SNT', 'STMX', 'FUN', 'CELR',
    'CKB', 'PNT', 'LEND', 'NMR', 'LSK', 'POWR', 'SRM', 'RUNE', 'KAVA', 'WRX',
    'AKRO', 'FET', 'MTL', 'RIF', 'ANT', 'REQ', 'STMX', 'TROY', 'MDT', 'AION',
    'CTSI', 'DGB', 'ELF', 'DOCK', 'COTI', 'KMD', 'DENT', 'IOTX', 'TCT', 'MITH'
  ];

  useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${value.toLowerCase()}usdt@kline_${min}`);
    ws.onmessage = (event) => {
      const trade = JSON.parse(event.data);
      const tradeData = {
        time: trade.k.t / 1000,
        open: parseFloat(trade.k.o),
        high: parseFloat(trade.k.h),
        low: parseFloat(trade.k.l),
        close: parseFloat(trade.k.c),
      };
      setDataSidibarRith(tradeData);
      setData(tradeData);
      socket?.current?.emit('sendData', (trade));
    };
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    return () => {
      ws.close(); // Close WebSocket connection on component unmount
    };
  }, [value, min,socket.current]);

  const handleChange = (e) => {
    if (user?.deals?.filter(deal => deal.close === false).length > 0) {
      toast.warning('You cannot change the value until after closing the deal');
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <select value={value} onChange={handleChange} className="select">
      {currencies.map((currency, index) => (
        <option key={index} value={currency}>{currency}</option>
      ))}
    </select>
  );
}

export default Crypto;
