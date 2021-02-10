import {useParams} from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';
import React, {Component} from 'react';
import ShortFlightInfo from './ShortFlightInfo';
import SeatsBoard from './SeatsBoard'
import SelectSeatBoard from './SelectSeatBoard'

const SERVER_URL = 'http://localhost:3000/flights.json'

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
      seat_user_chose: '',
      total_seats: [],
      seat_chosen: ['A1', 'A2'],
      airplane_id: 0,
      origin: '',
      destination: '',
      flight_number: '',
      date: '',
    }

    const fetchFlight = () => {
      axios.get(SERVER_URL).then((response) => {
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
          seat_user_chose: '',
          total_seats: ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4'],
          airplane_id: flight.airplane_id,
        });
      })
    }
    fetchFlight();
    // this.sayHi = this.sayHi.bind(this)
  }

  sayHi = (seat_id) => console.log('Hi ' + seat_id + " is clicked");

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
        <SeatsBoard flight_id={this.state.flight_id} rows='6' cols='4' onClick={this.sayHi}/>
        <SelectSeatBoard />
      </div>
    )
  }
}

export default BookSeat;
