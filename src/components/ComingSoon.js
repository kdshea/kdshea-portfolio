import React from 'react'
import videoBg from '../assets/videoBg.mp4'

const Main = () => {
  return (
    <div className="container">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay muted />
      <div className="coming-soon">
        <div>
          <h1>Coming Soon</h1>
        </div>
        <div className="title">
          <h2>Kate Shea</h2>
          <h4>Junior Software Developer</h4>
        </div>
        <div>
          <p> 
            Welcome! Thank you for your interest. 
          </p>
          <p>
            My portfolio site is currently under construction. 
          </p>
          <p>
            <a href="https://github.com/kdshea/kdshea-portfolio" target="_blank" rel="noopener noreferrer">
            Check out the progress here on GitHub. 
            </a>
          </p>
        </div>
        <div className="connect">
          <p>
            In the meantime, let’s connect.
          </p>
          <div className="links">
            <div> 
              <a href="https://www.linkedin.com/in/katedshea/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i> 
              </a>
            </div>
            <div>
              <a href="https://github.com/kdshea" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-github"></i> 
              </a>
            </div>
            <div>
              <a href="mailto: daishea@gmail.com?subject=Hello" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-square-envelope"></i> 
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Kate_Shea_" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-twitter"></i> 
              </a>
            </div>
            <div>
              <a href="https://flickr.com/photos/kdshea35/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-flickr"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main