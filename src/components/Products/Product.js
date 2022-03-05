import React from 'react';
import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
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
      <img src={image} alt="product" />  
    </div>
    <button className="product__button" onClick={addToCart}>Add to Cart</button>
  </div>;

}

export default Product;
