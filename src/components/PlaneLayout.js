import React, {Component} from 'react';


class PlaneLayout extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      rows: '',
      cols: ''
    };

    this._handleNameInput = this._handleNameInput.bind(this);
    this._handleRowsInput = this._handleRowsInput.bind(this);
    this._handleColsInput = this._handleColsInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleNameInput(event) {
    this.setState({name: event.target.value});
  }



  _handleRowsInput(event) {
    this.setState({rows: event.target.value});
    // return <Seat value={i} />;
  }


  _handleColsInput(event) {
    this.setState({cols: event.target.value});
  }


  _handleSubmit(event) {
    event.preventDefault(); //prevent form being submitted
    this.props.onSubmit(this.state);

}



  render() {
    return (
      <div>
        <p>Enter the name of the airplane, followed by the seating rows and columns:</p>
        <form onSubmit={ this._handleSubmit }>
          <input type="text" placeholder= 'Aircraft Name' required onInput={this._handleNameInput}/>
          <input type="number" placeholder='rows' required onInput={this._handleRowsInput}/>
          <input type="number" placeholder='columns' required onInput={ this._handleColsInput }/>
          <button>Create new aircraft</button>
        </form>
      </div>
    );
  }
}

export default PlaneLayout;
