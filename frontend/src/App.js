import React from 'react';
import './App.css';
import Home from './pages/Home';
import Transfer from './pages/TransferCredit';
import Deadline from './pages/Deadline.js';
import Meetings from './pages/Meetings.js';
import Login from './pages/LogIn.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/faqs" element={<Deadline />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;