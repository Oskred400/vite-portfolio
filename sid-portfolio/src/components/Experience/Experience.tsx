import './Experience.css';

export const Experience = () => {
    return (
        <>
        <div className='all-experiences'></div>
            <div className='exp-heading'>
            <h1> Experience </h1>
            </div>
            <div className="work-exp">
               <div className="kaizen-exp">
                <ul>
                    <li> Software Developer II </li>
                    <li> Kaizen Analytix </li>
                    <li> Jan 2022 - Present </li>
                </ul>
                    
                </div>

               <div className="hcl-exp">

               <ul>
                    <li> Software Developer I </li>
                    <li> HCL America Solutions </li>
                    <li> Feb 2021 - Jan 2022 </li>
                </ul>

                </div>

               <div className="codeforce360-exp">

                
               <ul>
                    <li> Software Developer </li>
                    <li> CodeForce  360 </li>
                    <li> June 2020 - Oct 2020 </li>
                </ul>


                </div>

               <div className="iowa-uni">
               <ul>
                    <li> Graduate Assistant</li>
                    <li> University of Iowa</li>
                    <li> August 2018- May 2020 </li>
                </ul>

                </div> 
            </div>
        </>
    )
}