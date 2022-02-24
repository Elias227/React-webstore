import React from 'react';
import "./Cart.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../../components/Products/CheckoutProduct";
import SubTotal from "../../components/Subtotal/Subtotal";

function Cart() {
  const [{ cart }] = useStateValue();

  return (
      <div className="cart">
        <div className="cart__left">
          {cart?.length === 0 ? (
            <div className="cart__empty">
              <h3>Your Cart is Empty</h3>
              <p>You haven't added any products to cart. Find products, click "Add to Cart". You will find them here.</p>
            </div>
          ) : (
            <div>
              <h3 className="cart__your-shopping-cart">Your Shopping Cart ({cart.length})</h3>

              <div className="cart__products-text">
                <div class="cart-products">
                  <h4>Products</h4>
                </div>
                <div class="cart-price">
                  <h4>Price</h4>
                </div>
              </div>

              <hr className="cart__line" />
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
        {cart.length > 0 && (
          <div className="cart__right">
            <SubTotal />
          </div>
        )}
    </div>
  );
}

export default Cart;
