import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const renderListSection = (title, items) => {
    if (items.length === 0) {
      return null;
    }
  
    return (
      <div>
        <p className="mt-3"><strong>{title}:</strong></p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item} target="_blank" rel="noreferrer">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

const StarshipDetails = ({ show, onHide, starship }) => {
  if (!starship) {
    return null;
  }

  const {
    name,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    pilots,
    films,
  } = starship;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
            <div className="row mb-2">
            <div className="col-sm-8">
                <strong>Cost in Credits:</strong>
            </div>
            <div className="col-sm-4">{cost_in_credits}</div>
            </div>
            <div className="row mb-2">
            <div className="col-sm-8">
                <strong>Length:</strong>
            </div>
            <div className="col-sm-4">{length}</div>
            </div>
            <div className="row mb-2">
            <div className="col-sm-8">
                <strong>Max Atmosphering Speed:</strong>
            </div>
            <div className="col-sm-4">{max_atmosphering_speed}</div>
            </div>
            <div className="row mb-2">
            <div className="col-sm-8">
                <strong>Crew:</strong>
            </div>
            <div className="col-sm-4">{crew}</div>
            </div>
            <div className="row mb-2">
            <div className="col-sm-8">
                <strong>Passengers:</strong>
            </div>
            <div className="col-sm-4">{passengers}</div>
            </div>
            <div className="row mb-2">
            <div className="col-sm-8">
                <strong>Cargo Capacity:</strong>
            </div>
            <div className="col-sm-4">{cargo_capacity}</div>
            </div>
            <div className="row mb-2">
            <div className="col-sm-8">
                <strong>Consumables:</strong>
            </div>
            <div className="col-sm-4">{consumables}</div>
            </div>
            <div className="row mb-2">
            <div className="col-sm-8">
                <strong>Hyperdrive Rating:</strong>
            </div>
            <div className="col-sm-4">{hyperdrive_rating}</div>
            </div>
            <div className="row mb-2">
            <div className="col-sm-8">
                <strong>MGLT:</strong>
            </div>
            <div className="col-sm-4">{MGLT}</div>
            </div>


            {renderListSection('Pilots', pilots)}
            {renderListSection('Films', films)}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StarshipDetails;
