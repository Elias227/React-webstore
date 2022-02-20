import React from 'react'
import "./Product.css";

function Product_Big({ title, description, image, price, rating }) {
  return <div className="product__big">
      <div className="product__image-container">
        <img src={image} alt="product-image" />
      </div>
      <div className="product__info">
        <h2 className="product__title">{title}</h2>
        <div className="price-and-rating">
          <p className="product__price">{price}€</p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <p className="product__description">{description}</p>
        <div className="product__button-container">
          <button className="product__button">Add to Cart</button>
        </div>
      </div>
    </div>;
}

export default Product_Big