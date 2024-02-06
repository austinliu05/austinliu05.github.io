import { Link } from "react-router-dom"
import './ProjectList.css'
import { useContext } from 'react'
import ProjectContext from './ProjectContext'

const ProjectList = () => {
    const projects = useContext(ProjectContext);

    function determineClassName(projectData) {
        if (projectData === 'Phantom Traffic Jam Prevention') {
            return 'unt';
        } else if (projectData === 'Cuttr. Startup') {
            return 'cuttr';
        } else if (projectData === 'Burtmobile') {
            return 'mit';
        } else if (projectData === 'Connect4') {
            return 'cs17';
        }else if(projectData === 'Digit Recognition'){
            return 'py';
        }else{
            return 'brown'
        }
    }
    return (
        <div className="project-list">
            <h1>Project Experiences</h1>
            {projects.map((project) => (
                <div className="project-preview" key={project.id}>
                    <Link to={{
                        pathname: `/projects/${project.id}`,
                        data: project
                    }}>
                        <img className={`${determineClassName(project.title)}`} alt="" src={project.logo} />
                        <div className={`${project.title === 'Connect4' ? 'shadowBox' : 'blank'}`}>
                            <h3 className="rainbow">PLAY ME</h3>
                        </div>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        <p>{project.date}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;