import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Palm1 from '../assets/palm-1.jpg'


const Projects = () => {
  return (
    <>
      <div className="container">
        <h2>Projects</h2>
        <div className="project">
          <div className="row">
            <div className="col project-image">
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={Palm1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={Palm1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Palm1}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col project-info">
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

      </div>
      <div className="image-section palm-3"></div>
    </>
  )
}

export default Projects