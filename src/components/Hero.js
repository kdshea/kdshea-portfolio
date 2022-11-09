import videoBg from '../assets/videoBg.mp4'

const Hero = () => {
  return (
    <div className="video-container">
      {/* <div className="overlay"></div> */}
      <video src={videoBg} autoPlay muted />
      <div className="hero">
        <h1>Hero Section</h1>
      </div>
    </div>
  )
}

export default Hero