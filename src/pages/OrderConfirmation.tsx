import { useCart } from "../contexts/CartContext";

function OrderConfirmation() {
  const { cart } = useCart();

  return (
    <main>
      <h2>OrderConfirmation</h2>
      <h3>Show order details and user data here</h3>
    </main>
  );
}

export default OrderConfirmation;
