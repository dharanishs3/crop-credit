
// src/components/PaymentPage.js
import React, { useState } from 'react';
import './PaymentPage.css'; // Ensure you create this CSS file for styling

const PaymentPage = ({ applicationId }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // // Handle payment submission here
    console.log('Payment submitted', paymentDetails);
  };

  return (
    <div className="payment-page">
      <div className="background-animation"></div>
      <div className="payment-content">
        <div className="payment-header">
          <h1>Secure Payment</h1>
          <p className="application-id">Application ID: {applicationId}</p>
        </div>
        <div className="payment-card">
          <div className="payment-summary">
            <div><h2>Loan Details</h2></div>
            <ul>
              <li><strong>Application ID:</strong> {applicationId}</li>
              <li><strong>Loan Amount:</strong> $10,000</li>
              <li><strong>Repayment Amount:</strong> $1,000</li>
              <li><strong>Next Repayment Date:</strong> 2024-09-15</li>
            </ul>
          </div>
          <form className="payment-form" onSubmit={handleSubmit}>
            <h2>Payment Information</h2>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                // required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={paymentDetails.cardName}
                onChange={handleChange}
                placeholder="John Doe"
                // required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                // required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleChange}
                placeholder="123"
                // required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={paymentDetails.amount}
                onChange={handleChange}
                placeholder="$1000"
                // required
              />
            </div>
            <button type="submit" className="submit-btn">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;