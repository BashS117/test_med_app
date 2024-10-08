import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation'
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
function App() {

    const reviewsData = [
        { doctorName: 'Dr. John Doe', doctorSpeciality: 'Cardiology', reviewGiven: true },
        { doctorName: 'Dr. Jane Smith', doctorSpeciality: 'Dermatology', reviewGiven: false }
    ];

  return (
   <div className='App'>
    <BrowserRouter>
          {/* Display the Navbar component */}
          {/* <Navbar/> */}
          <Notification>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Sign_Up" element={<Sign_Up/>}/>
            <Route path="/instant-consultation" element={<InstantConsultation />} />

          </Routes>
          <ReviewForm reviews={reviewsData} />
          </Notification>
        </BrowserRouter>
   </div>
  );
}

export default App;
