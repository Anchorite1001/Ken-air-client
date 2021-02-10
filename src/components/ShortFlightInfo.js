import React, {Component} from 'react'
import axios from 'axios'

const SERVER_URL = 'http://localhost:3000/flights.json'

const ShortFlightInfo = (props) => {
  return(
    <div>
      <p>
        <span>{props.date}</span> |
        <span> Flight {props.flight_number}</span> |
        <span> {props.origin} > {props.destination}</span>
      </p>
    </div>
  )
}

export default ShortFlightInfo;
