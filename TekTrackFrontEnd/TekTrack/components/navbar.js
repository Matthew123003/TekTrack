import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import LogoNoBg from '../images/logoandname.png';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem('id_token');
    navigate('/');
  };

  // example balances
  return (
    <nav className="navbar">
      {/* <img src={LogoNoBg} alt="Logo" className="navbar-logo" /> */}
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/accounts">Accounts</Link>
        </li>
        <li className="nav-item">
          <Link to="/tracker">Tracker</Link>
        </li>
        <li className="nav-item">
          <Link to="/team">Meet The Team</Link>
        </li>
      </ul>
      <div className="account-info"></div>
      <div className="nav-item logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;