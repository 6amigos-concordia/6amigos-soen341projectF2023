import React, { useState } from 'react';
import './mortg.css';
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';


export const Mortgcalc = () => {
  const [propertyPrice, setPropertyPrice] = useState(100000);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(20);
  const [interestRate, setInterestRate] = useState(5);
  const [loanPeriod, setLoanPeriod] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handlePropertyPriceChange = (e) => {
    setPropertyPrice(Number(e.target.value));
  };

  const handleDownPaymentPercentageChange = (e) => {
    setDownPaymentPercentage(Number(e.target.value));
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(Number(e.target.value));
  };

  const handleLoanPeriodChange = (e) => {
    setLoanPeriod(Number(e.target.value));
  };

  const calculateMonthlyPayment = () => {
    const downPaymentAmount = (propertyPrice * downPaymentPercentage) / 100;
    const principal = propertyPrice - downPaymentAmount;
    const r = interestRate / 1200;
    const n = loanPeriod * 12;

    const payment = principal === 0 || r === 0 
      ? 0
      : principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setMonthlyPayment(payment.toFixed(2));
    setShowResult(true);
  };

  return (
    <div className="container">
           <div className="Navbar">
                <NavBarLogo />
            </div>
            

      <div className='calculator'>
        <h1>Mortgage Calculator</h1>
        <label>
          Property Price: ${propertyPrice}
          <input
            type="range"
            min="50000"
            max="1000000"
            value={propertyPrice}
            onChange={handlePropertyPriceChange}
            aria-label="Property Price"
          />
        </label>
        <label>
          Down Payment: {downPaymentPercentage}% (${((propertyPrice * downPaymentPercentage) / 100).toFixed(2)})
          <input
            type="range"
            min="0"
            max="100"
            value={downPaymentPercentage}
            onChange={handleDownPaymentPercentageChange}
            aria-label="Down Payment"
          />
        </label>
        <label>
          Interest Rate: {interestRate}%
          <input
            type="range"
            min="1"
            max="20"
            value={interestRate}
            onChange={handleInterestRateChange}
            aria-label="Interest Rate"
          />
        </label>
        <label>
          Loan Period: {loanPeriod} years
          <input
            type="range"
            min="1"
            max="30"
            value={loanPeriod}
            onChange={handleLoanPeriodChange}
            aria-label="Loan Period"
          />
        </label>
        <button onClick={calculateMonthlyPayment}>Calculate</button>
        {showResult && <p>Monthly Payment: ${monthlyPayment}</p>}
      </div>
    </div>
  );
}
