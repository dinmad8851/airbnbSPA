// src/components/ContactsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css'; 

const ContactsPage = () => {
  return (
    <div className="homepage-container">
      <header className="header-container">
        <img
          src="/airbnb_logo.jpg" 
          alt="Airbnb Logo"
          className="logo"
        />
        <h1 className="header-heading">Your Preferred Travel Partner!</h1>
      </header>
      <main className="main-container">
        <nav className="nav-container">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/listings" className="nav-link">
            Listings
          </Link>
          <Link to="/contactus" className="nav-link">
            Contact Us
          </Link>
        </nav>
        <div className="content-section">
          <h2 className="content-heading">Contact Information</h2>
          <p>If you have any questions or inquiries, feel free to contact us:</p>
          <ul className="contact-list">
            <li>Trade Register Number (Irish Companies Registration Office): IE 511825</li>
            <li>Contact Email: terms@airbnb.com</li>
            <li>Contact Us: <a href="https://www.airbnb.co.in/help/contact_us">https://www.airbnb.co.in/help/contact_us</a></li>
          </ul>
          <h2 className="content-heading">Complaints or Concerns</h2>
          <p>If you have a complaint or concern about Airbnb's platform or violations of Airbnb’s Terms of Service, you may contact the India grievance officer:</p>
          <p>Airbnb Ireland UC</p>
          <p>Attn.: Grievance Officer</p>
          <p>8 Hanover Quay</p>
          <p>Dublin 2, D02 DP23</p>
          <p>Ireland</p>
          <p>Email: grievance-officer-india@airbnb.com</p>
        </div>
      </main>
    </div>
  );
};

export default ContactsPage;