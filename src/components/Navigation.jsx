import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <>
      <nav>
        <NavLink className="nav-link" exact to="/" activeClassName="nav-active">
          Home
        </NavLink>
        <NavLink className="nav-link" exact to="/about" activeClassName="nav-active">
          About
        </NavLink>
      </nav>
    </>
  );
}

export default Navigation
