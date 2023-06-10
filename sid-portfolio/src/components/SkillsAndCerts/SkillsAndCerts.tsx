import "./SkillsAndCerts.css";

export const SkillsAndCerts = () => {
  return (
    <>
    <div className="skill-set" id="skillsandcerts">
      <h1> Skills </h1>
      </div>
      <div className="skills-list">
        <div className="menu-item">
          <p>Programming Languages </p>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="menu-item">
        <p>Frontend Technologies </p>
          <ul>
            <li>Angular</li>
            <li>ReactJs</li>
            <li>JSP</li>
            <li>Flutter - Basic</li>
          </ul>
        </div>
        <div className="menu-item">
          <p>Backend Technologies </p>
          <ul>
            <li>Springboot</li>
            <li>Python3 Flask</li>
            <li>Nodejs</li>
          </ul>
        </div>
        <div className="menu-item">
          <p>Database Technologies </p>
          <ul>
            <li> MySql</li>
            <li> PostGreSql</li>
            <li> MongoDb</li>
          </ul>
        </div>
      </div>
      
      <div className="certs-list">
        <h2> Certifications </h2>
        <h3>AWS CLF CCP</h3>
        <h3>Java - Hackerrank and TestDome Skill Assessment</h3>
        <h3>Python - Hackerrank and TestDome Skill Assessment</h3>
      </div>
    </>
  );
};
