import React, { useEffect, useState } from 'react'
import './SkillProgress.css'


export default function SkillProgress({title , percentAge,children}) {
    const [percent , setPercent] = useState(0)
    useEffect(()=>{
        setPercent(percentAge)
    },[])
    return (
        <div className='skill'>
            <div className='skill-title'>
                {children}
                <h3>{title}</h3>
                <span className="skill-percent">{`${percent}%`}</span>
            </div>
            <div className="skill-progress-container">
                <div className="skill-progress-range" style={{ width:`${percent}%`}}></div>
            </div>
        </div>
    )
}
