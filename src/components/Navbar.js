import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
  <>
    <NavLink to="/">Book List</NavLink>
    <NavLink to="/categories">Categories</NavLink>
  </>);
}

export default Navbar;
