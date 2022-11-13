import React from 'react'
import Flickity from 'react-flickity-component'
import Img1 from '../assets/Projects/Project3/project3-1.jpg'

const flickityOptions = {
  wrapAround: true,
  autoPlay: true,
  setGallerySize: false,
}

function Carousel() {
  return (
    <Flickity options={flickityOptions} >
      <img src={Img1} />
      <img src={Img1} />
      <img src={Img1} />
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
                <h3>Recipe App</h3>
              </div>
              <div>
              Axios
CSS3
HTML5
JavaScript
React Bootstrap
React Router DOM
React.js
Sass
Netlify
Excalidraw
Insomnia
YouTube
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
                <p>A quick project with a React.js front-end consuming a RESTful API to display recipes.</p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <a href="https://github.com/kdshea/Recipe-App" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-github"></i>
                      <span className="link-label"> View on GitHub</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://bit.ly/kdshea-recipe" target="_blank" rel="noopener noreferrer">
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