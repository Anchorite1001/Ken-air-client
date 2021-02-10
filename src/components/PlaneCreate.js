import React, {Component} from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Seat extends React.Component {
  renderSeat(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="seat-row">
          {this.renderSeat(0)}
          {this.renderSeat(1)}
          {this.renderSeat(2)}
        </div>
        <div className="seat-row">
          {this.renderSeat(3)}
          {this.renderSeat(4)}
          {this.renderSeat(5)}
        </div>
        <div className="seat-row">
          {this.renderSeat(6)}
          {this.renderSeat(7)}
          {this.renderSeat(8)}
        </div>
      </div>
    );
  }
}

// export default PlaneCreate;
