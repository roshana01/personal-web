import React from 'react'
import { ImMagicWand } from 'react-icons/im';
import './SkillProgress.css'


export default function SkillProgress() {
    return (
        <>
        <div className='skill'>
            <div className='skill-title'>
                <ImMagicWand color={"#d1c4e9"}/>
                <h3>UI Interface Design</h3>
            </div>
            <div className="skill-progress-container">
                <div className="skill-progress-range" style={{ width: '70%' }}></div>
            </div>
          
        </div>
        <div className='skill'>
            <div className='skill-title'>
                <ImMagicWand color={"#d1c4e9"}/>
                <h3>UI Interface Design</h3>
            </div>
            <div className="skill-progress-container">
                <div className="skill-progress-range" style={{ width: '70%' }}></div>
            </div>
          
        </div>
        <div className='skill'>
            <div className='skill-title'>
                <ImMagicWand color={"#d1c4e9"}/>
                <h3>UI Interface Design</h3>
            </div>
            <div className="skill-progress-container">
                <div className="skill-progress-range" style={{ width: '70%' }}></div>
            </div>
          
        </div>
        <div className='skill'>
            <div className='skill-title'>
                <ImMagicWand color={"#d1c4e9"}/>
                <h3>UI Interface Design</h3>
            </div>
            <div className="skill-progress-container">
                <div className="skill-progress-range" style={{ width: '70%' }}></div>
            </div>
          
        </div>

        </>
    )
}
