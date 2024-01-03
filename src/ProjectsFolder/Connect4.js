import './ProjectDetails.css'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Game from './Game'
import { useContext } from 'react';
import ProjectContext from './ProjectContext';

const Connect4 = () => {
    const locationData = useLocation();
    const id = parseInt(locationData.pathname.substring(locationData.pathname.lastIndexOf("/") + 1))
    const projects = useContext(ProjectContext);
    const [isGameVisible, setIsGameVisible] = useState(false);

    function findProject(projects) {
        for (let i = 0; i < projects.length; i++) {
            if (projects.at(i).id == id) {
                return projects.at(i)
            }
        }
        return null
    }

    const project = findProject(projects)
    return (
        <div>
            {/* {(typeof data.members === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                data.members.map((member, i) => (
                    <p key={i}>{member}</p>
                ))
            )} */}
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
                <div onClick={() => setIsGameVisible(true)} className="box-1">
                    <div className="btn btn-one">
                        <span>START</span>
                    </div>
                </div>
                {isGameVisible && <Game onClose={() => setIsGameVisible(false)} />}
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
                <div onClick={() => setIsGameVisible(true)} className="box-1">
                    <div className="btn btn-one">
                        <span>START</span>
                    </div>
                </div>
                {isGameVisible && <Game onClose={() => setIsGameVisible(false)} />}
            </div>
        </div>
    );
}

export default Connect4;