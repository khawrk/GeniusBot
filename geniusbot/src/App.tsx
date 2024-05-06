import './App.css'
import ChatbotIcon from './components/ChatbotIcon'
import { useGeolocated } from "react-geolocated";
import UserContext from './context/userContext';
import { useContext, useEffect } from 'react';

function App() {
  const { location, setLocation } = useContext(UserContext)
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      setLocation(coords)
    }

  }, [coords])

  console.log(location)

  return (

    <>
      <h1 className='font-bold text-[2rem]'>Welcome to GeniusBot</h1>
      {!isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
      ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
      ) : coords ? (
        <div>Saved your location data</div>
      ) : (
        <div> Getting the location data&hellip; </div>
      )}
      <ChatbotIcon />
    </>
  )
}

export default App
