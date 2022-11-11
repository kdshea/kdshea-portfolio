import Kate from '../assets/kate.jpg'

const Contact = () => {
  return (    <>
    <div id="contact" className="container">
      <h2>Contact</h2>
      <div className="kate-pic">
        <img src={Kate} alt="Kate Shea" />
      </div>
      <div className="links">
        <div className="left-links">
          <div>
            <a href="mailto: daishea@gmail.com?subject=Hello" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-square-envelope"></i> 
              <span className="link-label"> daishea@gmail.com</span>
            </a>
          </div>
          <div> 
            <a href="https://www.linkedin.com/in/katedshea/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
              <span className="link-label"> LinkedIn/katedshea</span>
            </a>
          </div>
        </div>
        <div className="right-links">
          <div>
            <a href="https://github.com/kdshea" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-github"></i>
              <span className="link-label"> GitHub/kdshea</span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/Kate_Shea_" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-twitter"></i>
              <span className="link-label"> Twitter/Kate_Shea_</span>
            </a>
          </div>
        </div>

      </div>
    </div>
    <div className="image-section palm-6"></div>
  </>

  )
}

export default Contact