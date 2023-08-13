// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactsPage from './components/ContactsPage';
import ListingsPage from './components/ListingsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="contactus" element={<ContactsPage />} />
        <Route path="listings" element={<ListingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;