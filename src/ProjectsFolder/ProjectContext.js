import {createContext} from 'react'
import poster from './assets/PhantomJam/Liu_Poster.png';
import UNTlogo from './assets/PhantomJam/UNT.png';
import burtmobile from './assets/BurtMobile/BurtMobile.png';
import cuttr from './assets/Cuttr/Cuttr.png';
import CutLogo from './assets/Cuttr/CuttrLogo.png';
import MITlogo from './assets/BurtMobile/MIT.png';
import minimax from './assets/Connect4/minimax.webp';
import brown from './FindFood/brown.png'

const projects = [
   {
      title: "Find My Food",
      body: "Developed a web application for Brown University to streamline the search for preferred dining hall meals, leveraging Python web scraping on AWS Lambda for weekly menu extraction from the university's dining site. The scraped data is stored in an S3 bucket and integrated into an AWS RDS database by another Lambda function. A Flask backend serves this data, improving user meal selection with a voting system for popular dishes. The project showcases advanced CI/CD practices, employing Jest and Pytest within GitHub Actions for automated testing and deployment.",
      date: "January 2024 - Current",
      skills: "Figma\nPython\nFlask\nAWS\nMySQL Workbench\nCI/CD (Pytest & Jest)",
      collab: "N/A",
      role: "Lead Developer",
      desc: "Web App",
      employer: "Personal",
      logo: brown,
      id: 5
   },
   {
      title: "Connect4",
      body: "Developed Connect4 game in ReasonML. This project featured player vs. player and player vs. AI modes, with the AI's strategic gameplay powered by a minimax algorithm and an estimateValue function. Further adapted the game in Python, and deployed using Flask for the backend and React for the frontend. Used Google Firebase to track total Wins/Losses/Draws.",
      date: "November 2023 - December 2023",
      skills: "Python\nFlask\nReactJS\nEstimate Value Algorithim\nMinimax Algorithim",
      collab: "N/A",
      role: "Student",
      desc: "CS17 Project",
      employer: "Brown CSCI 0170",
      img: minimax,
      id: 4
   },
   {
      title: "Phantom Traffic Jam Prevention",
      body: "Acquired fundamental expertise in ROS via UPenn's F1tenth Course, mastering Reactive Methods like Wall Following, Follow the Gap, and PID Controller. Initially implemented these techniques in a simulator, then progressed to real F1tenth vehicles. Subsequently developed the 'Phantom Traffic Jam Prevention Project' for an undergraduate research competition, aimed at alleviating road congestion by applying the learned concepts.",
      date: "August 2021 - May 2023",
      employer: "UNT Autonomous Vehicles Lab",
      role: "Research Assistant",
      desc: "Autonomous Vehicular Research",
      skills: "C++\nROS (Robot Operating System)\nEdge Computing",
      collab: "Dr. Qing Yang\nDominic Carillo",
      img: poster,
      logo: UNTlogo,
      link1: "https://www.youtube.com/embed/5J1aIkcvFXI?si=dKH7zLIYz0vBhWI0",
      link2: "https://www.youtube.com/embed/_YuuhvzRyYc?si=0ebgjBKZTtqrnn5k&amp;start=10",
      link3: "https://www.youtube.com/embed/3MftQa9CS4k?si=HMrign-qCCFBViLJ&amp;start=1",
      id: 3
   },

   {
      title: "Cuttr. Startup",
      body: "Founded Cutsies, a restaurant line queueing application, at LaunchX, later rebranded as Cuttr. Acquired skills in market analysis and customer research, shaping a value proposition focused on bidding for front-of-line positions. Led the development of an initial proof of concept using HTML, CSS, and JavaScript, integrating MQTT and Google Firebase for customer queue management. Piloted the solution with an Atlanta-based seafood chain, garnering positive feedback from both staff and patrons. Top 100 in Blue Ocean International Competition",
      date: "Summer 2021 - Summer 2022",
      employer: "Self-Employed",
      role: "Co-Founder",
      desc: "Entrepreneurship",
      skills: "JavaScript\nCSS\nGoogle Firebase\nHTML\nMQTT",
      collab: "Anantha Narayanan\nPranav Singaraju\nJessica Zhang\nEdward Cao\nDaniel Liu",
      img: cuttr,
      logo: CutLogo,
      ppt: "Proof of Concept",
      link: 'https://www.youtube.com/embed/bkoOC8PQvwE?si=fqqt85IP30Qii_fd',
      id: 2
   },

   // {
   //    title: "Burtmobile",
   //    body: "Studied at MIT EDW, gaining proficiency in power tools (Bandsaw, drill press, hand tools, etc.) at the MIT Makerspace. Harnessed creative brainstorming techniques, generating 1000+ ideas rapidly, and honed skills in iterative engineering design. Designed and fabricated custom controller molds for 'Burt,' a toddler with developmental coordination disorder, culminating in a laser-cut final version.",
   //    date: "Summer 2019",
   //    employer: "MIT Engineering Design Workshop",
   //    role: "Student",
   //    desc: "MIT Engineering Design Workshop",
   //    skills: "Power tools\nCAD & Lasercutting\nElectrical Wiring",
   //    collab: "Sophia Green\nAditi Shankar\nAmina",
   //    img: burtmobile,
   //    logo: MITlogo,
   //    ppt: "MIT EDW Presentation",
   //    link: 'https://docs.google.com/presentation/d/1cX1gkOLOp6rC8JWpMuOAiCnbpM1UmqQ1N4YPTSWAOOE/preview?usp=sharing',
   //    id: 1
   // }
];

const ProjectContext = createContext(projects);

export default ProjectContext;