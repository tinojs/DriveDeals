import './Welcome.css';

import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to DriveDeals</h1>
        <p className="welcome-subtitle">The place whe you can buy your next car or sell your old one.</p>
        <div className="welcome-cta">
          <Link to="/all-cars" className="browse-button">All cars available</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;