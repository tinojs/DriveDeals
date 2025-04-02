import React, { useState } from 'react';
import './MyProfile.css';

const MyProfile = () => {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Cityville, ST 12345'
  });

  const [myAds, setMyAds] = useState([
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2018,
      price: 15000,
      status: 'Active',
      image: '/api/placeholder/200/150'
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      price: 17500,
      status: 'Pending',
      image: '/api/placeholder/200/150'
    }
  ]);

  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // In a real app, you'd send this to your backend
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <div 
          className={`sidebar-item ${activeSection === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveSection('profile')}
        >
          Personal Information
        </div>
        <div 
          className={`sidebar-item ${activeSection === 'myAds' ? 'active' : ''}`}
          onClick={() => setActiveSection('myAds')}
        >
          My Ads
        </div>
      </div>

      <div className="profile-content">
        {activeSection === 'profile' && (
          <div className="profile-section">
            <h2>Personal Information</h2>
            {!isEditing ? (
              <div className="profile-details">
                <div className="profile-field">
                  <label>First Name</label>
                  <p>{user.firstName}</p>
                </div>
                <div className="profile-field">
                  <label>Last Name</label>
                  <p>{user.lastName}</p>
                </div>
                <div className="profile-field">
                  <label>Email</label>
                  <p>{user.email}</p>
                </div>
                <div className="profile-field">
                  <label>Phone</label>
                  <p>{user.phone}</p>
                </div>
                <div className="profile-field">
                  <label>Address</label>
                  <p>{user.address}</p>
                </div>
                <button 
                  className="edit-profile-btn" 
                  onClick={handleEdit}
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <div className="profile-edit">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-actions">
                  <button 
                    className="save-btn" 
                    onClick={handleSave}
                  >
                    Save Changes
                  </button>
                  <button 
                    className="cancel-btn" 
                    onClick={handleEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeSection === 'myAds' && (
          <div className="my-ads-section">
            <h2>My Ads</h2>
            {myAds.length === 0 ? (
              <p>You haven't listed any cars yet.</p>
            ) : (
              <div className="ads-grid">
                {myAds.map((ad) => (
                  <div key={ad.id} className="ad-card">
                    <img src={ad.image} alt={`${ad.make} ${ad.model}`} />
                    <div className="ad-details">
                      <h3>{ad.make} {ad.model}</h3>
                      <p>Year: {ad.year}</p>
                      <p>Price: ${ad.price.toLocaleString()}</p>
                      <span className={`status ${ad.status.toLowerCase()}`}>
                        {ad.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;