import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logoo.png"



export default function Header(){
    return(
        <>
        <header
  className="navbar-fixed-top vw-100"
  style={{ position: "fixed", zIndex: 2 }}
>
  <nav
    className="navbar navbar-expand-lg  navbar-fixed-top vw-100"
    style={{ position: "fixed", zIndex: 200 }}
  >
    <div className="container-fluid border-bottom-0-success">
      <img
        className="logo-image"
        src={logo}
        style={{ height: "3rem", width: "4rem" }}
        alt="profile Image"
      />
      <button
        className="navbar-toggler bg-primary-subtle "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse margin-nav-link"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-1 mb-lg-0 mt-1 ">
          <li className="nav-item nav-link-effect rounded-3">
            <a
              className="nav-link   fs-5  ms-3 me-3 "
              aria-current="page"
              href=""
            >
              <Link to="/AccountForm">AccountForm</Link>
            </a>
          </li>
          <li className="nav-item nav-link-effect rounded-3">
            <a className="nav-link   fs-5 ms-3 me-3 " href="">
            <Link to="/TableData">Dashboard</Link>
            </a>
          </li>
          <li className="nav-item nav-link-effect rounded-3">
            <a className="nav-link   fs-5 ms-3 me-3 " href="">
            <Link to="/Contact">CONTACT</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>



        </>
    )
    
}