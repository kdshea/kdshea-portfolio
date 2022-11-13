import { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Card from 'react-bootstrap/Card'
import Book1 from '../assets/book1.jpg'
import images from '../Images'


const About = () => {
  const [aboutIsHidden, setAboutIsHidden] = useState('true')
  const handleAboutToggle = () => {
    if (!aboutIsHidden) {
      setGalleryIsHidden('true')
    }
    setAboutIsHidden(!aboutIsHidden)

  }
  const [galleryIsHidden, setGalleryIsHidden] = useState('true')
  const handleGalleryToggle = () => {
    setGalleryIsHidden(!galleryIsHidden)
  }

  return (
    <>
      <div id="about" className="container">
        <div className="about-text">
          <h2>About</h2>
          <p>Welcome! My name is Kate Shea. I&#39;m a Boston-based developer transitioning from a career in hospitality. For the last 10 years, I have always been studying something new, earning degrees in biochemical engineering and nursing all while working as a manager in the hospitality industry.</p>
          <p>Recently while pursuing my second nursing degree, I took a Bioinformatics course that sparked my interest in the intersection between technology and engineering in healthcare, and how to make products that can improve healthcare systems and provide value to patients. I decided to do a software engineering bootcamp and pursue software development. My background gives me a unique perspective: I have worked in client-facing roles in hospitality and nursing, but I also have the technical background of engineering and software development.</p>
          <p> I&#39;m looking for opportunities to use my skillset to contribute to larger projects and make a positive impact, while continuing to be challenged and grow as a developer.</p>
        </div>
        <div>
          <button className={ aboutIsHidden ? 'btn' : 'display-none btn' }onClick={handleAboutToggle}>More About Me</button>
          <button className={ aboutIsHidden ? 'display-none btn' : 'btn' }onClick={handleAboutToggle}>Less</button>
        </div>
        <div className={ aboutIsHidden ? 'more-about display-none' : 'more-about' }>
          <div className="about-reading">
            <div className="about-title">
              <div>
                <h3>Reading</h3>
              </div>
              <div>
                <a href="https://www.goodreads.com/kdshea" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-goodreads"></i>
                  <span className="link-label"> Goodreads/kdshea</span>
                </a>
              </div>
            </div>
            <div className="card-wrapper">
              <Card>
                <Card.Header>To Learn</Card.Header>
                <Card.Img variant="top" src={Book1} />
                <Card.Body>
                  <Card.Title>Everything I Never Told You</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Celeste Ng</Card.Subtitle>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&#39;s content.
                  </Card.Text> */}
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>For Fun</Card.Header>
                <Card.Img variant="top" src={Book1} />
                <Card.Body>
                  <Card.Title>Everything I Never Told You</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Celeste Ng</Card.Subtitle>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&#39;s content.
                  </Card.Text> */}
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="about-listening">
            <div className="about-title">
              <div>
                <h3>Listening</h3>
              </div>
              <div>
                <a href="https://open.spotify.com/user/d8n5dvxeniup3btt90unrjuww" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-spotify"></i>
                  <span className="link-label"> Spotify/kdshea</span>
                </a>
              </div>
            </div>
            <div className="card-wrapper">
              <Card>
                <Card.Header>To Learn</Card.Header>
                <Card.Img variant="top" src={Book1} />
                <Card.Body>
                  <Card.Title>Everything I Never Told You</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Celeste Ng</Card.Subtitle>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&#39;s content.
                  </Card.Text> */}
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>For Fun</Card.Header>
                <Card.Img variant="top" src={Book1} />
                <Card.Body>
                  <Card.Title>Everything I Never Told You</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Celeste Ng</Card.Subtitle>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&#39;s content.
                  </Card.Text> */}
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>On Repeat</Card.Header>
                <Card.Img variant="top" src={Book1} />
                <Card.Body>
                  <Card.Title>Everything I Never Told You</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Celeste Ng</Card.Subtitle>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card&#39;s content.
                  </Card.Text> */}
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="about-travel">
            <div className="about-title">
              <div>
                <h3>Travel</h3>
              </div>
              <div>
                <a href="https://www.amcharts.com/visited_countries/#DK,FR,DE,IE,IT,NL,CH,GB,VA,BS,CA,CR,JM,MX,US,IN,ID,MY,LK,TH,AE,VN" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-earth-americas"></i>
                  <span className="link-label"> Interactive Map</span>
                </a>
              </div>
            </div>
            <p> I love to travel and I&#39;ve been to over 20 countries in North and Central America, Europe, South and Southeast Asia. South America is next on my list to explore. I attended a French language immersion elementary school and took French classes through college. I&#39;m still fluent and am always looking for opportunities to practice French. Boston, MA is home, but I’m currently working from Sri Lanka. The major spoken language here is Sinhalese and I&#39;m taking lessons twice a week on Zoom. Check out the map for specific places I have travelled. </p>
            {/* <div className="map-wrapper">
              <a href="https://www.amcharts.com/visited_countries/#DK,FR,DE,IE,IT,NL,CH,GB,VA,BS,CA,CR,JM,MX,US,IN,ID,MY,LK,TH,AE,VN" target="_blank" rel="noopener noreferrer">            
                <img src={Map}/>
              </a>
            </div> */}
          </div>
          <div className="about-photography">
            <div className="about-title">
              <div>
                <h3>Photography</h3>
              </div>
              <div>
                <a href="https://flickr.com/photos/kdshea35/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-flickr"></i>
                  <span className="link-label"> Flickr/kdshea35</span>
                </a>
              </div>
            </div>
            <p> As far as my skill level goes, I would definitely call myself an amateur photopgrapher. I shoot on a Nikon D3300 and my iPhone, and edit using Adobe Lightroom. Recently, I got an underwater housing for my DSLR, and I&#39;m looking forward to learning to take photos in the ocean. I share some photos I&#39;m proud of on Flickr.</p>
            <div className={ galleryIsHidden ? 'photo-wrapper display-none' : 'photo-wrapper' }>
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
            <div>
              <button className={ galleryIsHidden ? 'btn' : 'display-none btn' }onClick={handleGalleryToggle}>View Gallery</button>
              <button className={ galleryIsHidden ? 'display-none btn' : 'btn' }onClick={handleGalleryToggle}>Hide</button>
            </div>
          </div>
        </div>

      </div>
      <div className="image-section palm-5"></div>
    </>
  )
}

export default About