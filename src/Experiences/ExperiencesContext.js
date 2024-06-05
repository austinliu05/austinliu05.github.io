import {createContext} from 'react'
import kog from './assets/kog-logo.jpeg'
import MDP from './assets/MDP-logo.png'
const experiences = [
   {
      title: "Kognitiv Edge",
      body: "",
      date: "March 2024 - July 2024",
      skills: "CI/CD Pipelines\nIaC (Infrastructure as Code\nTerraform",
      role: "Intern",
      desc: "Back End Dev Intern",
      logo: kog,
      id: 2
   },
   {
      title: "MyDataProduct",
      body: "",
      date: "February 2024 - May 2024",
      skills: "GitLab\nFlask\nGCP (Google Cloud Platform)\nTerraform\nRedis\nCI/CD Pipeline",
      role: "Intern",
      desc: "Data Product Engineering Intern",
      logo: MDP,
      id: 1
   }
];

const ExperiencesContext = createContext(experiences);

export default ExperiencesContext;