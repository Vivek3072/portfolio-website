import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <>
      <nav className="container">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="LOGO" />{" "}
          </div>
        </Link>
        <ul>
          <li
            onClick={() => setActiveNav(true)}
            className={activeNav === true ? "activeNav" : "disableNav"}
          >
            <Link to="/">Home</Link>{" "}
          </li>
          <li
            onClick={() => setActiveNav(true)}
            className={activeNav === true ? "activeNav" : "disableNav"}
          >
            <Link to="/About">About</Link>{" "}
          </li>
          <li
            onClick={() => setActiveNav(true)}
            className={activeNav === true ? "activeNav" : "disableNav"}
          >
            <Link to="/Project">Projects</Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
