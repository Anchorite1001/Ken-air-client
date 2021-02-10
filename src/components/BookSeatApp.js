import {useParams} from "react-router-dom"
import ShortFlightInfo from './ShortFlightInfo';
// import SeatsBoard from './SeatsBoard'
// import SelectSeatBoard from './SelectSeatBoard'

const SERVER_URL = 'http://localhost:3000/flights.json'

function BookSeatApp() {
  let {id} = useParams();

  return (
    <div>
      <p>flight_id: {id}</p>
      <ShortFlightInfo flight_id={id} />
      
    </div>
  )
}

export default BookSeatApp;
