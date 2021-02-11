import {useParams} from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';
import React, {Component} from 'react';
import ShortFlightInfo from './ShortFlightInfo';
import SeatsBoard from './SeatsBoard'
import SelectSeatBoard from './SelectSeatBoard'

const ALL_FLIGHTS_URL = 'http://localhost:3000/flights.json'
const ALL_PLANES_URL = 'http://localhost:3000/planes.json'
const FLIGHT_URL = (flight_id) => {
  return `http://localhost:3000/flights/${flight_id}.json`
}

function BookSeat() {

    const { id } = useParams();

    return (
      <BookSeatApp flight_id={parseInt(id)} />
    );
}

class BookSeatApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flight_id: this.props.flight_id,
      seat_choice: '',
      current_seat_plan: [],
      airplane_id: 0,
      origin: '',
      destination: '',
      flight_number: '',
      date: '',
      user_id: 19,
    }

    const fetchFlight = () => {
      axios.get(ALL_FLIGHTS_URL).then((response) => {
        const flight = response.data.find(flightInfo =>
          flightInfo.id === this.state.flight_id
        );
        console.log(flight);
        this.setState({
          flight_id: this.props.flight_id,
          flight_number: flight.flight_number,
          origin: flight.origin,
          destination: flight.destination,
          date: flight.date,
          seat_choice: '',
          current_seat_plan: ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4'],
          airplane_id: flight.airplane_id,
        });
      })
    }

    fetchFlight();
    // This function create the blank seat plan
    const createSeatsDb = (object) => {
      axios.put(FLIGHT_URL(this.state.flight_id), {
        id: this.state.flight_id,
        flight_number: this.state.flight_number,
        origin: this.state.origin,
        destination: this.state.destination,
        date: this.state.date,
        airplane_id: this.state.airplane_id,
        seats: object
      }).then((response) => {
        console.log(response);
      })
    }
    // this.createSeatsDb = this.createSeatsDb.bind(this)
    this.updateFlight = this.updateFlight.bind(this)
    this.updateSeatChoice = this.updateSeatChoice.bind(this)
  }

  sayHi = (seat_id) => console.log('Hi ' + seat_id + " is clicked");

  updateFlight(user_id) {
    console.log(user_id);
    axios.put(FLIGHT_URL(this.state.flight_id), {
      id: this.state.flight_id,
      flight_number: this.state.flight_number,
      origin: this.state.origin,
      destination: this.state.destination,
      date: this.state.date,
      airplane_id: this.state.airplane_id,
      seats: user_id
    }).then((response) => {
      // Add the new secret to the existing collection of secrets in `state`
      // this.setState({secrets: [...this.state.secrets, response.data]})
      console.log(response);
    })
  }

  // this.createSeatsDb()
  updateSeatChoice = (seat) => {
    this.setState({seat_choice: seat})
  }


  render() {
    return (
      <div>
        <p>flight_id: {this.state.flight_id}</p>
        <ShortFlightInfo
          flight_id={this.state.flight_id} flight_number={this.state.flight_number}
          origin={this.state.origin}
          destination={this.state.destination}
          date={this.state.date}
        />
        <SeatsBoard flight_id={this.state.flight_id} rows='6' cols='4' onClick={this.updateSeatChoice}/>
        <SelectSeatBoard seat_choice={this.state.seat_choice} onSubmit={this.updateFlight}/>
      </div>
    )
  }
}

export default BookSeat;
