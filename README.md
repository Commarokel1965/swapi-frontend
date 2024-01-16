# Star Wars Starships React App

This is a React web application that displays information about Star Wars starships using the SWAPI (Star Wars API).

## Prerequisites

Before you begin, ensure you have Node.js installed:

- Node.js `v20.11.0` : [Download Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:
    
    `git clone https://github.com/Commarokel1965/swapi-frontend.git`
    
2. Navigate to the project directory:
    
    `cd swapi-frontend`
    
3. Install dependencies:
    
    `npm install`
    

## Configuration

The app connects to a backend server. Make sure to set the appropriate values in your `.env` file. Create a `.env` file in the root directory and add the following:


```
REACT_APP_EXPRESS_SERVER=your_backend_server_address 
REACT_APP_EXPRESS_PORT=5000
```

Replace `your_backend_server_address` with the actual address of backend server: [Download backend server](https://github.com/Commarokel1965/swapi-backend)

## Running the App

Start the development server:

`npm start`

The app will be running at http://localhost:3000 by default.

## Usage

1. Open your browser and navigate to http://localhost:3000.
2. Explore Star Wars starships, search for specific starships, and view details.

## Tests

To run tests:

`npm test`

## Build

To build the production-ready app:

`npm run build`

The build files will be located in the `build` directory.