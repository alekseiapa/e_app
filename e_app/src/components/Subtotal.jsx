import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateProvider.js";
import { getCartTotal } from "../reducer.js";
import "./Subtotal.css";

export default function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} {`item${cart.length > 1 ? "s" : ""}`}):{" "}
              <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}
