import React from 'react'
import './SkillsItem.css'
import html from '../../assets/skills/html.png'

function SkillsItem({name, img}) {
  return (
    <div className='bar'>
      <div className="info">
        <img src={img} alt="" />
        <span>{name}</span>
      </div>
    </div>
  )
}

export default SkillsItem
