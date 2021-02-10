import React, {Component} from 'react';
import PlaneLayout from './PlaneLayout';
import axios from 'axios';
import PlaneVisual from './PlaneVisual';

const SERVER_URL = 'http://localhost:3000/airplanes.json';


class PlaneCreate extends Component {
  constructor() {
    super();
    this.state = {
      airplane: []
    }
    this.saveAirplane = this.saveAirplane.bind(this);

  }

  saveAirplane(object) {
      axios.post(SERVER_URL, {name: object.name, rows: object.rows, cols: object.cols}).then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
  };


  render() {
    return(
      <div>
      <h2>Create a new airplane</h2>
        <PlaneLayout onSubmit={this.saveAirplane} />
        <PlaneVisual />
      </div>
    )
  }
}

export default PlaneCreate;
