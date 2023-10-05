
/*
import React, { useEffect, useState } from 'react';

function CarTypes() {
  const [data, setData] = useState([]);
  
  useEffect(() => {

    fetch('http://localhost:3000/fetch/Honda')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, []);
  

  return (
    <div>
      <h1>Car List</h1>
      {data.length === 0 ? (
        <p>No data found for the specified name.</p>
      ) : (
        <ul>
          {data.map((car) => (
            <li key={car._id}>
              <h2>Name: {car.name}</h2>
              <p>Year: {car.year}</p>
              <p>Other Value: {car.__v}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}

export default CarTypes;

*/