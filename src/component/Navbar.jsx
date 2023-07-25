import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light">
            
   

      <div className="container">
        <Link className="navbar-brand" to="/income">Income Expense Tracker</Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/income">Income</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/expense">Expense</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
