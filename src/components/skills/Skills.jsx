import React from 'react'
import './Skills.css'
import { FaLaptopCode } from 'react-icons/fa'
import SkillsItem from '../skillsitem/SkillsItem'

import skills from '../../data/skills'


function Skills() {
  return (
    <section className="skills" id='Skills'>
        <h2 className='heading'> <FaLaptopCode className='fa'/> Skills & <span>Abilities</span></h2>

        <div className="container">
            <div className="row">

            {
              skills.map((skill)=> (
                <SkillsItem key={skill.id} name={skill.name} img={skill.img} />
              ))
            }
               
            </div>
        </div>
    </section>
  )
}

export default Skills
