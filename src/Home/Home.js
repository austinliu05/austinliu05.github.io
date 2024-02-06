import myImage from './profile.png';
import c from './Languages/c++.png'
import js from './Languages/javascript.png'
import java from './Languages/java.png'
import python from './Languages/python.png'
import html from './Languages/html.png'
import css from './Languages/css.png'
import drracket from './Languages/racket.svg'
import reasonml from './Languages/reason.png'
// import pytorch from './Frameworks/pytorch.png'
import react from './Frameworks/react.png'
import flask from './Frameworks/flask.jpg'
import firebase from './Tools/firebase.png'
// import ros from './Frameworks/ros.png'
import github from './Tools/github.png'
import sql from './Tools/SQL.png'
import aws from './Tools/aws.png'

import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="info">
                    <h1>My Web Portfolio</h1>
                    <p>Hi there! I'm Austin Liu, a freshman at Brown University pursuing a dual degree in Computer Science and Economics, along with an Entrepreneurship Certificate. Currently seeking an internship opportunity.</p>
                </div>
                <img className="pfp" alt="profile" src={myImage} />
                <div className='resume'>
                    <a href="https://drive.google.com/file/d/1-kSKl-dWupRHys6PFBgbqFdUsUIbg-6p/view?usp=sharing" rel="noreferrer"
                        target="_blank" ><button>RESUME</button></a>
                </div>
                <div className="icons">
                    <a className="container1"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/austin-liu-797877262/">
                        <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
                    </a>
                    <a className="container1"
                        href="https://github.com/austinliu05"
                        rel="noreferrer"
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} className='fa-2x' />
                    </a>
                </div>
            </div>
            <div className='mobile'>
                <div className="infoM">
                    <h1>Hi, I'm Austin Liu</h1>
                    <p>Freshman at Brown University studying Computer Science & Economics + Entrepreneurship Certificate</p>
                </div>
                <img className="pfpM" alt="profile" src={myImage} />
                <div className="iconsM">
                    <a className="containerM"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/austin-liu-797877262/">
                        <FontAwesomeIcon icon={faLinkedin} className='fa-1x' />
                    </a>
                    <a className="containerM"
                        href="https://github.com/austinliu05"
                        rel="noreferrer"
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} className='fa-1x' />
                    </a>
                </div>
            </div>
            <div className='borderHome'></div>
            <div className='skillsContainer'>
                <h1>Languages</h1>
                <div className='iconContainer'>
                    <img alt="" className="cplus" src={c}></img>
                    <img alt="" className="java" src={java}></img>
                    <img alt="" className="python" src={python}></img>
                    <img alt="" className="drracket" src={drracket}></img>

                    <img alt="" className="html" src={html}></img>
                    <img alt="" className="css" src={css}></img>
                    <img alt="" className="reasonml" src={reasonml}></img>
                    <img alt="" className="js" src={js}></img>

                    <h2 className='labelC'>C++</h2>
                    <h2 className='labelJ'>Java</h2>
                    <h2 className='labelP'>Python</h2>
                    <h2 className='labelR'>DrRacket</h2>

                    <h2 className='labelH'>HTML</h2>
                    <h2 className='labelCSS'>CSS</h2>
                    <h2 className='labelML'>ReasonML</h2>
                    <h2 className='labelJS'>JavaScript</h2>
                </div>
                <div className='borderHome'></div>
                <h1>Frameworks</h1>
                <div className='frameworkContainer'>
                    {/* <img alt="" className="pytorch" src={pytorch}></img> */}
                    <img alt="" className="react" src={react}></img>
                    <img alt="" className="flask" src={flask}></img>
                    {/* <img alt="" className="ros" src={ros}></img> */}

                    {/* <h2 className='labelPytorch'>PyTorch</h2> */}
                    <h2 className='labelReact'>React</h2>
                    <h2 className='labelFlask'>Flask</h2>
                    {/* <h2 className='labelROS'>ROS</h2> */}
                </div>
                <div className='borderHome'></div>
                <h1>Tools</h1>
                <div className='frameworkContainer'>
                    <img alt="" className="sql" src={sql}></img>
                    <img alt="" className="github" src={github}></img>
                    <img alt="" className="firebase" src={firebase}></img>
                    <img alt="" className="aws" src={aws}></img>

                    <h2 className='labelSQL'>SQL</h2>
                    <h2 className='labelGitHub'>GitHub</h2>
                    <h2 className='labelFire'>Firebase</h2>
                    <h2 className='labelAWS'>AWS</h2>

                </div>
            </div>
        </div>

    );
}

export default Home;