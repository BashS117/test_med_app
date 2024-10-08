import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => setClick(!click);

 // Función para alternar el dropdown
  const toggleDropdown = () => setShowDropdown(!showDropdown);


  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    localStorage.removeItem("doctorData");
    setIsLoggedIn(false);

    // Remove reviewFormData from local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }

    setEmail('');
    window.location.reload();
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");

    if (storedEmail) {
      setIsLoggedIn(true);
      setEmail(storedEmail);
      
      // Extract the username (portion of email before '@')
      const extractedUsername = storedEmail.split('@')[0];
      setUsername(extractedUsername.charAt(0).toUpperCase() + extractedUsername.slice(1)); // Capitalize first letter
    }
  }, []);

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/search/doctors">Appointments</Link>
        </li>
      
        {isLoggedIn ? (
          <>
            <li className="link" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              {/* Display username next to logout button */}
              <button onClick={toggleDropdown} className="username" style={{ marginRight: '10px', fontWeight: 'bold', textWrap: "nowrap" }}>
                Welcome, {username}
              </button>
              {showDropdown?<div style={{display:'flex', flexDirection:'column', position: 'absolute', bottom: '-50px', background: 'white', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'}}>
                <Link to='./profile-card'>
                Your Profile
                </Link>
                <Link to='./reports'>
                Your Reports
                </Link>

              </div>:null}
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/Sign_up">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/Login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
