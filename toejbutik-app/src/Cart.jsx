import CartItem from "./CartItem";

function Cart({ cart, removeFromCart }) {
  if (cart.length === 0) {
    return <p>The cart is empty.</p>;
  }

  // Beregn totalpris og converts item.price string til numbers
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div>
        <ul className="list-group">
            {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
        </ul>
        {/* Totalpris og checkout knap */}
        <div className="d-flex justify-content-between align-items-center">
            <h5>Total: {totalPrice} kr.</h5>
            <button className="btn btn-success">Checkout</button>
        </div>
    </div>
    
  );
}

export default Cart;