import './BrownDining.css'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react'
import ProjectContext from '../ProjectContext'
// import diagram from './project-pipeline.png'
import diagram from './AWSArchitecture.png'

const ProjectDetails = () => {
    const locationData = useLocation();
    const id = parseInt(locationData.pathname.substring(locationData.pathname.lastIndexOf("/") + 1))
    const projects = useContext(ProjectContext);

    function findProject(projects) {
        for (let i = 0; i < projects.length; i++) {
            if (projects.at(i).id === id) {
                return projects.at(i)
            }
        }
        return null
    }

    const project = findProject(projects)

    return (
        <div>
            <div className='projectDetails'>
                <img className="diningImg" alt="" src={diagram} />
                <article className='containProject'>
                    <h1>{project.title}</h1>
                    <p className='roleDate'>{project.role}    •    {project.date}</p>
                    <p className='body'>{project.body}</p>
                    <div className='role'>
                        <h2>ROLE</h2>
                        <p>{project.role}</p>
                    </div>
                    <div className='skills'>
                        <h2>SKILLS</h2>
                        <pre>
                            <p>{project.skills}</p>
                        </pre>
                    </div>
                    <div className='collabP'>
                        <h2>COLLABORATORS</h2>
                        <pre>
                            <p>{project.collab}</p>
                        </pre>
                    </div>
                </article>
                <div className='border'></div>

            </div>
            <div className='mobilePDetails'>
                <img className='diningImg' alt="" src={diagram} />
                <article className='containProjectM'>
                    <h1>{project.title}</h1>
                    <p className='roleDate'>{project.role}    •    {project.date}</p>
                    <p className='body'>{project.body}</p>
                    <div className='mobilePContainer'>
                        <div className='role'>
                            <h2>ROLE</h2>
                            <p>{project.role}</p>
                        </div>
                        <div className='skills'>
                            <h2>SKILLS</h2>
                            <pre>
                                <p>{project.skills}</p>
                            </pre>
                        </div>
                        <div className='collabP'>
                            <h2>COLLABORATORS</h2>
                            <pre>
                                <p>{project.collab}</p>
                            </pre>
                        </div>
                    </div>
                </article>
                <div className='border'></div>
            </div>
            <div className='click-me'>
                <a href='https://brownfood.netlify.app/' target="_blank">
                    <button className="click-me-btn"><i className="animation"></i>CLICK ME<i className="animation"></i></button>
                </a>
            </div>
        </div>


    );
}

export default ProjectDetails;