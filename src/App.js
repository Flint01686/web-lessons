import './App.css';
import { SidebarStyle } from "./components/style/SidebarStyle"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Suspense } from 'react';
const Calculator = React.lazy(() => import('./components/Calculator/Calculator'));
const Timeline = React.lazy(() =>  import('./components/Timeline/Timeline'));
const Stopwatch = React.lazy(() =>  import('./components/Stopwatch/Stopwatch'));
const Quiz = React.lazy(() =>  import('./components/Quiz/Quiz'))
const TodoList = React.lazy(() =>  import('./components/TodoList/TodoList'))
const Clock = React.lazy(() =>  import('./components/Clock/Clock'))

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
    {
      name: "Quiz",
      path: "/quiz",
      source: <Quiz />
    },
    {
      name: "TodoList",
      path: "/todolist",
      source: <TodoList />
    },
  ]
  return (
    <SidebarStyle>
      <Router>
        <div className="root">
          <nav className="sidebar">
            <ul>
              {componentsWithName.map(component => (
                <li key={component.path.replace("/","")}>
                  <Link to={component.path}>{component.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="content">
            <Switch>
              <Suspense fallback={<div>Загрузка...</div>}>
                {componentsWithName.map(component => (
                  <Route key={component.path.replace("/","")} path={component.path}>
                    {component.source}
                  </Route>
                ))}
              </Suspense>
            </Switch>
          </div>
        </div>
      </Router>
    </SidebarStyle>
  );
}

export default App;
