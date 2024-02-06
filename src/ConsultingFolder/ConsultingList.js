import { Link } from "react-router-dom"
import './ConsultingList.css'
import { useContext } from "react";
import ConsultingContext from "./ConsultingContext";

const ConsultingList = () => {
    const consultings = useContext(ConsultingContext);
    function determineClassName(projectData) {
        if (projectData === 'Crimson Bear Associates') {
            return 'crimson';
        } else if (projectData === 'Brown Technology & Consulting Group') {
            return 'btcg';
        }
    }
    return (
        <div className="consulting-list">
            <h1>Consulting Experiences</h1>
            {consultings.map((consulting) => (
                <div className="consulting-preview" key={consulting.id}>
                    <Link to={{
                        pathname: `/consulting/${consulting.id}`,
                        data: consulting
                    }}>
                        <img className={`${determineClassName(consulting.title)}`} alt="" src={consulting.logo} />
                        <h2>{consulting.title}</h2>
                        <p>{consulting.employer}</p>
                        <p>{consulting.date}</p></Link>
                </div>
            ))}
        </div>
    );
}

export default ConsultingList;