import React, {Component} from 'react';
import axios from 'axios'

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      origin:'',
      destination:''
    }
    this._trackOrigin = this._trackOrigin.bind(this)
    this._trackDestination = this._trackDestination.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _trackOrigin(event){
    this.setState({origin: event.target.value})
  }

  _trackDestination(event){
    this.setState({destination: event.target.value})
  }

  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.origin, this.state.destination)
  }

  render(){
    return(
      <form onSubmit = {this._handleSubmit}>
        <label>From:</label>
        <input type = 'origin' placeholder = 'Sydney' onChange = {this._trackOrigin}/>

        <label>To:</label>
        <input type = 'destination' placeholder = 'Melbourne' onChange = {this._trackDestination} />


        <button>Search</button>
      </form>
    )
  }
}
export default SearchForm
