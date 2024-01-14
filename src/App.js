import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('http://192.168.0.36:5000/api/starships');
        setStarships(response.data);
      } catch (error) {
        console.error('Error fetching starships:', error.message);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>{starship.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
