import './AboutMe.css';
import ResumeSid from '../../assets/Resume/Resume_Siddarth_final.pdf' 
export const AboutMe = () => {
    const onResumeClick = () => {
        window.open(ResumeSid, '_blank');
    }
    return (
        <>
            <div className="about-me" id="about">
            <h2>About Me</h2>
            <h6> Software Engineer | Software Developer </h6>
            <p>  Siddarth is an insightful Software engineer passionate about all areas of software development and  </p>
              <p> committed to developing practical and time-saving software solutions. </p>

              <p> He has extensive experience in collaborating with multiple teams to deliver cost-effective solutions on time. </p>
             <p>   He is enthusiastic about learning and adapting to new technologies. 
            </p>
            <button onClick={onResumeClick} > Resume </button>
            </div>
        </>
    )
}