import React from 'react'
import Flickity from 'react-flickity-component'
import Img1 from '../assets/Projects/Project2/project2-1.jpg'

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

const Project2 = () => {
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
                <h3>Destinations Library</h3>
              </div>
              <div>
                <p>A MongoDB database with CRUD functionality created using Express and Mongoose served to a MERN stack app of travel destinations with user login, authorization, and image uploads.</p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <div>
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-github"></i>
                        <span className="link-label"> View Front End on GitHub</span>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/kdshea/Travel-Library-Back-End" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-github"></i>
                        <span className="link-label"> View Back End on GitHub</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <a href="https://bit.ly/kdshea-travel" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-link"></i>
                      <span className="link-label"> Project Link</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-right">
              <div>
                <h4>Built With</h4>
              </div>
              <div className="project-icons-wrapper">
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
                  <li className="cell">
                    <i className="devicon-bootstrap-plain"></i>
                    <span>Bootstrap</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-javascript-plain"></i>
                    <span>JavaScript</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-react-original"></i>
                    <span>React</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-amazonwebservices-original"></i>
                    <span>AWS S3</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-express-original"></i>
                    <span>Express</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-nodejs-plain"></i>
                    <span>Node.js</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-mongodb-plain"></i>
                    <span>MongoDB</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-heroku-original"></i>
                    <span>Heroku</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Project2