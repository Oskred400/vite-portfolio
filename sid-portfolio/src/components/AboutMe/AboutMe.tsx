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
            <p> Software Engineer | Software Developer </p>
            <button onClick={onResumeClick} > Resume </button>
            </div>
        </>
    )
}