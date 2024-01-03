import NavBar from './NavBar'
import Projects from './ProjectsFolder/Projects'
import Consulting from './ConsultingFolder/Consulting'
import Home from './Home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ProjectDetails from './ProjectsFolder/ProjectDetails';
import ConsultingDetails from './ConsultingFolder/ConsultingDetails';
import PhantomJam from './ProjectsFolder/PhantomJam'
import Connect4 from './ProjectsFolder/Connect4'

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
          <Route exact path="/projects/1">
            <Connect4 />
          </Route>
          <Route exact path="/projects/2">
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
