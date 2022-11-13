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
              Axios
Buffer
Cloudinary
CSS3
HTML5
JavaScript
Node.js
React Bootstrap
React Router DOM
React.js
Sass
AWS S3
Bcrypt
Buffer
CORS
Dotenv
Express
Insomnia
JSON Web Token
MongoDB
Mongoose
Node.js
Heroku
Netlify

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
          </div>
        </div>
      </div>
    </>
  )
}

export default Project2