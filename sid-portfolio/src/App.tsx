import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import { ContactPage } from './components/ContactPage/ContactPage'
import { Experience } from './components/Experience/Experience'
import { NavBar } from './components/NavBar/NavBar'
import { SkillsAndCerts } from './components/SkillsAndCerts/SkillsAndCerts'

function App() {

  return (
    <>
      <NavBar/>
      <div className="introduction">
        <h1 className="intro-text"> Hello World</h1>
        <h1 className="intro-text">Meet Siddarth!</h1>
      </div>
      <title>Sid's Portfolio </title>
      <AboutMe/>
      <SkillsAndCerts/>
      <Experience/>
      <ContactPage/>
    </>
  )
}

export default App
