// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';

const HomePage = () => {
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
              <h2 className="content-heading">About Airbnb: What it is and how it works</h2>
              <p>You can host anything, anywhere, so guests can enjoy everything, everywhere.</p>
              <h2 className="content-heading">A community built for belonging</h2>
              <p>Airbnb began in 2008 when two designers who had space to share hosted three travellers looking for a place to stay. Now, millions of Hosts and guests have created free Airbnb accounts to enjoy each other's unique view of the world.</p>
              <h2 className="content-heading">Unique stays, Experiences, Adventures and more</h2>
              <p>From cosy cottages to elegant penthouses, Hosts are happy to share their places. Whether it's a work trip, weekend getaway, family holiday or a longer stay, there are millions of amazing places to visit.</p>
              <h2 className="content-heading">Services you can trust</h2>
              <p>We want your experience with Airbnb to be easy and enjoyable. Here’s how we’re working to help make you feel secure and protected:</p>
              <h3 className="content-sub-heading">Verified personal profiles and listings</h3>
              <p>Smart messaging for Hosts and guests to safely communicate with confidence</p>
              <p>A trusted platform for collecting and transferring payments.</p>
              <p>Learn more about our commitment to your safety in our Help Centre.</p>
              <h2 className="content-heading">24/7 support</h2>
              <p>Got questions? Get answers in our Help Centre. You can learn about finding a place to stay, paying for your reservation and more.</p>
              <p>Our guests and Hosts are always on the go, and so are we. Our Global Community Support team is at the ready 24/7 in 11 different languages. Feel free to contact us.</p>
              <h2 className="content-heading">Onwards and upwards</h2>  
              <p>We can’t wait to welcome you to Airbnb.</p>
            </div>
          </main>
        </div>
      );
    };

export default HomePage;