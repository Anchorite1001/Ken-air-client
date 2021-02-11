import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights.json'

class FlightsList extends Component {
  //constructor
  constructor(){
    super();
    this.state = {
      flights:[]
    }

    const fetchFlights = () => {
      axios.get(SERVER_URL).then((response) => {
        this.setState({flights: response.data});
        setTimeout(fetchFlights,4000)
      })
    }

    fetchFlights()
  }

  render(){
    return(
      <div className = 'flightslist'>
        <h3>Flights</h3>
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Flight</th>
              <th>From</th>
              <th>To</th>
              <th>Plane</th>
              <th>Seats</th>
            </tr>

            {this.state.flights.map((f) => {
              return(
                <tr key = {f.id}>
                  <td>{f.date}</td>
                  <td>{f.flight_number}</td>
                  <td>{f.origin}</td>
                  <td>{f.destination}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default FlightsList
