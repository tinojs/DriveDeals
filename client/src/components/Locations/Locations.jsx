import './Locations.css';

import React, { useState } from 'react';

const Locations = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: 'Downtown Showroom',
      address: '123 Main Street, Cityville, ST 12345',
      phone: '(555) 123-4567',
      hours: 'Mon-Sat: 9am-7pm, Sun: 11am-5pm',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.982135348!2d-73.985!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzUyLjgiTiA3M8KwNTknMDYuMCJX!5e0!3m2!1sen!2sus!4v1234567890',
      coordinates: {
        lat: 40.748,
        lng: -73.985
      }
    },
    {
      id: 2,
      name: 'Westside Dealership',
      address: '456 Auto Lane, Cityville, ST 54321',
      phone: '(555) 987-6543',
      hours: 'Mon-Sat: 10am-6pm, Sun: 12pm-4pm',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5!2d-74.005!3d40.736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzA5LjYiTiA3NMKwMDAnMTguMCJX!5e0!3m2!1sen!2sus!4v1234567890',
      coordinates: {
        lat: 40.736,
        lng: -74.005
      }
    }
  ];

  const handleDirections = (location) => {
    const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`;
    window.open(googleMapsDirectionsUrl, '_blank');
  };

  return (
    <div className="locations-container">
      <div className="locations-header">
        <h1>Our Locations</h1>
        <p>Visit our showrooms and find your perfect vehicle</p>
      </div>

      <div className="locations-grid">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <div className="location-info">
              <h2>{location.name}</h2>
              <div className="location-details">
                <p><strong>Address:</strong> {location.address}</p>
                <p><strong>Phone:</strong> {location.phone}</p>
                <p><strong>Hours:</strong> {location.hours}</p>
              </div>
              <div className="location-actions">
                <button 
                  onClick={() => setActiveLocation(location.id)}
                  className="view-map-btn"
                >
                  View Map
                </button>
                <button 
                  onClick={() => handleDirections(location)}
                  className="get-directions-btn"
                >
                  Get Directions
                </button>
              </div>
            </div>

            {activeLocation === location.id && (
              <div className="location-map">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Map`}
                ></iframe>
                <button 
                  onClick={() => setActiveLocation(null)}
                  className="close-map-btn"
                >
                  Close Map
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;