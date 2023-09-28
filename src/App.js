
// import Tempapp from './components/Tempapp';
import './css/style2.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const [city, setCity] = useState('Nuzvid ');
  const [weatherData, setWeatherData] = useState(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"8da2413b57375caabe12a65119feea57"}`;

  const getData = () => {
    axios.get(url)
      .then(res => setWeatherData(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData();
    document.getElementById("weatherInput").focus();
  }, [])

  const handleChange = (e) => {
    setCity(e.target.value);
  }
  const handleSubmit = () => {
    getData();
  }

  const name = weatherData ? weatherData.name : '';
  const country = weatherData ? weatherData.sys.country : '';
  const humidity = weatherData ? weatherData.main.humidity : '';
  const pressure = weatherData ? weatherData.main.pressure : '';
  const mintemp = weatherData ? weatherData.main.temp_min : '';
  const maxtemp = weatherData ? weatherData.main.temp_max : '';
  const temp = weatherData ? weatherData.main.temp : '';
  const windspeed = weatherData ? weatherData.wind.speed : '';
  // const clouds = weatherData ? weatherData.clouds.all : '';
  const weather = weatherData ? weatherData.weather[0].description : '';
  const iconcode = weatherData ? weatherData.weather[0].icon : '#';

  return (
      <div className="box" style={{borderColor : 'black'}}>
        <div className="weather">
          <input id="weatherInput" type="text" className="city" placeholder="CITY NAME" onChange={handleChange} />
          <button onClick={handleSubmit}>Search</button>
        </div>
        
        <div className='i'>
        <div className="results" style={styles.results}>
          <div style={{ fontSize: 30 }}>{name}, {country}
          </div>
          <div style={{ fontSize: 54, fontWeight: 'bold'}}>{Math.round(temp)}' C</div>
          <h6> min: {mintemp}'C | max : {maxtemp}'C </h6>
          <div>  <img src={`http://openweathermap.org/img/w/${iconcode}.png`} alt="Weather icon"  style={{padding : '0'}}/> {weather}</div>
          <div><b>Wind Speed :</b> {windspeed}</div>
          <div><b>Humidity : </b>{humidity}%</div>
          <div><b>Pressure :</b> {pressure} </div>
         
        </div>
        </div>
        </div>
  );
}

const styles = {
  results: { 
    color:'#111',
    padding: '2rem',
    margin: '1rem',
   
  }
}

export default App;
