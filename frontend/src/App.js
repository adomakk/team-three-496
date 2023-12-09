import React from 'react';
import './App.css';
import Home from './pages/Home';
import Transfer from './pages/TransferCredit';
import Deadline from './pages/Deadline.js';
import Meetings from './pages/Meetings.js';
import Login from './pages/LogIn.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Main function that allows user to go to the individual pages via typing in the url path.
 * Importing the .js files from the /pages/ folder allows us to reference them in the BrowserRouter component.
 * BrowserRouter allows for page linking. Upon clicking on the the cards, the website will automatically update the link to the url to the different route paths.
*/
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