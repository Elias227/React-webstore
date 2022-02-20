import React from 'react';
import "./Product.css";

function Product({ title, image, price, rating }) {
  return <div className="product">
    <div className="product__info">
      <h1>{title}</h1>
      <div className="product__price-and-rating">
        <p className="product__price">{price}€</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
          ))}
        </div>
      </div>
    </div>
    <div className="product__image-container">
      <img src={image} alt="product-image" />  
    </div>
    <button className="product__button">Add to Cart</button>
  </div>;
  










  
  // my version
  <div className="product">
    <div className="product__info">
      <h2 className="product__title">{title}</h2>
      <div className="product__price-and-rating">
        <p className="product__price">{price}€</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
    </div>
    
    <div className="product__image-container">
      <img src={image} alt="product-image" />
    </div>
    <div className="product__button-container">
      <button className="product__button">Add to Cart</button>
    </div>
  </div>;

}

export default Product;
