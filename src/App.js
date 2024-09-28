import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
   <div className='App'>
    <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page/>}/>
          </Routes>
        </BrowserRouter>
   </div>
  );
}

export default App;
