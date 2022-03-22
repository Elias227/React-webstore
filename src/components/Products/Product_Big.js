import React from 'react';
import "./Product_Big.css";
import { useStateValue } from "../../StateProvider";

function Product_Big({ id, title, description, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({ 
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  };

  return <div className="product__big">
      <div className="product__big-image-container">
        <img src={image} alt="product__big" />
      </div>
      <div className="product__big-info">
        <h1 className="product__big-title">{title}</h1>
        <div className="product__big-price-and-rating">
          <p className="product__big-price">{price}€</p>
          <div className="product__big-rating">
            {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
          </div>
        </div>
        <p className="product__big-description">{description}</p>
        <div className="product__big-button-container">
          <button className="product__big-button" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>;
}

export default Product_Big
