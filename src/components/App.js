import axios from 'axios';
// import PlaneCreate from './PlaneCreate';
import React from "react";
import PlaneCreate from './PlaneCreate';
import Login from './Login';
import Logout from './Logout';
import FlightsList from './FlightsList';
import BookSeat from './BookSeatApp';
import SearchFlight from './SearchFlight';


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
            <Login />
          </Route>

          <Route path="/logout">
            <Logout />
          </Route>

          <Route path="/airplanes">
            <PlaneCreate />
          </Route>

          <Route path="/flights">
            <FlightsList />
          </Route>

          <Route path="/search">
            <SearchFlight />
          </Route>

          <Route path="/flight/:id" component={BookSeat} />

          <Route path="search">
            <SearchFlight />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}



export default App;
