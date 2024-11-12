import { useCartContext } from "../hooks/useCartContext";

export default function CartTracker() {
  const { cart } = useCartContext();
  return (
    <div className="cart-tracker">
      <div className="tracker-price">
        <div className="items-number">{cart.count}</div>
        <div className="view-btn">View cart</div>
        <div className="subtotal">AED {cart.price}</div>
      </div>
      <div className="tracker-tax">
        Prices are in AED and are inclusive of 10% service charges, 5% VAT & 7%
        Municipality fee.
      </div>
    </div>
  );
}
