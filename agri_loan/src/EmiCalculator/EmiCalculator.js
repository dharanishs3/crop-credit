import React, { useState } from 'react';
import './EmiCalculator.css'; // Ensure you have this CSS file
import Navbar from '../Navbar/Navbbar';
import Footer from '../Footer/Footer';

const loanOptions = [
  { id: 1, name: 'Crop Loan', rate: 11.5 },
  { id: 2, name: 'Digital Gold Loan', rate: 11.5 },
  { id: 3, name: 'Agri Credit Card', rate: 7.0 },
  { id: 4, name: 'Farm Mechanisation Loan', rate: 9.0 }
];

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [tenure, setTenure] = useState('');
  const [selectedLoan, setSelectedLoan] = useState(loanOptions[0]);
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const principalAmount = parseFloat(principal);
    const monthlyInterestRate = selectedLoan.rate / 12 / 100;
    const totalMonths = parseInt(tenure) * 12;

    if (principalAmount && monthlyInterestRate && totalMonths) {
      const emiAmount = (principalAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
      setEmi(emiAmount.toFixed(2));
    } else {
      setEmi(null);
    }
  };

  return (
    <div className='emi-cal-page'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="emi-calculator-page">
        <div className="emi-calculator">
          <h2>EMI Calculator</h2>
          <div className="form-group">
            <label>Select Loan Type:</label>
            <select
              value={selectedLoan.id}
              onChange={(e) => setSelectedLoan(loanOptions.find(loan => loan.id === parseInt(e.target.value)))}
            >
              {loanOptions.map((loan) => (
                <option key={loan.id} value={loan.id}>
                  {loan.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Principal Amount:</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Enter principal amount"
            />
          </div>
          <div className="form-group">
            <label>Tenure (Years):</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="Enter tenure in years"
            />
          </div>
          <button onClick={calculateEMI} className="calculate-button">Calculate EMI</button>

          {emi && (
            <div className="result">
              <h3>Your Monthly EMI for {selectedLoan.name} is: ₹{emi}</h3>
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default EmiCalculator;
