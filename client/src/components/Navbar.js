import React, {Fragment, useContext} from 'react';
import logo from "../icons/logo.svg"
import {Link} from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import ToggleButton from "./ToggleButton2";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const {isAuthenticated, logout, user} = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
      <ToggleButton/>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <button className="navbar-toggler navbar-toggler-mak ml-auto " type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
          <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
        </ul>

      </div>
    </Fragment>
  );

  return (
    <div>
      <nav className="navbar">
        <a className="logo" href="#"><img src={logo} alt="" /><span></span></a>
        {/*{isAuthenticated?authLinks:guestLinks}*/}
        <ul className={"nav-links"}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Content</a></li>
        </ul>
        <ToggleButton/>
      </nav>
    </div>
  );
};

export default Navbar;
