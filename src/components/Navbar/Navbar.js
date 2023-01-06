import React, { useState } from "react";
import "./Navbar.css";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <nav className={isExpanded ? "expanded" : ""}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav-logo">
            <img src={Logo} alt="My LOGO" className="mx-1" />
          </div>
        </Link>

        <div className={isExpanded ? "nav-menu expanded" : "nav-menu"}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <Link
              to="/"
              className="nav-menu-item shadow my-1"
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              Home
            </Link>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center">
            <Link
              to="/About"
              className="nav-menu-item shadow my-1"
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              About
            </Link>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center">
            <Link
              to="/Project"
              className="nav-menu-item shadow my-1"
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              Projects
            </Link>
          </div>
        </div>
        <div
          className="nav-btns fs-3"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {!isExpanded ? <HiMenuAlt3 /> : <HiX />}
        </div>
      </nav>
    </>
  );
}
