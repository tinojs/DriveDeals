import React, { useContext, useEffect, useState } from 'react';
import './CarDetails.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as CarService from '../../services/CarService';
import AuthContext from '../../contexts/authContext';

const CarDetails = () => {

  const navigate = useNavigate();

  const { userId } = useContext(AuthContext);
  const [car, setCar] = useState({});
  const { carId } = useParams();

  useEffect(() => {
    CarService.getOneCar(carId).then(setCar);

  }, [carId]);

  const isOwner = userId === car?._ownerId;

  const onBack = () => {
    navigate('/all-cars');
  }

  const onDelete = async () => {
    const confirmed = confirm('Are you sure you want to delete your listing?');

    if (confirmed) {
      await CarService.deleteCar(carId);
      navigate('/all-cars');
    }
  };

  return (
    <div className="car-details-container">
      <div className="car-details-card">
        <div className="car-details-header">
          <button className="back-button" onClick={onBack}>
            &larr; Back to All Cars
          </button>
          <h1 className="car-title">
            {car.year} {car.make} {car.model}
          </h1>
        </div>

        <div className="car-details-content">
          <div className="car-image-container">
            <img
              src={car.image}
              alt={`${car.year} ${car.make} ${car.model}`}
              className="car-detail-image"
            />
          </div>

          <div className="car-info">
            <div className="car-info-primary">
              <div className="car-price-tag">${car.price}</div>
              <div className="car-specs">
                <div className="car-spec">
                  <span className="spec-label">Year:</span>
                  <span className="spec-value">{car.year}</span>
                </div>
                <div className="car-spec">
                  <span className="spec-label">Make:</span>
                  <span className="spec-value">{car.make}</span>
                </div>
                <div className="car-spec">
                  <span className="spec-label">Model:</span>
                  <span className="spec-value">{car.model}</span>
                </div>
                <div className="car-spec">
                  <span className="spec-label">Color:</span>
                  <div className="color-display">
                    <span className="color-swatch" style={{ backgroundColor: car.color }}></span>
                    <span className="spec-value">{car.color}</span>
                  </div>
                </div>
                <div className="car-spec">
                  <span className="spec-label">Mileage:</span>
                  <span className="spec-value">{car.mileage} miles</span>
                </div>
              </div>
            </div>

            <div className="car-description">
              <h3>Description</h3>
              <p>{car.description}</p>
            </div>
            {isOwner && (
              <div className="car-actions">
                <button
                  className="edit-button"
                >
                  <Link to={`/cars/${carId}/edit`}>
                    Edit Details
                  </Link>
                </button>
                <button
                  className="delete-button"
                  onClick={onDelete}
                >
                  Delete Listing
                </button>
              </div>
            )}


          </div>
        </div>
        {!isOwner && (
          <div className="offer-section">
            <div className="offer-header">
              <h2>Do you like this car? Make an offer now!</h2>
              <p>Fill out the form below to submit your interest and we'll get back to you shortly.</p>
            </div>

            <form className="offer-form" >
              <div className="offer-form-group">
                <label htmlFor="phoneNumber">Your Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  // value={offerData.phoneNumber}
                  // onChange={handleOfferChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="offer-form-group">
                <label htmlFor="note">Your Offer/Note</label>
                <textarea
                  id="note"
                  name="note"
                  // value={offerData.note}
                  // onChange={handleOfferChange}
                  placeholder="I'm interested in this vehicle and would like to make an offer of $..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-offer-btn">
                Submit Offer
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;