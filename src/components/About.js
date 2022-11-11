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
          <p>Habitasse platea dictumst quisque sagittis purus sit amet. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Maecenas ultricies mi eget mauris pharetra et. Eu consequat ac felis donec et odio pellentesque diam volutpat. Turpis egestas sed tempus urna et. Facilisi cras fermentum odio eu feugiat.</p>
        </div>
        <div className="about-travel">
          <h3>Travel</h3>
          <div className="map-wrapper">
            <img src={Map}/>
          </div>
          
        </div>
        <div className="about-photography">
          <h3>Photography</h3>
          <div>
            <a href="https://flickr.com/photos/kdshea35/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-flickr"></i>
              <span className="link-label"> Flickr/kdshea35</span>
            </a>
          </div>
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