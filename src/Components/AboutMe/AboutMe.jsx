import React from 'react'
import SkillProgress from '../SkillProgress/SkillProgress'
import './AboutMe.css'


import { CiBasketball } from 'react-icons/ci';
import { RiGlobalLine } from 'react-icons/ri';
import { HiOutlineCamera } from 'react-icons/hi';
import { SiSourcegraph } from 'react-icons/si';
export default function AboutMe() {

  // let SkillProgres = [
  //   { icon: <ImMagicWand />, title: "UI Interface Design", percent: "20%" },
  //   { icon: <CiBasketball />, title: "UI Interface Design", percent: "40%" },
  //   { icon: <RiGlobalLine />, title: "UI Interface Design", percent: "50%" },
  //   { icon: < HiOutlineCamera />, title: "UI Interface Design", percent: "60%" },
  //   { icon: < SiSourcegraph />, title: "UI Interface Design", percent: "10%" },
  // ]

  return (
    <div className='about'>
      <div className="about-avatar">
        <img src="./images/avator.jpg" alt="" className='about-avatar--img' />
      </div>

      <div className="about-resume">
        <div className='resume-history'>
          <h1 className='resume-title'>Work Experient</h1>
          <div className='resume-history-experience'>
            <h3>front-end</h3>
            <p>at fourth compn</p>
            <span>2019-persont</span>
          </div>
          <div className='resume-history-experience'>
            <h3>front-end</h3>
            <p>at fourth compn</p>
            <span>2019-persont</span>
          </div>
          <div className='resume-history-experience'>
            <h3>front-end</h3>
            <p>at fourth compn</p>
            <span>2019-persont</span>
          </div>
          <div className='resume-history-experience'>
            <h3>front-end</h3>
            <p>at fourth compn</p>
            <span>2019-persont</span>
          </div>


        </div>
        <div className='resume-skills'>
          <h1 className='resume-title'>skills Expertise</h1>

          <SkillProgress />
        </div>
      </div>
    </div>
  )
}
