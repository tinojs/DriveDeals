import React, { useState } from 'react';
import './MyProfile.css';

const MyProfile = () => {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '(555) 123-4567',
  });
  
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


      </div>
    </div>
  );
};

export default MyProfile;