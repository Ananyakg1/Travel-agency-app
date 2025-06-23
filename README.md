# Travel Agency Application

## Overview
This project is a travel agency application that consists of a frontend built with React and a backend built with Node.js and Express. The application allows users to browse travel packages, make bookings, and manage their travel itineraries.

## Project Structure
```
travel-agency-app
├── backend
│   ├── src
│   │   └── index.js
│   ├── package.json
│   └── Dockerfile
├── frontend
│   ├── src
│   │   └── App.js
│   ├── package.json
│   └── Dockerfile
├── deployment
│   └── deployment.yaml
├── pipeline
│   └── pipeline.yaml
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker (for containerization)

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## Docker Setup
To build and run the application using Docker, follow these steps:

### Backend Docker
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Build the Docker image:
   ```
   docker build -t travel-agency-backend .
   ```
3. Run the Docker container:
   ```
   docker run -p 5000:5000 travel-agency-backend
   ```

### Frontend Docker
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Build the Docker image:
   ```
   docker build -t travel-agency-frontend .
   ```
3. Run the Docker container:
   ```
   docker run -p 3000:3000 travel-agency-frontend
   ```

## Deployment
The deployment configuration is defined in `deployment/deployment.yaml`. You can use this file to deploy the application on your preferred platform.

## CI/CD Pipeline
The CI/CD pipeline is defined in `pipeline/pipeline.yaml`. This file contains the steps for building, testing, and deploying the application automatically.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License. See the LICENSE file for details.