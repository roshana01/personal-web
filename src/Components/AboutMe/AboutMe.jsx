import React from 'react'
import { skills } from '../../data/data'
import SkillProgress from '../SkillProgress/SkillProgress'

import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className='about' id='about'>
      <div className="about-avatar">
        <img src="./images/avator.jpg" alt="" className='about-avatar--img' />
      </div>

      <div className="about-resume">
        <div className='resume-skills'>
          <h1 className='resume-title'>skills Expertise</h1>
          {
            skills.map((item)=>(
              <SkillProgress title={item.title} percentAge={item.percent} >
                  {item.icon}
              </SkillProgress>
             
            ))
          }
       
        </div>
      </div>
    </div>
  )
}
