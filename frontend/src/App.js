import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/travel')
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(() => setApiMessage('Could not connect to backend.'));
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Travel Agency</h1>
      </header>
      <main>
        <section>
          <h2>Welcome to Our Travel Agency</h2>
          <p>Explore the world with us!</p>
          <div style={{marginTop: '18px', fontWeight: 'bold', color: '#36d1c4'}}>
            Backend says: {apiMessage}
          </div>
        </section>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Flight Booking</li>
            <li>Hotel Reservations</li>
            <li>Car Rentals</li>
            <li>Travel Insurance</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;