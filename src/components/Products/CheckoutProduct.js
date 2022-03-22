import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log(id, title, image, price);

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct__parent">
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="product" />

        <div className="checkoutProduct__info">
          <div className="cp__title-and-price">
            <h2 className="cp-title">{title}</h2>
            <strong className="cp-price">{price}€</strong>
          </div>

          <button onClick={removeFromCart}>
            <img src="/images/icons8-trash.svg" alt="trash" />
          </button>
        </div>
      </div>

      <hr className="line" />
    </div>
  )
}

export default CheckoutProduct;
