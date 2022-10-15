import React from "react";
import Footer from "../Footer/Footer";
import Typewriter from "typewriter-effect";
import "../../components/style.css";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Contact from "../Contact/Contact";
import './Home.css'

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row " style={{ height: "85vh" }}>
          <div className="col-lg-12 col-sm-12 my-3 homePageText">
            <div className="title1"> Hey buddy! </div>
            <div className="title2">I'm Vivek Srivastava,</div>

            <div className="wrapper">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 35,
                  strings: [
                    " a Tech Enthusiast",
                    " a Web Developer",
                    " an UI/UX Designer",
                    " guitarist by heart",
                  ],
                }}
              />
            </div>

              <div className="about_me p-1">
                A passionate and dedicated individual , up for works and services as web developer and an UI/UX designer . Looking forward to be a full-stack developer . 
              </div>
            <Link to="/project" className="view_works_link">
              <div className="border_button mt-3">View Works <span className="rarr"> &rarr; </span> </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="homePageSocialMedia">
        <a
          href=" https://www.linkedin.com/in/vivek-srivastava-2b3642202"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/itsvvkhere"
          rel="noreferrer"
          target="_blank"
        >
        <FaTwitter />
        </a>
        <a href="https://github.com/Vivek3072" rel="noreferrer" target="_blank">
        <FaGithub />
        </a>
      </div>

      <hr style={{ color: "grey" }} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
