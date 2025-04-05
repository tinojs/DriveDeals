import './MyProfile.css';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';
import Path from '../../paths';


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

            <Link to={Path.EditMyProfile} className="edit-profile-btn">
              Edit Profile
            </Link>
          </div>
        </div>



      </div>
    </div>
  );
};

export default MyProfile;