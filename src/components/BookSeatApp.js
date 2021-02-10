import {useParams} from "react-router-dom"
import axios from 'axios'
import ShortFlightInfo from './ShortFlightInfo';
import SeatsBoard from './SeatsBoard'
import SelectSeatBoard from './SelectSeatBoard'

const SERVER_URL = 'http://localhost:3000/flights.json'

class BookSeatApp extends Component {
  const fetchId = (id) => {
    id = useParams();
  }

  const fetchFlightInfo = () => {
    axios.get(SERVER_URL).then((response) => {
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <p>flight_id: {id}</p>
        <ShortFlightInfo flight_id={id} />
        <SeatsBoard flight_id={id} />
        <SelectSeatBoard />
      </div>
    )
  }
}

export default BookSeatApp;
