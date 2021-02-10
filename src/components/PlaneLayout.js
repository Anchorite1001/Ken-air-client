import React, {Component} from 'react';

class Seat extends Component {
  render() {
    return (
      <button className="seat">
        {this.props.value}
      </button>
    );
  }
}

class Row extends Component {
  renderSeat(i) {
    return <Seat value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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

class Plane extends Component {
  render() {
    return (
      <div className="plane">
        <div className="plane-board">
          <Row />
        </div>
        <div className="plane-info">
        </div>
      </div>
    );
  }
}

export default PlaneLayout;
