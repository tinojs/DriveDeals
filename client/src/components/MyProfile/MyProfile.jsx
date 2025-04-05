import React, { useContext } from 'react';

import AuthContext from '../../contexts/authContext';

import './MyProfile.css';

const MyProfile = () => {
  const { firstName, lastName, email, phoneNumber } = useContext(AuthContext);

  return (
    <div className="profile-container">
      <div className="profile-content">

        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="profile-details">
            <div className="profile-field">
              <label>First Name</label>
              <p>{firstName}</p>
            </div>
            <div className="profile-field">
              <label>Last Name</label>
              <p>{lastName}</p>
            </div>
            <div className="profile-field">
              <label>Email</label>
              <p>{email}</p>
            </div>
            <div className="profile-field">
              <label>Phone</label>
              <p>{phoneNumber}</p>
            </div>

            <button
              className="edit-profile-btn"
            >
              Edit Profile
            </button>
          </div>
        </div>



      </div>
    </div>
  );
};

export default MyProfile;