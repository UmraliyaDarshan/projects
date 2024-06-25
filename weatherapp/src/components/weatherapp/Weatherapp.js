import React, { useState } from 'react'
import searchicon from '../assets/searchicon3.png'
import cloudicon from '../assets/cloudicon2.png';
import humidityicon from '../assets/1582886.png';
import windicon from '../assets/windico2.png';
import thunderstorm from '../assets/thunderstorm.png';
import rainicon from '../assets/rain.png'
import snowicon from '../assets/snowflake.png'
import clearskyicon from '../assets/sun.png'
import atmosphereicon from '../assets/mist.png'
import axios from 'axios';
function Weatherapp() {
    const [city,setcity]=useState("");
    const [result,setresult]=useState([]);
    const [wicon,setwicon]=useState(cloudicon)
    let apikey="07bcfcfcaea650c5abedcbd64fe5f456";
    const findweather = () =>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        .then((response)=>{
            setresult(response.data)

            const weathercode=response.data.weather[0].id;
            let newicon;
            if(weathercode>=200 && weathercode<300){
                newicon=thunderstorm;
            }
            else if(weathercode>=300 && weathercode<600){
                newicon=rainicon;
            }
            else if(weathercode>=600 && weathercode<700){
                newicon=snowicon;
            }
            else if(weathercode>=700 && weathercode<800){
                newicon=atmosphereicon;
            }
            else if(weathercode===800){
                newicon=clearskyicon;
            }
            else{
                newicon=cloudicon;
            }
            setwicon(newicon)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className='container'>
        <div className='topheader'>
            <div className='header'>
            <input type='text' className='searchinput' value={city} onChange={(e)=>setcity(e.target.value)} placeholder='search'/>
            <div className='searchicon' onClick={()=>findweather()}>
                <img src={searchicon} alt=' search icon'/>
            </div>
            </div>
            <div className='weatherimage'>
                <img src={wicon} alt='weather'/>
            </div>

            {result && result.main && (
                <>    
            <div className='weathertemp'>{Math.floor(result.main.temp)} °C</div>
            <div className='weatherlocation'>{result.name}</div>
            <div className='datacontainer'>
                <div className='element'>
                <img src={humidityicon} id='hmd' alt='Humidity'/>
                <div className='data'>
                    <div className='humidity'>{result.main.humidity}%</div>
                    <div className='text'>Humidity</div>
                </div>
                </div>
                <div className='element'>
                <img src={windicon} alt=' icon'/>
                <div className='data'>
                    <div className='humidity'>{result.wind.speed} KM/H</div>
                    <div className='text'>Wind Speed</div>
                </div>
                </div>
            </div>
            </>
            )}
        </div>
    </div>
  )
}

export default Weatherapp