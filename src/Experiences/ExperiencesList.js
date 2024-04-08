import { Link } from "react-router-dom"
import './ExperiencesList.css'
import { useContext } from 'react'
import ExperiencesContext from './ExperiencesContext'

const ExperiencesList = () => {
    const experiences = useContext(ExperiencesContext);
    return (
        <div className="experience-list">
            <h1>Work Experiences</h1>
            {experiences.map((experience) => (
                <div className="experience-preview" key={experience.id}>
                    {/* <Link to={{
                        pathname: `/experiences/${experience.id}`,
                        data: experience
                    }}> */}
                        <img className={experience.title} alt="" src={experience.logo} />
                        <h2>{experience.title}</h2>
                        <p>{experience.desc}</p>
                        <p>{experience.date}</p>
                    {/* </Link> */}
                </div>
            ))}
        </div>
    );
}

export default ExperiencesList;