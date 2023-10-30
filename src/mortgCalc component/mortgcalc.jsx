import React, { useState } from 'react';
import './mortg.css';

export const Mortgcalc = () => {

  const [propertyPrice, setPropertyPrice] = useState(100000);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(20);
  const [interestRate, setInterestRate] = useState(5);
  const [loanPeriod, setLoanPeriod] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [showResult, setShowResult] = useState(false);  // New state

  const downPaymentAmount = (propertyPrice * downPaymentPercentage) / 100;

  const calculateMonthlyPayment = () => {
    const principal = propertyPrice - downPaymentAmount;
    const r = interestRate / 1200; // Monthly interest rate
    const n = loanPeriod * 12; // Number of months

    const payment = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(payment.toFixed(2));
    setShowResult(true);  // Show the result when the button is clicked
  };

  return (
    <div className="calculator">
      <h1>Mortgage Calculator</h1>
      <label>
        Property Price: ${propertyPrice}
        <input type="range" min="50000" max="1000000" value={propertyPrice} onChange={(e) => setPropertyPrice(e.target.value)} />
      </label>
      <label>
        Down Payment: {downPaymentPercentage}% (${downPaymentAmount.toFixed(2)})
        <input type="range" min="0" max="100" value={downPaymentPercentage} onChange={(e) => setDownPaymentPercentage(e.target.value)} />
      </label>
      <label>
        Interest Rate: {interestRate}%
        <input type="range" min="1" max="20" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </label>
      <label>
        Loan Period: {loanPeriod} years
        <input type="range" min="1" max="30" value={loanPeriod} onChange={(e) => setLoanPeriod(e.target.value)} />
      </label>
      <button onClick={calculateMonthlyPayment}>Calculate</button>
      {showResult && <p>Monthly Payment: ${monthlyPayment}</p>}  {/* Conditionally render */}
    </div>
  );
}