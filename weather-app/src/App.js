import './App.css';
import Header from './comps/Header';
import Card from './comps/Card';
import { useState, useEffect} from 'react'

const API_KEY = 'a615e8461ef54df481f62726240105';


function App() {
  const [location, setLocation] = useState('')

  const [error, setError] = useState(null)

  const [city, setCity] = useState('City')
  const [country, setCountry] = useState('Country')
  const [region, setRegion] = useState('Region')
  const [icon, setIcon] = useState('')
  const [tempC, setTempC] = useState('0')
  const [tempF, setTempF] = useState('0')
  const [text, setText] = useState('Clear')
  const [humidity, setHumidity] = useState('0')
  const [lastUpdate, setLastUpdate] = useState('0')
  const [wSpeed, setWSpeed] = useState('0')
  const [pressure, setPressure] = useState('0')


  useEffect(() => {
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;
  
    const fetchData = async () => {
      try {
        const result = await fetch(API_URL);
        if (!result.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await result.json();
        console.log(jsonData);
        setCity(jsonData.location.name);
        setCountry(jsonData.location.country);
        setRegion(jsonData.location.region);
        setIcon(jsonData.current.condition.icon);
        setText(jsonData.current.condition.text);
        setTempC(jsonData.current.temp_c);
        setTempF(jsonData.current.temp_f);
        setHumidity(jsonData.current.humidity);
        setLastUpdate(jsonData.current.last_updated);
        setWSpeed(jsonData.current.wind_kph);
        setPressure(jsonData.current.pressure_mb);
        setError(null)
      } catch (error) {
        setError(' * check spelling or data is not available')
      }
    };
  
    if (location) {
      fetchData();
    }
  }, [location]);
  

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };


  return (
    <div className="App">
      <h1>HD's WEATHER INFO..</h1>
      <div className="main">
        <Header onLocationChange={handleLocationChange} 
        error = {error}/>
        <Card city={city}
          country={country}
          region={region}
          tempc={tempC}
          tempf={tempF}
          icon={icon}
          text={text}
          humidity={humidity}
          last_update={lastUpdate} 
          w_speed={wSpeed}
          pressure={pressure}/>
      </div>
    </div>
  );
}

export default App;
