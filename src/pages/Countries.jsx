import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import CountryCard from '../components/CountryCard';
import Loader from '../components/Loader';
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

  const sortByPop = () => {
    const sortedArray = countriesData.slice(0).sort((a,b) => {
      return b.population - a.population
    })

    setCountriesData(sortedArray);
    console.log(countriesData)

  }

  const sortByArea = () => {
     const sortedArray = countriesData.slice(0).sort((a, b) => {
       return b.area - a.area;
     });

     setCountriesData(sortedArray)
  }


  return (
    <div>
      <Header />
      <Navigation />

      {hasData ? (
        <div className="cards-container">
          <button onClick={sortByPop}>Sort by population</button>
          <button onClick={sortByArea}>Sort by area</button>
          <button onClick={() => setCountriesData(countriesData)}>Clear</button>
          <div className="input-container">
            <input type="range" value={rangeValue} min="1" max="250" onChange={(e) => setRangeValue(e.target.value)}/></div>
          {countriesData.slice(0, rangeValue).map((country) => {
            return <CountryCard key={country} data={country}></CountryCard>;
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Countries
