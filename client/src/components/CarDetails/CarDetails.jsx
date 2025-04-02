import React from 'react';
import { Car, DollarSign, Calendar, Activity, Fuel, Users, Check } from 'lucide-react';
import styles from './CarDetails.module.css';

const CarDetailsCard = ({ car = {
  id: 'car123',
  title: '2023 Toyota Camry XSE',
  price: 32999,
  year: 2023,
  mileage: 12450,
  fuelType: 'Hybrid',
  transmission: 'Automatic',
  seats: 5,
  color: 'Midnight Black',
  features: ['Leather Seats', 'Navigation', 'Backup Camera', 'Bluetooth', 'Sunroof'],
  imageUrl: '/api/placeholder/600/400',
  status: 'Available'
}}) => {
  return (
    <div className={styles.card}>
      {/* Car Image */}
      <div className={styles.imageContainer}>
        <img 
          src={car.imageUrl} 
          alt={car.title} 
          className={styles.image} 
        />
        <div className={styles.statusBadge}>
          {car.status}
        </div>
      </div>
      
      {/* Car Info */}
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{car.title}</h2>
        <div className={styles.price}>
          ${car.price.toLocaleString()}
        </div>
        
        {/* Specs Grid */}
        <div className={styles.specsGrid}>
          <div className={styles.specItem}>
            <Calendar className={styles.icon} />
            <span className={styles.specText}>{car.year}</span>
          </div>
          <div className={styles.specItem}>
            <Activity className={styles.icon} />
            <span className={styles.specText}>{car.mileage.toLocaleString()} miles</span>
          </div>
          <div className={styles.specItem}>
            <Fuel className={styles.icon} />
            <span className={styles.specText}>{car.fuelType}</span>
          </div>
          <div className={styles.specItem}>
            <Car className={styles.icon} />
            <span className={styles.specText}>{car.transmission}</span>
          </div>
          <div className={styles.specItem}>
            <Users className={styles.icon} />
            <span className={styles.specText}>{car.seats} seats</span>
          </div>
          <div className={styles.specItem}>
            <div className={styles.colorDot} style={{ backgroundColor: car.color === 'Midnight Black' ? '#333' : car.color }}></div>
            <span className={styles.specText}>{car.color}</span>
          </div>
        </div>
        
        {/* Features */}
        <div className={styles.featuresContainer}>
          <h3 className={styles.featuresTitle}>Features</h3>
          <div className={styles.featuresGrid}>
            {car.features.slice(0, 6).map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <Check className={styles.checkIcon} />
                {feature}
              </div>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}>
            View Details
          </button>
          <button className={styles.secondaryButton}>
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsCard;