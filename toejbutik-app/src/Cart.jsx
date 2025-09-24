import CartItem from "./CartItem";

function Cart({ cart, removeFromCart }) {
  if (cart.length === 0) {
    return <p>The cart is empty.</p>;
  }

  return (
    <ul className="list-group">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </ul>
  );
}

export default Cart;