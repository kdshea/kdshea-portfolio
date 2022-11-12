import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'

const Projects = () => {
  return (
    <>
      <div id="projects" className="container">
        <h2>Projects</h2>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </div>
      <div className="image-section palm-3"></div>
    </>
  )
}

export default Projects