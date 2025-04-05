import { useNavigate, useParams } from 'react-router-dom';

import * as CarService from '../../services/CarService';
import * as useForm from '../../hooks/useForm';

import './CarEdit.css';
import { useEffect, useState } from 'react';

export default function EditCar() {

    const navigate = useNavigate();
    const { onChange } = useForm();

    const { carId } = useParams();
    const [car, setCar] = useState({
        make: '',
        model: '',
        year: 0,
        price: 0,
        color: '',
        image: '',
        mileage: 0,
        description: ''
    })

    useEffect(() => {
        CarService.getOneCar(carId).then((result) => {
            setCar(result);
        });
    }, [carId]);

    const editCarSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await CarService.editCar(carId, values);
            navigate('/all-cars');
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="car-listing-container">
            <div className="car-listing-header">
                <h2>Edit your listing</h2>
                <p>Make the changes needed on the form below to update your listing</p>
            </div>

            <form className="car-listing-form" onSubmit={editCarSubmitHandler}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="make">Make *</label>
                        <input
                            type="text"
                            id="make"
                            name="make"
                            value={car.make}
                            onChange={onChange}
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
                            value={car.model}
                            onChange={onChange}
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
                            value={car.year}
                            onChange={onChange}
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
                            value={car.price}
                            onChange={onChange}
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
                            value={car.color}
                            onChange={onChange}
                            placeholder="e.g. Silver"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image URL *</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={car.image}
                            onChange={onChange}
                            placeholder="e.g. https://..."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mileage">Mileage (miles) *</label>
                        <input
                            type="number"
                            id="mileage"
                            name="mileage"
                            value={car.mileage}
                            onChange={onChange}
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
                        value={car.description}
                        onChange={onChange}
                        placeholder="Add details about the condition, features, and history of your vehicle"
                        rows="4"
                    ></textarea>
                </div>


                <div className="form-actions">
                    <button type="submit" className="submit-button" disabled={false}>
                        Save changes
                    </button>
                </div>
            </form>
        </div>
    );
};

