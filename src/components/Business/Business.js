import React from 'react';
import './Business.css';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

class Business extends React.Component {
  render () {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.property.imageSrc} alt={this.property.business.name}/>
        </div>
        <h2>{this.property.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.property.business.address}</p>
            <p>{this.property.business.city}</p>
            <p>{this.property.business.state}, {this.property.business.zipcode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.property.business.category}</h3>
            <h3 className="rating">{this.property.business.rating} stars</h3>
            <p>{this.property.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
