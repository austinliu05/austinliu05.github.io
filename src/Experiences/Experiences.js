import ExperiencesList from './ExperiencesList';
import './ExperiencesList.css'
import ExperiencesContext from './ExperiencesContext'
import { useContext } from 'react';

const Experiences = () => {
   const experiences = useContext(ExperiencesContext);
   return (
      <div className="content">
         <ExperiencesContext.Provider value={experiences}>
            <ExperiencesList/>
         </ExperiencesContext.Provider>
      </div>
   );
}

export default Experiences;