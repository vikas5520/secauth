// src/App.js
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">Secauth</div>
          <ul>
            <li><a href="#">Get Started</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
          <div className="auth-buttons">
            <button>Login</button>
            <button>Register</button>
          </div>
        </nav>
      </header>
      <main>
        <h1>Choose Your Right Plan!</h1>
        <p>Protect your platform with advanced fraud detection algorithms. Safeguard your users and your business with ease.</p>
        <div className="billing-toggle">
          <button className="monthly active">Monthly</button>
          <button className="yearly">Yearly (20% off)</button>
        </div>
        <div className="pricing-plans">
          <div className="plan free">
            <h2>Free</h2>
            <p>$0/month</p>
            <ul>
              <li>1000 API Request Per month</li>
              <li>Total Products Created - 1</li>
              <li className="disabled">Customize the levels of security</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="plan premium">
            <h2>Premium</h2>
            <p>$999/month</p>
            <ul>
              <li>Unlimited API Request Per month</li>
              <li>Total Products Created - 2</li>
              <li>Customize the levels of security</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="plan commercial">
            <h2>Commercial</h2>
            <p>$3000/month</p>
            <ul>
              <li>Unlimited API Request Per month</li>
              <li>Total Products Created - 10</li>
              <li>Customize the levels of security</li>
            </ul>
            <button>Get Started</button>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="logo">Secauth</div>
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li>User Authentication</li>
              <li>Fraud Protection</li>
              <li>User Management</li>
              <li>Dashboard</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Help</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Terms and conditions</li>
              <li>Technical Support</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Contact</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Terms and conditions</li>
              <li>Technical Support</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 all rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;