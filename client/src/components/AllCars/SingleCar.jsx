import React from 'react'
import { Link } from 'react-router-dom'

const SingleCar = ({
    data,
}) => {

    return (
        <div className="car-item">
            <div className="car-image">
                <img src={data.image} alt={`${data.make} ${data.model}`} />
            </div>
            <div className="car-info">
                <h3>{data.year} {data.make} {data.model}</h3>
                <div className="car-specs">
                    <span className="car-price">${data.price}</span>
                    <span className="car-mileage">{data.mileage} miles</span>
                </div>
                <p className="car-color">Color: {data.color}</p>
                <div className="car-actions">
                    <Link to={`/cars/${data._id}`} className="details-btn">View Details</Link>
                    <button className="contact-btn">Contact Seller</button>
                </div>
            </div>
        </div>
    )
}

export default SingleCar
