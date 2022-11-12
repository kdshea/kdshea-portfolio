import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Map from '../assets/travel.jpg'
import images from '../Images'



const About = () => {
  return (
    <>
      <div id="about" className="container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquet lectus proin nibh nisl condimentum id venenatis.</p>
          <p>Eget felis eget nunc lobortis mattis aliquam faucibus purus. Nam aliquam sem et tortor consequat id. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Platea dictumst vestibulum rhoncus est pellentesque. Integer malesuada nunc vel risus. Sed cras ornare arcu dui.</p>
        </div>
        <div className="about-reading">
          <h3>Reading</h3>
          <div>
            <a href="https://www.goodreads.com/kdshea" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-goodreads"></i>
              <span className="link-label"> Goodreads/kdshea</span>
            </a>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquet lectus proin nibh nisl condimentum id venenatis.</p>
        </div>
        <div className="about-listening">
          <h3>Listening</h3>
          <div>
            <a href="https://open.spotify.com/user/d8n5dvxeniup3btt90unrjuww" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-spotify"></i>
              <span className="link-label"> Spotify/kdshea</span>
            </a>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquet lectus proin nibh nisl condimentum id venenatis.</p>
        </div>
        <div className="about-travel">
          <h3>Travel</h3>
          <div>
            <a href="https://www.amcharts.com/visited_countries/#DK,FR,DE,IE,IT,NL,CH,GB,VA,BS,CA,CR,JM,MX,US,IN,ID,MY,LK,TH,AE,VN" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-earth-americas"></i>
              <span className="link-label"> Interactive Map</span>
            </a>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquet lectus proin nibh nisl condimentum id venenatis.</p>
          {/* <div className="map-wrapper">
            <a href="https://www.amcharts.com/visited_countries/#DK,FR,DE,IE,IT,NL,CH,GB,VA,BS,CA,CR,JM,MX,US,IN,ID,MY,LK,TH,AE,VN" target="_blank" rel="noopener noreferrer">            
              <img src={Map}/>
            </a>
          </div> */}
        </div>
        <div className="about-photography">
          <h3>Photography</h3>
          <div>
            <a href="https://flickr.com/photos/kdshea35/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-flickr"></i>
              <span className="link-label"> Flickr/kdshea35</span>
            </a>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquet lectus proin nibh nisl condimentum id venenatis.</p>

          <div className="photo-wrapper">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
              <Masonry gutter='1.5rem'>
                {images.map((image, i) => (
                  <img key={i} src={image} style={{ width: '100%', display: 'block' }}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
      <div className="image-section palm-5"></div>
    </>
  )
}

export default About