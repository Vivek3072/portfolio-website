import React from "react";
import "./Footer.css";
import Logo from "../../Assets/Logo.svg";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  
  const handleScroll=()=>{
    window.scrollTo(0,0);
    }

  return (
    <div className=" footer" style={{ color: "white" }}>
      <div className="footer_body">
        <div className="footer_top">
          <div className="footer_logo">
           <Link  to="/" onClick={handleScroll}>
            <img src={Logo} alt="" />
           </Link>

          </div>
          <div className="footer_links">
            <a
              className="footer_linkedin"
              href="https://www.linkedin.com/in/vivek-srivastava-2b3642202"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="footer_insta"
              href="https://www.instagram.com/vvk_srvstv_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="footer_twitter"
              href="https://twitter.com/itsvvkhere"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className="footer_github"
              href="https://github.com/Vivek3072"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <br />
        <hr />

        <div className="footer_bottom">
          <div>Designed & developed by -</div>
          <div className="footer_name"> Vivek Srivastava </div>
        </div>
      </div>
    </div>
  );
}
