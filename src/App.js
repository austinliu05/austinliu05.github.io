import NavBar from './Home/NavBar'
import Projects from './ProjectsFolder/Projects'
import Consulting from './ConsultingFolder/Consulting'
import Experiences from './Experiences/Experiences'
import Home from './Home/Home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectDetails from './ProjectsFolder/ProjectDetails';
import ConsultingDetails from './ConsultingFolder/ConsultingDetails';
import ExperienceDetails from './Experiences/ExperiencesDetails'
import PhantomJam from './ProjectsFolder/PhantomJam'
import Connect4 from './ProjectsFolder/Connect4/Connect4'
import Brown from './ProjectsFolder/FindFood/BrownDining'
function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/5">
            <Brown />
          </Route>
          <Route exact path="/projects/4">
            <Connect4 />
          </Route>
          <Route exact path="/projects/3">
            <PhantomJam />
          </Route>
          <Route exact path="/projects/:id">
            <ProjectDetails />
          </Route>
          <Route exact path="/consulting">
            <Consulting />
          </Route>
          <Route exact path="/consulting/:id">
            <ConsultingDetails />
          </Route>
          <Route exact path="/experiences">
            <Experiences />
          </Route>
          {/* <Route exact path="/experiences/:id">
            <ExperienceDetails />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
