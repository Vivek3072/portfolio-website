import React from "react";

import ReactJS from '../../../src/Assets/Skills/ReactJS.svg'
import NextJS from '../../../src/Assets/Skills/NextJS.svg'
import Cpp from '../../../src/Assets/Skills/Cpp.svg'
import HTML from '../../../src/Assets/Skills/HTML.svg'
import CSS from '../../../src/Assets/Skills/CSS.svg'
import Javascript from '../../../src/Assets/Skills/Javascript.svg'
import Figma from '../../../src/Assets/Skills/Figma.svg'
import Bootstrap from '../../../src/Assets/Skills/Bootstrap.svg'
import MongoDB from '../../../src/Assets/Skills/MongoDB.svg'
import Github from '../../../src/Assets/Skills/Github.svg'
import Netlify from '../../../src/Assets/Skills/Netlify.svg'
import Heroku from '../../../src/Assets/Skills/Heroku.svg'
import TailwindCss from '../../../src/Assets/Skills/TailwindCss.svg'
import C from '../../../src/Assets/Skills/C.svg'


export default function Skills() {
  return (
    <>
      <h2 className="text-center" style={{ color: "#50d890" }}>
        My Skills
      </h2>
      <br />
      <p className="text-center" style={{ color: "white" }}>
        These are the tools and technologies I already have experience working upon.
      </p>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <br />
        <div className="skill_set">

       <div className="skill">
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer" > <img src={ReactJS} alt="ReactJS" /></a>
       </div>
       <div className="skill">
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer" > <img src={NextJS} alt="NextJS" /></a>
       </div>
       <div className="skill">
      <a href="https://cplusplus.com/" target="_blank" rel="noreferrer" > <img src={Cpp} alt="Cpp" /></a>
       </div>
       <div className="skill">
      <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer" > <img src={HTML} alt="HTML" /></a>
       </div>
       <div className="skill">
      <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" > <img src={CSS} alt="CSS" /></a>
       </div>
       <div className="skill">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" > <img src={Javascript} alt="Javascript" /></a>
       </div>
       <div className="skill">
      <a href="https://www.figma.com/" target="_blank" rel="noreferrer" > <img src={Figma} alt="Figma" /></a>
       </div>
       <div className="skill">
      <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" > <img src={Bootstrap} alt="Bootstrap" /></a>
       </div>
       <div className="skill">
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" > <img src={TailwindCss} alt="TailwindCss" /></a>
       </div>
       <div className="skill">
      <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" > <img src={MongoDB} alt="MongoDB" /></a>
       </div>
       <div className="skill">
      <a href="https://github.com/Vivek3072" target="_blank" rel="noreferrer" > <img src={Github} alt="Github" /></a>
       </div>
       <div className="skill">
      <a href="https://www.netlify.com/" target="_blank" rel="noreferrer" > <img src={Netlify} alt="Netlify" /></a>
       </div>
       <div className="skill">
      <a href="https://www.heroku.com/" target="_blank" rel="noreferrer" > <img src={Heroku} alt="Heroku" /></a>
       </div>
       <div className="skill">
      <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer" > <img src={C} alt="C" /></a>
       </div>
        </div>
        <br /> <br />
      </div>
    </>
  );
}
