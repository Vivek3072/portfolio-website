import React from "react";
import Footer from "../Footer/Footer";
import Vivek from "../../Assets/Vivek.svg";
import Timeline from "./Timeline";
import './About.css'

export default function About() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-sm-6 about_left">
        <h1 className="text-light text-center mb-3 mt-3">Experience</h1>
          <Timeline />
        </div>
        <div className="col-lg-5 col-sm-6 about_right">
        <img className="vivekPic mb-2" src={Vivek} alt="aboutMe" />
        <div className="curve"></div>
    <h1 className="text-light my-2">Vivek Srivastava</h1>
    <h3 className="text-light mb-3"> B-Tech 3rd Year , NIT Patna </h3>
    <div className="border_button"> <a className="button_link" href="https://drive.google.com/file/d/10RRZrm2kB-VIYwdhAGbpx5efW5Mb_7zi/view?usp=sharing" target="_blank" rel="noreferrer">  View Resume &rarr; </a> </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
