import ConsultingContext from './ConsultingContext';
import './ConsultingDetails.css'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

const ConsultingDetails = () => {
    const locationData = useLocation();
    const id = parseInt(locationData.pathname.substring(locationData.pathname.lastIndexOf("/") + 1))
    const consults = useContext(ConsultingContext);
    
    function findProject(consults) {
        for (let i = 0; i < consults.length; i++) {
            if(consults.at(i).id == id){
                return consults.at(i)
            }
        }
        return null
    }

    const consult = findProject(consults)
    function determineClassName(ConsultingData) {
        if (ConsultingData === 'Crimson Bear Associates') {
            return 'consulting1';
        } else if (ConsultingData === 'Brown Technology & Consulting Group') {
            return 'consulting2';
        }
    }
    return (
        <div>
            <div className='consultingDetails'>
                <a href={consult.link}
                    rel="noreferrer"
                    target="_blank">
                    <img className={`${determineClassName(consult.title)}`}
                        alt="picture"
                        src={consult.img} /></a>
                <article className='containConsulting'>
                    <h1>{consult.title}</h1>
                    <p className='roleDate'>{consult.role}    •    {consult.date}</p>
                    <p className='body'>{consult.body}</p>
                    <div className='role'>
                        <h2>ROLE</h2>
                        <p>{consult.role}</p>
                    </div>
                    <div className='skills'>
                        <h2>SKILLS</h2>
                        <pre>
                            <p>{consult.skills}</p>
                        </pre>
                    </div>
                    <div className='collabC'>
                        <h2>COLLABORATORS</h2>
                        <pre>
                            <p>{consult.collab}</p>
                        </pre>
                    </div>
                </article>
            </div>
            <div className='consultingMDetails'>
                <a href={consult.link}
                    rel="noreferrer"
                    target="_blank">
                    <img className={`${determineClassName(consult.title)}`}
                        alt="picture"
                        src={consult.img} /></a>
                <article className='containConsultM'>
                    <h1>{consult.title}</h1>
                    <p className='roleDate'>{consult.role}    •    {consult.date}</p>
                    <p className='body'>{consult.body}</p>
                    <div className='mobileCContainer'>
                        <div className='role'>
                            <h2>ROLE</h2>
                            <p>{consult.role}</p>
                        </div>
                        <div className='skills'>
                            <h2>SKILLS</h2>
                            <pre>
                                <p>{consult.skills}</p>
                            </pre>
                        </div>
                        <div className='collabC'>
                            <h2>COLLABORATORS</h2>
                            <pre>
                                <p>{consult.collab}</p>
                            </pre>
                        </div>
                    </div>
                </article>
            </div>
        </div>

    );
}

export default ConsultingDetails;