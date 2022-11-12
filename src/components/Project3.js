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

const Project3 = () => {
  return (
    <>
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
            <div className="project-left">
              <div>
                <h3>Project 3 Name</h3>
              </div>
              <div>
                <ul className="project-icons">
                  <li className="cell">
                    <i className="devicon-html5-plain"></i>
                    <span>HTML 5</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-css3-plain"></i>
                    <span>CSS3</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-sass-original"></i>
                    <span>Sass</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-right">
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquet lectus proin nibh nisl condimentum id venenatis.</p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <a href="">
                      <i className="fa-brands fa-square-github"></i>
                      <span className="link-label"> View on GitHub</span>
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <i className="fa-solid fa-link"></i>
                      <span className="link-label"> Project Link</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project3