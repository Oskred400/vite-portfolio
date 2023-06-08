import './ContactPage.css';
import LinkedInLogo from '../../assets/images/LinkedIn_logo.png';
import MailIcon from '../../assets/images/mail_icon.jpg';
import GitHubLogo from '../../assets/images/github_logo.png';

export const ContactPage = () => {
    return (
        <>
        <div className="contact-page">
            <h2> Let's Get in Touch! </h2>
            <div className="row">
            <div className="col-lg-4 ml-auto text-center">
                <img src= { LinkedInLogo } height="35%" width="15%"/>
                <a href="https://www.linkedin.com/in/siddarth-kannan/"><p>LinkedIn</p></a>
            </div>

            <div className="col-lg-4 ml-auto text-center">
                <img src= { MailIcon } height="35%" width="25%"/>
                <a href="mailto:siddu.kannan@gmail.com">
                    <p className='email-icon'>Email</p></a>
            </div>

            <div className="col-lg-4 ml-auto text-center">
                <img src= { GitHubLogo } height="35%" width="25%"/>
                <a href="https://github.com/Oskred400"><p>GitHub</p></a>
            </div>

                </div>
            </div>
        </>
    );
}