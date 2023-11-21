import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <div className="navbar">
        <ul className="navbar-list">
          <Link to="/">
            <li className="navbar-item">Accueil</li>
          </Link>
          <Link to="/compétances">
            <li className="navbar-item">Compétances</li>
          </Link>
          <Link to="/portfolio">
            <li className="navbar-item">Portfolio</li>
          </Link>
          <Link to="/contact">
            <li className="navbar-item">Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
