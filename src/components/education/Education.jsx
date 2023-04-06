import React from 'react'
import './Education.css'
import { FaGraduationCap } from 'react-icons/fa'
import college from '../../assets/image/college.jpeg'
import school from '../../assets/image/school.jpg'

function Education() {
  return (
    <section className='education' id='Education'>
        <h1 className='heading'>
            <FaGraduationCap className='fa'/> My <span>
            Education
            </span>
            
        </h1>

        <p className="qoute">Education is not the Learning of Facts, But the training of mind to think.</p>

        <div className="box-container">
            <div className="box">
                <div className='image'>
                    <img src={college} alt="" />
                </div>
                <div className="content">
                    <h3>Bachelor of  Technology in Mechanical Engineering</h3>
                    <p>National Institue of Technology Patna, Bihar</p>
                    <h4>2020-2024 | 8.46 CGPA</h4>
                </div>
            </div>
            <div className="box">
                <div className='image'>
                    <img src={school} alt="" />
                </div>
                <div className="content">
                    <h3>HSC Science | Maths Physics Chemistry</h3>
                    <p>St.Xavier's High school | CBSE </p>
                    <h4>2018-2019 | 95.6%</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
