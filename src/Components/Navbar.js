import React from "react";
import '../css/Navbar.css'

const Navbar = () => {
  return (
  <div>
    <nav className="navbar navbar-expand-lg  my-nav "data-bs-theme="dark">
      <div className="container-fluid">
      
        <a className="navbar-brand" href="#">
        <img alt=""
              src={require('../images/logo.png')}
              width="100"
              height="30"
              className="d-inline-block align-top" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Test
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/form">
                    Diabetes
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/PCO">
                    PCOS
                  </a>
                </li>
              </ul>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  </div>
  )
};

export default Navbar;
