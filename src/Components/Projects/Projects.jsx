import React from 'react'
import './Projects.css'
export default function Projects() {
  return (
    <div className='project-section'>
      <div className="project-section__title">
        <h1>My Work</h1>
        <span></span>
      </div>

      <div className="category-list">
        <button className="category-item">Html & css</button>
        <button className="category-item active">JavaScript</button>
        <button className="category-item"> React.js</button>
      </div>

      <div className="projects">
        <div className="project-container">
          <div className="project-preview project-preview-1">
            <img src="./images/project/images (1).jpeg" alt="img" />
          </div>
          <div className="project-preview project-preview-2">
            <img src="./images/project/mobile (3).png" alt="img" />
          </div>
          <div className="project-preview project-preview-3">
            <img src="./images/project/images (1).jpeg" alt="img" />
          </div>
          <div className="project-preview project-preview-4">
            <img src="./images/project/mobile (6).png" alt="img" />
          </div>
          <div className="project-preview project-preview-5">
            <img src="./images/project/images (1).jpeg" alt="img" />
          </div>
          <div className="project-preview project-preview-6">
            <img src="./images/project/mobile (4).png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}
