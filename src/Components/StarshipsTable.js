import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import StarshipDetails from './StarshipDetails';

const BACKEND_SERVER = process.env.REACT_APP_EXPRESS_SERVER;
const BACKEND_PORT = process.env.REACT_APP_EXPRESS_PORT;

const StarshipsTable = () => {
  const [starships, setStarships] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get(`http://${BACKEND_SERVER}:${BACKEND_PORT}/api/starships`);
        setStarships(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching starships:', error.message);
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  const handleShowDetails = (starship) => {
    setSelectedStarship(starship);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="container mt-4">
      <h2>Star Wars Starships</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table className="table table-responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Starship class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {starships.map((starship) => (
              <tr key={starship.name}>
                <td>{starship.name}</td>
                <td>{starship.model}</td>
                <td>{starship.manufacturer}</td>
                <td>{starship.starship_class}</td>
                <td>
                  <Button variant="primary" onClick={() => handleShowDetails(starship)}>
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <StarshipDetails show={showDetails} onHide={handleCloseDetails} starship={selectedStarship} />
    </div>
  );
};

export default StarshipsTable;
