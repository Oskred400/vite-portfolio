import './NavBar.css';

export const NavBar = () => {
  
    const setPath = () => {

    }
  return (
    <>
      <ul className="top-nav-links">
        <li>
          <a href="#Home">Siddarth Kannan</a>
        </li>
        <li>
          {/* href= {`/contacts/1`} */}
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#SkillsAndCerts">Skills And Certs</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </>
  );
};
