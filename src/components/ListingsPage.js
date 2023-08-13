// src/components/ListingsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css'; 

const ListingsPage = () => {
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
          {/* Property Listings */}
          <h2 className="content-heading">Property Listings</h2>
          <div className="listing">
            <img
              src="/Cozy_Cottage.jpeg"
              alt="Property 1"
              className="listing-image"
            />
            <h3 className="listing-title">Cozy Cottage</h3>
            <p className="listing-description">Charming cottage in a peaceful location.</p>
          </div>
          <div className="listing">
            <img
              src="/Luxury_Penthouse.jpeg"
              alt="Property 2"
              className="listing-image"
            />
            <h3 className="listing-title">Luxury Penthouse</h3>
            <p className="listing-description">Elegant penthouse with stunning city views.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListingsPage;