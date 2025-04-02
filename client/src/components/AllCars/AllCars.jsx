import React from 'react';
import SingleCar from './SingleCar';
import './AllCars.css';
import { useCar } from '../../hooks/useCar';

const initialCars = [
  {
    _id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 25999,
    color: 'Silver',
    mileage: 15420,
    image: 'https://i.pinimg.com/736x/62/c2/b9/62c2b90151eb4345b23a159d052ff96e.jpg'
  },
];

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
      </div>

    </div>
  );
};

export default AllCars;