import React from 'react'
import './About.css'
import { FaChevronRight, FaUserAlt } from 'react-icons/fa'
import profile from '../../assets/image/profile-pic.png'

function About() {
  return (
    <section className='about' id='About'>
        <h2 className='heading'> 
        <FaUserAlt/> About <span>Me</span>
        </h2>

        <div className="row">
            <div className="image tilt">
                <img src={profile} alt="" />
            </div>
            <div className="content">
                <h3>I'm Santosh</h3>
                <span className='tag'>Front-end Developer </span>

                <p>I am a Front-End Developer based in UP, India.
                    I am a Mechanical Engineer undergraduate from National Intitute of Technology Patna.
                    I am very passionate about improving my coding skills & developing applications & websites. 
                    I build WebApps and  Websites using MERN Stack.
                    Working for myself to improve my skills.
                </p>
                <div className='resume-btn'>
                    <a href="#" className='res-btn'> <span>Resume <FaChevronRight className='fa'/></span>
                    
                    
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
