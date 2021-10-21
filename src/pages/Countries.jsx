import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import CountryCard from '../components/CountryCard';
import '../index.css';
import axios from "axios";

function Countries() {
  const [countriesData, setCountriesData] = useState([]);
  const [rangeValue, setRangeValue] = useState(20);

  const hasData = countriesData.length > 0;


  useEffect(() => {
   axios.get("https://restcountries.com/v2/all")
   .then(res => setCountriesData(res.data))
  
  }, [])


  return (
    <div>
      <Header />
      <Navigation />

      {hasData ? (
        <div className="cards-container">
          <input type="range" value={rangeValue} min="1" max="250" onChange={(e) => setRangeValue(e.target.value)}/>
          {countriesData.slice(0, rangeValue).map((country) => {
            return <CountryCard key={country} data={country}></CountryCard>;
          })}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Countries
