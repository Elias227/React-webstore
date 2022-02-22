import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from '../../reducer';

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <h1>Subtotal</h1>

      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{` ${value} `}</strong>
            </p>
          </>
        )}

        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"€"}
      />

      <button>Checkout</button>
    </div>
  )
}

export default Subtotal