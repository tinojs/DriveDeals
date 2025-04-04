import React from 'react';
import SingleCar from './SingleCar';
import './AllCars.css';
import { useCar } from '../../hooks/useCar';

const initialCars = [];

const AllCars = () => {
  const { cars, onSubmit, onChange } = useCar(initialCars, () => { })

  return (
    <div className="cars-container">
      <div className="cars-header">
        <h2>Our Inventory</h2>
      </div>


      <div className="cars-grid">
        {cars.map(car => (
          <SingleCar key={car._id} data={car} />
        ))}

        {cars.length === 0 && (
          <div className="no-cars-message">
            <h3>No cars available at the moment.</h3>
          </div>
        )}
      </div>

    </div>
  );
};

export default AllCars;