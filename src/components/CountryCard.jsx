import React from 'react';
import './CountryCard.css';

function CountryCard({data}) {
 

 
  const cardStyles = {
    backgroundImage: `url('${data.flag}')`,
    border: "2px solid white",
    width: "20rem",
    height: '12rem',
    backgroundSize: 'cover'
  };

  return (
    <div style={cardStyles}>
      <h2>{data.name}</h2>
      <div className="flag-image">
      {/* <img className="image" src={data.flag} alt={data.name}/> */}
      </div>
      <p>{data.capital}</p>
      
    </div>
  )
}

export default CountryCard
