import React, { useState, useEffect } from 'react';
import './_tokeninformation.css'

import axios from 'axios';


export default function TokenInformation(props) {
  
  const [tokenData, setTokenData] = useState(new Set())

  useEffect(() => {
    async function allTokenData() {
        try {
          const response = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD`)
          const fetchedTokens = response.data.DISPLAY['BTC']['USD']
          setTokenData(fetchedTokens)
        } catch (error) {
          console.log(error)
        }
    }
    allTokenData()
  }, [])
  
  return (

    <div className="token-info-page">

      <div className="token-info-container">
      <h1>{`BTC Information`}</h1>
      
      <div className="stock">
        <span className="symbol">Price USD</span>
        <span className="change">{tokenData['PRICE']}</span>
      </div>

      <div className="stock">
        <span className="symbol">24 Hour Change</span>
        <span className="change">{tokenData["CHANGE24HOUR"]}</span>
      </div>

      <div className="stock">
        <span className="symbol">24 Hour % Change</span>
        <span className="change">{tokenData["CHANGEPCT24HOUR"]}%</span>
      </div>

      <div className="stock">
        <span className="symbol">Daily % Change</span>
        <span className="change">{tokenData["CHANGEPCTDAY"]}%</span>
      </div>

      <div className="stock">
        <span className="symbol">Hourly Change</span>
        <span className="change">{tokenData["CHANGEHOUR"]}</span>
      </div>

      <div className="stock">
        <span className="symbol">Change % Hour</span>
        <span className="change">{tokenData["CHANGEPCTHOUR"]}%</span>
      </div>

      <div className="stock">
        <span className="symbol">Market Cap</span>
        <span className="change">{tokenData["MKTCAP"]}</span>
      </div>

      <div className="stock">
        <span className="symbol">Day High</span>
        <span className="change">{tokenData["HIGHDAY"]}</span>
      </div>

      </div>  

      </div>

  );
}

    