import ConsultingContext from './ConsultingContext';
import './ConsultingList'
import ConsultingList from './ConsultingList';
import { useContext } from 'react';

const Consulting = () => {
   const consulting = useContext(ConsultingContext);
   return (
      <div className="content">
         <ConsultingContext.Provider value={consulting}>
            <ConsultingList />
         </ConsultingContext.Provider>
      </div>
   );
}

export default Consulting;