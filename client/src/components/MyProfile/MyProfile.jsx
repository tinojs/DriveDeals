import React, { useContext, useEffect, useState } from 'react';

import * as UserService from '../../services/UserService';
import AuthContext from '../../contexts/authContext';

import './MyProfile.css';


const MyProfile = () => {

  const { userId } = useContext(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    UserService.getUser(userId).then(setUser)
  }, [userId]);


  return (
    <div className="profile-container">
      <div className="profile-content">

        <div className="profile-section">
          <h2>Personal Information</h2>
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