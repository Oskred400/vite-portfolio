import { AboutMe } from '../AboutMe/AboutMe'
import { ContactPage } from '../ContactPage/ContactPage'
import { Experience } from '../Experience/Experience'
import { NavBar } from '../NavBar/NavBar'
import { SkillsAndCerts } from '../SkillsAndCerts/SkillsAndCerts';
import './AppLayout.css'

export const AppLayout = () => {

  return (
    <>

      <NavBar/>
      <div className="introduction" id="intro-text-class">
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