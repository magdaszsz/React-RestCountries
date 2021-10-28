import React from 'react';
import './CountryCard.css';

function CountryCard({data}) {
  const cardStyles = {
    backgroundImage: `url('${data.flag}')`,
    backgroundColor: 'lightblue',
    //border: "2px solid white",
    width: "20rem",
    height: '12rem',
    backgroundSize: 'cover', 
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box'
  };

  return (
    <div className="card" style={cardStyles}>
      <div className="card-hidden">
        <h2>{data.name}</h2>
        <div className="flag-image">
        {/* <img className="image" src={data.flag} alt={data.name}/> */}
        </div>
        <p>{data.capital}</p>
      </div>
      
    </div>
  )
}

export default CountryCard
