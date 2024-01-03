import './ProjectDetails.css'
import { useLocation } from 'react-router-dom';
import {useContext} from 'react'
import ProjectContext from './ProjectContext'

const ProjectDetails = () => {
    const locationData = useLocation();
    const id = parseInt(locationData.pathname.substring(locationData.pathname.lastIndexOf("/") + 1))
    const projects = useContext(ProjectContext);
    
    function findProject(projects) {
        for (let i = 0; i < projects.length; i++) {
            if(projects.at(i).id == id){
                return projects.at(i)
            }
        }
        return null
    }

    const project = findProject(projects)
    
    function determineClassName(projectData) {
        if (projectData === 'Cuttr. Startup') {
            return 'project2';
        } else if (projectData === 'Burtmobile') {
            return 'project3';
        } else if (projectData === 'Connect4') {
            return 'project4';
        }
    }
    return (
        <div>
            <div className='projectDetails'>
                <img className={`${determineClassName(project.title)}`} alt="picture" src={project.img} />
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
                <div className='title'>
                    <h1>{project.ppt}</h1>
                </div>
                <div>
                    <div className='visual'>
                        <iframe
                            src={project.link}
                            frameborder="0"
                            width="790"
                            height="480"
                            allowFullScreen="true"
                            mozallowFullScreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>

                </div>
            </div>
            <div className='mobilePDetails'>
            <img className={`${determineClassName(project.title)}`} alt="picture" src={project.img} />
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
                <div className='title'>
                    <h1>{project.ppt}</h1>
                </div>
                <div>
                    <div className='visual'>
                        <iframe
                            src={project.link}
                            frameborder="0"
                            allowFullScreen="true"
                            mozallowFullScreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default ProjectDetails;