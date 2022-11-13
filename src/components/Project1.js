import React from 'react'
import Flickity from 'react-flickity-component'
import Img1 from '../assets/Projects/Project1/project1-1.jpg'
import Img2 from '../assets/Projects/Project1/project1-2.jpg'
import Img3 from '../assets/Projects/Project1/project1-3.jpg'
import Img4 from '../assets/Projects/Project1/project1-4.jpg'
import Img5 from '../assets/Projects/Project1/project1-5.jpg'
import Img6 from '../assets/Projects/Project1/project1-6.jpg'
import Img7 from '../assets/Projects/Project1/project1-7.jpg'

const flickityOptions = {
  wrapAround: true,
  autoPlay: true,
  setGallerySize: false,
}

function Carousel() {
  return (
    <Flickity options={flickityOptions} >
      <img src={Img1} />
      <img src={Img2} />
      <img src={Img3} />
      <img src={Img4} />
      <img src={Img5} />
      <img src={Img6} />
      <img src={Img7} />
    </Flickity>
  )
}

const Project1 = () => {
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
                <h3>Seeker</h3>
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
                <p>A full-stack job tracker app using a Python Django REST framework to serve a Postgres database to a React front-end that incorporates one-to-many and many-to-many data relationships, user login, authorization, and CRUD functionality.</p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <a href="https://github.com/kdshea/Job-Seeker" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-github"></i>
                      <span className="link-label"> View on GitHub</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://bit.ly/kdshea-job-seeker" target="_blank" rel="noopener noreferrer">
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

export default Project1