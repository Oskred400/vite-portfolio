import "./SkillsAndCerts.css";

export const SkillsAndCerts = () => {
  return (
    <>
      <h1> Skills </h1>
      <div className="skills-list">
        <div className="menu-item">
          Languages
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="menu-item">
          Front End Technologies
          <ul>
            <li>Angular</li>
            <li>ReactJs</li>
            <li>JSP</li>
            <li>Flutter - Basic</li>
          </ul>
        </div>
        <div className="menu-item">
          BackendTechnologies
          <ul>
            <li>Java Springboot</li>
            <li>Python3 Flask</li>
            <li>Nodejs</li>
          </ul>
        </div>
        <div className="menu-item">
          Databases
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
      </div>
    </>
  );
};
