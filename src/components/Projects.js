import React from 'react'
import Flickity from 'react-flickity-component'
import Palm1 from '../assets/palm-4.jpg'

const flickityOptions = {
  wrapAround: true,
  autoPlay: true,
  setGallerySize: false,
}

function Carousel() {
  return (
    <Flickity options={flickityOptions} >
      <img src={Palm1} />
      <img src={Palm1} />
      <img src={Palm1} />
    </Flickity>
  )
}

const Projects = () => {
  return (
    <>
      <div id="projects" className="container">
        <h2>Projects</h2>
        <div className="project">
          <div className="project-image">
            <div className="mac-svg">
              <div className="carousel-container">
                <Carousel />
              </div>
            </div>
          </div>
          <div className="project-info">
            <div className="info-wrapper">
              <h3>Project 1</h3>
              <p>Description</p>
              <ul className="skill-icons">
                <li className="cell">
                  {/* Skill icon i tag here */}
                  <span>HTML 5</span>
                </li>
                <li className="cell">
                  {/* Skill icon i tag here */}
                  <span>CSS3</span>
                </li>
                <li className="cell">
                  {/* Skill icon i tag here */}
                  <span>Sass</span>
                </li>
              </ul>
              <div>Project Links Here</div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-section palm-3"></div>
    </>
  )
}

export default Projects