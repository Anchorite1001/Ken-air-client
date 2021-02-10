import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

const SERVER_URL = 'http://localhost:3000/flights.json'

class SearchFlight extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
    this.flightSearch = this.flightSearch.bind(this)

  }

  flightSearch(origin, destination){
    axios.get(SERVER_URL).then((response) => {
      const search = function(f) {
        if(f.origin === origin && f.destination === destination) {
          return true
        } else {
          return false
        }
      }
      const results = response.data.filter(search)
      this.setState({results:results})
    }
    )
  }

  render() {
    return(
      <div>
        <SearchForm onSubmit = {this.flightSearch}/>
        <SearchResults results = {this.state.results}/>
      </div>
    )
  }
}

export default SearchFlight
