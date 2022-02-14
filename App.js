import { useEffect, useState } from 'react';
import Map from './components/Map'
import Loader from './components/Loader';
import Header from './components/Header';

function App() {
  const[eventData, setEventData] = useState([])
  const[loading, setLoading] = useState(false)

  useEffect( () => {
    const fetchEvents = async () => {
      setLoading(true)
      const data = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await data.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
    // console.log(eventData)
  },[])

  return (
    <div>
      <Header/>
      {/* {!loading ? <Map eventData={eventData} /> : <Loader/>} */}
      <Map eventData={eventData} />
    </div>
  );
}

export default App;
