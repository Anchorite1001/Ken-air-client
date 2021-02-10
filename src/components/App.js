import axios from 'axios'
import PlaneCreate from './PlaneCreate'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FlightsList from './FlightsList'
import SearchFlight from './SearchFlight'
import BookSeatApp from './BookSeatApp'


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

<<<<<<< HEAD
          <Route path="/search">
            <SearchFlight />
=======
          <Route path="flight/:id">
            <BookSeatApp />
          </Route>

          <Route path="search">
            /* Your own Class*/
>>>>>>> d155b7cb35502fa0a6ca39a80f40a5011f18c8fc
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

//todo: add plane&seat; change flightnumber into link for book seat.

export default App;
