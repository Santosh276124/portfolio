import React from 'react'
import './Work.css'
import { FaArrowRight, FaLaptopCode } from 'react-icons/fa'
import ProjectItem from '../projectItems/ProjectItem'

import projects from '../../data/projects'

function Work() {
  return (
    <section className='work' id='Work'>
        <h2 className='heading'>
            <FaLaptopCode className='fa'/> Projects <span>Made</span>
        </h2>

        <div className="work-container">

          {
            projects.map((project) => (
              <ProjectItem key={project.id} title={project.title} desc={project.desc} img={project.img} github={project.github} live={project.live} />
            ))
          }

        </div>
        
        <div className="viewall">
            <a href="" className='viewall-btn'><span>View All
                <FaArrowRight className='fa'/> </span></a>
        </div>
    </section>
  )
}

export default Work
