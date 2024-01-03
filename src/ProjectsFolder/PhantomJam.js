import './ProjectDetails.css'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import ProjectContext from './ProjectContext';

const PhantomJam = () => {
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
    return (
        <div>
            <div className='projectDetails'>
                <img className='project1' alt="picture" src={project.img} />
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
                    <h1>Reactive Methods</h1>
                </div>
                <div>
                    <div className='visual'>
                        <iframe
                            src={project.link1}
                            frameborder="0"
                            width="790"
                            height="480"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                    <div className='visual'>
                        <iframe
                            src={project.link2}
                            frameborder="0"
                            width="790"
                            height="480"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                    <div className='visual'>
                        <iframe
                            src={project.link3}
                            frameborder="0"
                            width="790"
                            height="480"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                    <div className='border'></div>
                    <div className='title'>
                        <h1>Phantom Jam Prevention Visualizer</h1>
                    </div>
                    <div className='visual'>
                        <iframe
                            src="https://www.youtube.com/embed/favHY_6NbNA?si=QH6q-oH5Lnsyt8W_"
                            frameborder="0"
                            width="790"
                            height="480"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                    <div className='border'></div>
                    <div className='title'>
                        <h1>F1tenth Simulation</h1>
                    </div>
                    <div className='visual'>
                        <iframe
                            src="https://www.youtube.com/embed/kTM4iXl9Of8?si=fJArdr1-YKu7V1d4"
                            frameborder="0"
                            width="790"
                            height="480"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className='mobilePDetails'>
                <img className='project1' alt="picture" src={project.img} />
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
                    <h1>Reactive Methods</h1>
                </div>
                <div>
                    <div className='visual'>
                        <iframe
                            src={project.link1}
                            frameborder="0"
                            width="80%"
                            height="200"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                    <div className='visual'>
                        <iframe
                            src={project.link2}
                            frameborder="0"
                            width="80%"
                            height="200"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                    <div className='visual'>
                        <iframe
                            src={project.link3}
                            frameborder="0"
                            width="80%"
                            height="200"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                    <div className='border'></div>
                    <div className='title'>
                        <h1>Phantom Jam Prevention Visualizer</h1>
                    </div>
                    <div className='visual'>
                        <iframe
                            src="https://www.youtube.com/embed/favHY_6NbNA?si=QH6q-oH5Lnsyt8W_"
                            frameborder="0"
                            width="80%"
                            height="200"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                    <div className='border'></div>
                    <div className='title'>
                        <h1>F1tenth Simulation</h1>
                    </div>
                    <div className='visual'>
                        <iframe
                            src="https://www.youtube.com/embed/kTM4iXl9Of8?si=fJArdr1-YKu7V1d4"
                            frameborder="0"
                            width="80%"
                            height="200"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhantomJam;