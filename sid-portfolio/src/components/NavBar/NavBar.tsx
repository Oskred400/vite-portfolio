import './NavBar.css';

import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () => {
  
  return (
    <>
      <ul className="top-nav-links">
        <li>
        <Link 
          activeClass="active"
          to="intro-text-class"
          spy={true}
          smooth={true}
        offset={-70}
        duration={500}
        > Siddarth Kannan</Link>
        </li>
        <li>
        <Link 
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
        offset={-70}
        duration={500}
        > About</Link>
        </li>
        <li>
        <Link 
          activeClass="active"
          to="skillsandcerts"
          spy={true}
          smooth={true}
        offset={-70}
        duration={500}
        > Skills And Certs</Link>
        
        </li>
        <li>
        <Link 
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
        offset={-70}
        duration={500}
        > Experience </Link>
        </li>
        <li>
         <Link
        activeClass="active"
        to="contact"
          spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >Contact</Link> 
        </li>
      </ul>
    </>
  );
};
