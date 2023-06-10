import { AboutMe } from '../AboutMe/AboutMe'
import { ContactPage } from '../ContactPage/ContactPage'
import { Experience } from '../Experience/Experience'
import { NavBar } from '../NavBar/NavBar'
import { SkillsAndCerts } from '../SkillsAndCerts/SkillsAndCerts';
import './AppLayout.css';
import ProfilePic from '../../assets/images/portfolio_site.jpeg';

export const AppLayout = () => {

  return (
    <>

      <NavBar/>
      <div className="introduction" id="intro-text-class">
        
        <h1 className="intro-text"> Hello World, Meet Siddarth!</h1>
        <img src={ProfilePic} height="100%" width="100%"/>
        </div>
      <title>Sid's Portfolio </title>
      <AboutMe/>
      <SkillsAndCerts/>
      <Experience/>
      <ContactPage/>
    </>
  )
}