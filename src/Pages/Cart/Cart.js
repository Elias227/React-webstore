import React from 'react';
import "./Cart.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../../components/Products/CheckoutProduct";

function Cart() {
  const [{ cart }] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__left">
        {cart?.length === 0 ? (
          <div>
            <h3>Your Cart is Empty</h3>
            <p>You haven't added any products to cart. Find products, click "Add to Cart". You will find them here</p>
          </div>
        ) : (
          <div>
            <h3>Your Shopping Cart (3)</h3>

            {cart?.map((item) => (
                <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}  
                />
              ))}
          </div>
        )}
      </div>
      {cart.lenght > 0 && (
        <div className="cart__right">
          <h1>Subtotal</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente quidem debitis minima nobis voluptatibus expedita, perspiciatis eos aperiam fuga temporibus quaerat eveniet. Sunt sint temporibus architecto veniam modi quo!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero non odio doloremque sapiente nihil suscipit omnis ipsa illo dolore tempora fugiat mollitia voluptatibus odit consequuntur facilis, tempore ex harum.
          </p>
          {/* <SubTotal /> */}
        </div>
      )}
    </div>
  );
}

export default Cart
