import React, { useState } from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css';

import './Calculator.scss'


import Display from './Display'

function App() {

  const [amountValue, setAmountValue] = useState(5000)
  const [yearsValue, setYearsValue] = useState(3)


  const handleAmountChange = (value) => {
    setAmountValue(value)
  };
  const handleYearChange = (value) => {
    setYearsValue(value)
  };



  return (
    <div className="App">
      <h4>Valeur du bien {amountValue} €</h4>
      <InputRange
        step={10000}
        maxValue={1000000}
        minValue={70000}
        value={amountValue}
        onChange={handleAmountChange}
      />
      <h4>
        Pourcentage agence immobilière
      </h4>
      {Math.round(yearsValue)} %
      <InputRange
        step={0.1}
        maxValue={10}
        minValue={0}
        value={yearsValue}
        onChange={handleYearChange}
      />
      <Display years={yearsValue} amount={amountValue} />
    </div>
  );
}

export default App;
