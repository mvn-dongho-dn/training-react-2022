import React from 'react';
import logo from './../../assets/images/logo.svg';
import { FaCartArrowDown, FaHeart, FaUserAlt, FaSignInAlt } from "react-icons/fa";
import { NavLink  } from 'react-router-dom';

const Header = () => {
  return (
    <header className="page-header">
      <div className="container">
        <NavLink to="/" className="logo"><img src={logo} alt="logo" /></NavLink >
        <nav className="page-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink >
            </li>
            <li>
              <NavLink to="/products">Productss</NavLink >
            </li>
            <li>
              <NavLink to="/about-us">{process.env.REACT_APP_TEST}</NavLink >
            </li>
          </ul>
        </nav>
        <ul className="header-account">
          <li><NavLink to="/account">
            <span className="wrap-fav-coutner">
              <FaHeart />
            </span>
            </NavLink ></li>
          <li><NavLink to="/account"><FaUserAlt /></NavLink ></li>
          <li><NavLink to="/auth/login"><FaSignInAlt /></NavLink ></li>
          <li><NavLink to="/"><FaCartArrowDown /></NavLink ></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
