import React from "react";
import Login from './Login'
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/airplanes">Planes</Link>
            </li>
            <li>
              <Link to="/flights">Flights</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/logout">
            /* Your own Class*/
          </Route>

          <Route path="airplanes">
            /* Your own Class*/
          </Route>

          <Route path="flights">
            /* Your own Class*/
          </Route>

          <Route path="search">
            /* Your own Class*/
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
