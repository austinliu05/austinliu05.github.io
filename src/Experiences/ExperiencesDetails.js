import './ExperiencesDetails.css'
import { useLocation } from 'react-router-dom';
import {useContext} from 'react'
import experienceContext from './ExperiencesContext'

const ExperienceDetails = () => {
    const locationData = useLocation();
    const id = parseInt(locationData.pathname.substring(locationData.pathname.lastIndexOf("/") + 1))
    const experiences = useContext(experienceContext);

    function findExperience(experiences) {
        for (let i = 0; i < experiences.length; i++) {
            if(experiences.at(i).id === id){
                return experiences.at(i)
            }
        }
        return null
    }

    const experience = findExperience(experiences)
    return (
        <div>
            <div className='experienceDetails'>
                <img className={(experience.title)} alt="" src={experience.img} />
                <article className='containExperience'>
                    <h1>{experience.title}</h1>
                    <p className='roleDate'>{experience.role}    •    {experience.date}</p>
                    <p className='body'>{experience.body}</p>
                    <div className='role'>
                        <h2>ROLE</h2>
                        <p>{experience.role}</p>
                    </div>
                    <div className='skills'>
                        <h2>SKILLS</h2>
                        <pre>
                            <p>{experience.skills}</p>
                        </pre>
                    </div>
                </article>
            </div>
            <div className='mobilePDetails'>
            <img className={experience.title} alt="" src={experience.img} />
                <article className='containExperienceM'>
                    <h1>{experience.title}</h1>
                    <p className='roleDate'>{experience.role}    •    {experience.date}</p>
                    <p className='body'>{experience.body}</p>
                    <div className='mobilePContainer'>
                    <div className='role'>
                        <h2>ROLE</h2>
                        <p>{experience.role}</p>
                    </div>
                    <div className='skills'>
                        <h2>SKILLS</h2>
                        <pre>
                            <p>{experience.skills}</p>
                        </pre>
                    </div>
                    </div>
                </article>
            </div>
        </div>


    );
}

export default ExperienceDetails;