import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Bio, Contact, Why, News } from './Pages.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Navbar logo="Anthony Grover" links={["who_am_i", "why_i_run", "in_the_news", "contact_me"]} />
          <main>
            <Switch>
              <Route path="/why_i_run">
                <Why />
              </Route>
              <Route path="/contact_me">
                <Contact />
              </Route>
              <Route path="/in_the_news">
                <News />
              </Route>
              <Route path="/">
                <Bio />
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
