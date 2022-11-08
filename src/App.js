
import './styles/main.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ComingSoon from './components/ComingSoon'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComingSoon />} />
        </Routes>
      </BrowserRouter> */}
      <div className="site-wrapper">
        <nav><NavBar /></nav>
        <section className="hero-wrapper"><Hero /></section>
        <section className="skills-wrapper"><Skills /></section>
        <section className="experience-wrapper"><Experience /></section>
        <section className="projects-wrapper"><Projects /></section>
        <section className="about-wrapper"><About /></section>
        <section className="interests-wrapper"><Interests /></section>
        <section className="contact-wrapper"><Contact /></section>
        <footer><Footer /></footer>
      </div>
    </div>
  )
}

export default App