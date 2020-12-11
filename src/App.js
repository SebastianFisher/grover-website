import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Home, Goals, About, Why, Acknowledgements, Purpose } from './components/Pages.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar logo="Talks With Tony" links={["home", "about", "my_goals", "why_i_run", "purpose", "acknowledgements"]} />
          <main>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/my_goals">
                <Goals />
              </Route>
              <Route path="/why_i_run">
                <Why />
              </Route>
              <Route path="/purpose">
                <Purpose />
              </Route>
              <Route path="/acknowledgements">
                <Acknowledgements />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
          <footer>

          </footer>
        </div>
      </Router>
    )
  }
}

export default App;
