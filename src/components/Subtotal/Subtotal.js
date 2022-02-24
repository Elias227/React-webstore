import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from '../../reducer';

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <h3 className="subtotal__text">
              Subtotal ({cart.length} items): {`${value}`}
            </h3>
          </>
        )}

        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"€"}
      />

      <button className="subtotal__button">Checkout</button>
    </div>
  )
}

export default Subtotal
