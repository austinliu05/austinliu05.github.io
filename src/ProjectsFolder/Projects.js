import ProjectList from './ProjectList';
import './ProjectList.css'
import ProjectContext from './ProjectContext'
import { useContext } from 'react';

const Project = () => {
   const projects = useContext(ProjectContext);
   return (
      <div className="content">
         <ProjectContext.Provider value={projects}>
            <ProjectList/>
         </ProjectContext.Provider>
      </div>
   );
}

export default Project;