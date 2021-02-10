import React, {Component} from 'react'

import ReactDOM from 'react-dom';
import '../index.css';

function Square(props) {
  return (
    <button
      className="square"
      onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

function GenerateBoard(rows, cols) {
  const generateLettersArray = (numOfLetters) => {
    const allLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    return allLetters.slice(0, numOfLetters);
  }
  const colArray = generateLettersArray(cols);
  const rowArray = [...Array(rows).keys()].map(x => ++x);

  const allSeats = [];
  rowArray.forEach((number) => {
    let tempArray = []
    colArray.forEach((letter) => {
      tempArray.push(letter + number)
    })
    allSeats.push(tempArray);
  });
  console.log(allSeats);
  return allSeats;
}



class SeatsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [],
    }
  }

  _handleClick(i) {
    const squares = this.state.squares.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return <Square
            value={this.state.squares[i]}
            onClick={() => this._handleClick(i)}
    />;
  }

  renderBoard(array) {
    return
      array.map((row, i) => {
        console.log(row)
        <div className="board-row">
          {row.map((seat, i) => {
            <Square
              value={seat}
              onClick={() => this._handleClick(seat)}
            />;
          })}
        </div>
      });
  }


  render() {
    return (
      <div>
        {this.renderBoard([['A1', 'B1', 'C1'], ['A2', 'B2', 'C2']])}
      </div>
    );
  }
}

export default SeatsBoard
