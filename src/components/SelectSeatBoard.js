import React, {Component} from 'react'

import ReactDOM from 'react-dom';
import '../index.css';




class SelectSeatBoard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     seat_choice: props.seat_choice
  //   }
  //   console.log(props.seat_choice)
  //   this.updateState = this.updateState.bind(this)
  // }

  // updateState() {
  //   this.setState({seat_choice: this.props.seat_choice});
  // }
  // this.updateState();

  _handleSubmit(event) {
    event.preventDefault(); // prevent the form being submitted to some server.
    this.props.onSubmit(this.props.seat_choice); // fetchImages
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>{this.props.seat_choice}</p>
        <button>Confirm your seat</button>
      </form>
    );
  }
}

export default SelectSeatBoard
