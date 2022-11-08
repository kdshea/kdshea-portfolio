const Contact = () => {
  return (    <>
    <div className="container">
      <h2>Contact Section</h2>
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
    <div className="image-section palm-6"></div>
  </>

  )
}

export default Contact