import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li key={"calculator"}>
              <Link to="/calculator">Calculator</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
