import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(id, title, image, price);

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <h2>{title}</h2>

        <p className="checkoutProduct__price">{price}€</p>

        <button onClick={removeFromCart}>remove</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
