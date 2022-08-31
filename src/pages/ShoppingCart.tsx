import { NavLink } from "react-router-dom";

function ShoppingCart() {
  return (
    <main style={{ top: "444px", background: "lightblue" }}>
      <p>shoppingcart test</p>
      <NavLink to="/checkout">
        <button>Checkout</button>
      </NavLink>
    </main>
  );
}

export default ShoppingCart;
