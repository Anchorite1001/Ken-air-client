import React, {Component} from 'react';
import axios from 'axios'

const SearchResults = (props) => {
  return(
    <div className = 'resultsList'>
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

          {props.results.map((f) => {
            return(
              <tr key = {f.id}>
                <td>{f.date}</td>
                <td><a href = {"/flight/" + f.id }> {f.flight_number} </a></td>
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
export default SearchResults
