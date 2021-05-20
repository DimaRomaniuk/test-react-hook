import React from 'react';
import { Counter } from './features/counter/Counter';
import { Button } from 'semantic-ui-react'
import { Hook } from './Hook';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          
        <Link to="/">
                <Button>
                  Home
                </Button>
              </Link>
              
              <Link to="/redux">
                <Button>
                  Redux
                </Button>
              </Link>
              
              <Link to="/hook">
                <Button>
                  Hook
                </Button>
              </Link>
        </nav>
        <Switch>
            <Route path="/redux">
              <Counter />
            </Route>
            <Route path="/hook">
              <Hook />
            </Route>
            <Route path="/">
              {() => 'Please click Redux or Hook button'}
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
