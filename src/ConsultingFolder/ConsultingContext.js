import {createContext} from 'react'
import './ConsultingList'
import btcg from './assets/BTCG/BTCGHome.png';
import crimson from './assets/Crimson/CrimsonHome.png';
import CrimsonLogo from './assets/Crimson/CrimsonLogo.png';
import BTCGLogo from './assets/BTCG/BTCGLogo.png';

const consulting = [
   {
      title: "Crimson Bear Associates",
      body: "Currently working on client acquisition...",
      date: "Current",
      employer: "Consulting Firm",
      role: "Associate Consultant",
      link: "https://www.crimsonbearassociates.com/home",
      img: crimson,
      skills: "Life Sciences Expertise",
      collab: "Martin Kononov, CEO\nMaxwell Moody, COO\nDrew Morehead, CFO\nJuliette Woodcum, CMO",
      logo: CrimsonLogo,
      id: 2
   },
   {
      title: "Brown Technology & Consulting Group",
      body: "Manage club website and provide expert guidance on all software related questions. Engaged in weekly team meetings focused on overhauling Amba's revenue model, a marketplace connecting influencers and brands. Proposed a tiered monthly subscription model, categorizing distinct features per tier. Explored diverse revenue streams including CPE (Cost Per Engagement), CTR (Click Through Rate), and CPC (Cost Per Click).",
      date: "Current",
      employer: "Consulting Club",
      role: "VP of Technology",
      link: "https://browntechnologyconsultinggroup.com/#/",
      img: btcg,
      skills: "Market Analysis\nRevenue Model Strategies\nProblem Solving\nCreativity",
      collab: "Priyam Parekh\nGrace Yang\nJustin Dyer\nJames Phelan\nLeanne Chia\nGarrett Mann",
      logo: BTCGLogo,
      id: 1
   }
];

const ConsultingContext = createContext(consulting);

export default ConsultingContext;