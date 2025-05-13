import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const paymentOptions = [
    { name: "Credit Card", icon: "💳" },
    { name: "PayPal", icon: "🅿️" },
    { name: "Google Pay", icon: "🅖" },
    { name: "AliPay", icon: "🅐" },
    { name: "Coingate", icon: "🪙" },
  ];

  return (
    <div className="payment-container">
      <div className="payment-left">
        <h2>3. Select payment</h2>
        <div className="payment-options">
          {paymentOptions.map((option) => (
            <button
              key={option.name}
              className={`payment-option ${paymentMethod === option.name ? "selected" : ""}`}
              onClick={() => setPaymentMethod(option.name)}
            >
              <span>{option.name}</span>
              <span>{option.icon}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="payment-right">
        <h3>MonEcole starter - 24 Months Plan</h3>
        <ul className="payment-summary">
          <li><span>✔️ Domain Name</span><span>$0.00</span></li>
          <li><span>Plan Discount - 75%</span><span className="green">-$196.80</span></li>
          <li><span>Taxes & Fees - India</span><span>$12.05</span></li>
        </ul>
        <div className="payment-total">
          <span>Total</span>
          <span>$79.01</span>
        </div>

        <div className="card-form">
          <label>Name on card</label>
          <input type="text" placeholder="John Doe" />
          <label>Card Number</label>
          <input type="text" placeholder="0000 0000 0000 0000" />
          <div className="card-details">
            <div>
              <label>Expiry</label>
              <input type="text" placeholder="MM / YY" />
            </div>
            <div>
              <label>CVC</label>
              <input type="text" placeholder="CVC" />
            </div>
          </div>
          <button className="submit-button">Submit Secure Payment</button>
          <p className="secure-note">🔒 Encrypted and Secure Payments | 30-Day Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
