import React from 'react'
import './Project.css'
import { FaGithub} from 'react-icons/fa'
import {BsFillInfoCircleFill } from 'react-icons/bs'
import './Tooltip.css'

export default function ProjectCard(props) {
  return (
    <>
    <div className="project_card">
        <div className="card_body">
             <img src={props.image} alt="EnvironmentApp" />
        </div>

        <div className="prod_description " >
          <span className="tooltips" data-tooltips={props.description}
         >
          <BsFillInfoCircleFill />
          </span> 
        </div>

        <div className="project_detail">
        <div className="project_name">
         {props.title}
        </div>

         <div className="app_link"> 
           {props.githubUrl.length>0 ? <a className="github_link" href={props.githubUrl} rel="noreferrer" target="_blank">
              <FaGithub />
            </a>
            :""}
           {props.url.length>0? <a className="live_app" href={props.url} rel="noreferrer" target="_blank"> 
            Live App &rarr;
            </a> 
            :""}
         </div>
         </div>
    </div>
        <div className="tv_curve"></div>
    </>
  )
}
