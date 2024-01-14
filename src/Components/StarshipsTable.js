import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StarshipsTable = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setStarships(response.data.results);
      } catch (error) {
        console.error('Error fetching starships:', error.message);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Star Wars Starships</h2>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {starships.map((starship) => (
            <tr key={starship.name}>
              <td>{starship.name}</td>
              <td>{starship.model}</td>
              <td>{starship.manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarshipsTable;
