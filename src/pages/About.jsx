import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import '../index.css';
import axios from 'axios';
import CountryCard from '../components/CountryCard';

function About() {
  const [visible, setVisible] = useState(5);
  const [countryData, setCountriesData] = useState([]);

    useEffect(() => {
      axios
        .get("https://restcountries.com/v2/all")
        .then((res) => setCountriesData(res.data.slice(0,40)));
    }, []);

    const handleClick = () => {
      setVisible(visible + 5)
    }


  return (
    <div>
      <Header />
      <Navigation />
      <div className="cards-container">
        {visible < countryData.length && (
          <button onClick={handleClick}>show 5 more</button>
        )}

        {countryData.slice(0, visible).map((country) => {
          return <CountryCard data={country} />;
        })}
      </div>
    </div>
  );
}

export default About
