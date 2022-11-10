import videoBg from '../assets/videoBg.mp4'

const Hero = () => {
  return (
    <div className="video-container">
      <div className="content">
        <video src={videoBg} autoPlay muted />
      </div>
      <div className="hero">
        <h3>Hi, I&#39;m</h3>
        <h1>Kate Shea</h1>
        <h2>Web Developer</h2>
        <i className="fa-solid fa-chevron-down hero-arrow"></i>
      </div>
    </div>
  )
}

export default Hero