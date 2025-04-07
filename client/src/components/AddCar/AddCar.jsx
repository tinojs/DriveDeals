import './AddCar.css';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import * as CarService from '../../services/CarService';
import AuthContext from '../../contexts/authContext';


const AddCar = () => {

  const { phoneNumber } = useContext(AuthContext);
  console.log(phoneNumber);


  const navigate = useNavigate();

  const createCarSumbitHandler = async (e) => {
    e.preventDefault();

    let carData = Object.fromEntries(new FormData(e.currentTarget));
    carData = {
      ...carData,
      contactPhone: phoneNumber,
    }

    try {
      await CarService.createCar(carData);
      navigate('/all-cars');
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className="car-listing-container">
      <div className="car-listing-header">
        <h2>List Your Car For Sale</h2>
        <p>Complete the form below to add your vehicle to our marketplace</p>
      </div>

      <form className="car-listing-form" onSubmit={createCarSumbitHandler}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="make">Make *</label>
            <input
              type="text"
              id="make"
              name="make"
              placeholder="e.g. Toyota"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="model">Model *</label>
            <input
              type="text"
              id="model"
              name="model"
              placeholder="e.g. Camry"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="year">Year *</label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="e.g. 2018"
              min="1900"
              max={new Date().getFullYear()}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price ($) *</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="e.g. 15000"
              min="0"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="color">Color *</label>
            <input
              type="text"
              id="color"
              name="color"
              placeholder="e.g. Silver"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL *</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="e.g. https://..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="mileage">Mileage (miles) *</label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              placeholder="e.g. 45000"
              min="0"
              required
            />
          </div>
        </div>



        <div className="form-group full-width">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Add details about the condition, features, and history of your vehicle"
            rows="4"
          ></textarea>
        </div>


        <div className="form-actions">
          <button type="submit" className="submit-button" disabled={false}>
            List My Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;