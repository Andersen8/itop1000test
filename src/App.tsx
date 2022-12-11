import React from 'react';
import './App.css';
import Header from './components/header/Header';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { filterEUR, filterUSD } from './utils/utils';
import Main from './components/main/Main';

function App() {
  // const [ua, setUA] = useState<number>(0)
  const [usd, setUSD] = useState<number>(0)
  const [eur, setEUR] = useState<number>(0)

  useEffect(()=>{
      const eurodollar = async ()=>{
          const resp = await axios('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
          const euro = filterEUR(resp.data)            
          setEUR(euro)
          const dollar = filterUSD(resp.data)
          setUSD(dollar)      
      }
     eurodollar()
  },[])
  return (
    <>
      <Header dollar={usd} euro={eur}/>
      <Main dollar={usd} euro={eur}/>
    </>
  );
}

export default App;
