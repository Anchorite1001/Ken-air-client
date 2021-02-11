import React, {Component} from 'react'

import ReactDOM from 'react-dom';
import '../index.css';

function Square(props) {
  return (
    <button
      className="square"
      onClick={() => props.seat.onClick(props.seat.id)}>
      {props.seat.id}
    </button>
  )
}

function Row(props) {
  return (
    <div className="board-row">
      {props.seats.map((seat, index) => {
        return <Square key={index} seat={seat} />
      })}
    </div>
  )
}

function Board(props) {
  return (
    props.rows.map((seats) => {
      return <Row seats={seats} />
    })
  )
}



class SeatsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSeats: {},

    }
    console.log(props.rows);
    console.log(props.cols);
  }

  // _handleClick(i) {
  //   const allSeats = this.state.allSeats.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  renderSquare(i) {
    return <Square
            value={this.state.squares[i]}
            onClick={() => this._handleClick(i)}
    />;
  }

  GenerateBoard(rows, cols, flight_id) {
    const generateLettersArray = (numOfLetters) => {
      const allLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
      return allLetters.slice(0, numOfLetters);
    }
    const colArray = generateLettersArray(parseInt(cols));
    const rowArray = [...Array(parseInt(rows)).keys()].map(x => ++x);

    const allSeats = [];
    console.log(this.props);
    rowArray.forEach((number) => {
      let rowArray = [];
      colArray.forEach((letter) => {
        let seatObj = {
          id: (letter + number),
          flight_id: flight_id,
          user_id: '',
          onClick: (seat_id) => this.props.onClick(seat_id)
        };
        rowArray.push(seatObj);
      })
      allSeats.push(rowArray);
    });

    return allSeats;
  }

  // renderBoard(array) {
  //   return
  //     <p>Hi</p>
  //     array.map((row) => console.log(row)
  //       <div className="board-row">
  //         {row.map((seat, i) => {
  //           <Square
  //             value={seat}
  //             onClick={() => this._handleClick(seat)}
  //           />;
  //         })}
  //       </div>
  //     ))
  // }


  // render() {
  //   return (
  //     <div>
  //       {GenerateBoard(this.props.rows, this.props.cols, this.props.flight_id).map((row) =>
  //         <div>{row.map((seat) =>
  //           <button onClick={() => this._handleClick(seat)}>{seat.id}</button>)}
  //         </div>)}
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <Board rows={this.GenerateBoard(this.props.rows, this.props.cols, this.props.flight_id)} />
      </div>
    )
  }
}

export default SeatsBoard;
