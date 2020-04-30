import React, {Fragment, useContext} from 'react';
import logo from "../icons/logo.svg"
import {Link} from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const {isAuthenticated, logout, user} = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment> <button className="navbar-toggler navbar-toggler-mak ml-auto " type="button" data-toggle="collapse"
                       data-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link " href="#">Ana Sayfa <span className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              Hisse Detay
            </a>
            <div className="dropdown-menu dropdown-menu-mak" aria-labelledby="navbarDropdown">
              <a className="dropdown-item dropdown-item-mak" href="#">ASELS</a>
              <a className="dropdown-item dropdown-item-mak" href="#">THYAO</a>
              <a className="dropdown-item dropdown-item-mak" href="#">GARAN</a>
              <a className="dropdown-item dropdown-item-mak" href="#">TAVHL</a>
              <div className="dropdown-divider dropdown-divider-mak "> </div>
              <a className="dropdown-item dropdown-item-mak" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 search-mak">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul className="navbar-nav ml-auto">
          <span className="navbar-text"> {user && user.name}</span>
          <li className="nav-item">
            <a className="nav-link " onClick={onLogout} href="#">Logout<span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>

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
      <nav className="navbar navbar-expand-md navbar-dark navbar-mak">
        <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
        {isAuthenticated?authLinks:guestLinks}
      </nav>
    </div>
  );
};

export default Navbar;
