import React from 'react'
import './ProjectItem.css'
import { FaCode, FaEye } from 'react-icons/fa'


function ProjectItem({title, desc, img, github, live}) {
  return (
    <div className='project-box'>
        <img src={img} alt="" />

        <div className="project-content">
            <div className="tag">
                <h3>{title}</h3>
            </div>
            <div className="desc">
            <p>{desc}</p>
            <div className="btns">
                <a href={github} className='work-btn'>
                    <FaEye className='fa'/> View
                </a>
                <a href={live} className='work-btn'>
                    Code <FaCode className='fa'/> 
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem
