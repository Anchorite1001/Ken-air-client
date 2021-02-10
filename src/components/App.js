import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FlightsList from './FlightsList'
import SearchFlight from './SearchFlight'

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
            /* Your own Class*/
          </Route>

          <Route path="/logout">
            /* Your own Class*/
          </Route>

          <Route path="airplanes">
            /* Your own Class*/
          </Route>

          <Route path="/flights">
            <FlightsList />
          </Route>

          <Route path="/search">
            <SearchFlight />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

//todo: add plane&seat; change flightnumber into link for book seat.

export default App;
