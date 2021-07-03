import './App.css';
import Calculator from './components/Calculator/Calculator';
import Timeline from './components/Timeline/Timeline';
import Stopwatch from './components/Stopwatch/Stopwatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Clock from './components/Clock/Clock';

function App() {
  let componentsWithName =[
    {
      name: "Calculator",
      path: "/calculator",
      source: <Calculator />,
    },
    {
      name: "Timeline",
      path: "/timeline",
      source: <Timeline />,
    },
    {
      name: "Stopwatch",
      path: "/stopwatch",
      source: <Stopwatch />,
    },
    {
      name: "Clock",
      path: "/clock",
      source: <Clock />
    },
  ]
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {componentsWithName.map(component => (
              <li key={component.path.replace("/","")}>
                <Link to={component.path}>{component.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {componentsWithName.map(component => (
            <Route key={component.path.replace("/","")} path={component.path}>
              {component.source}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
