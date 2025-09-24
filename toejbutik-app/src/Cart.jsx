import CartItem from "./CartItem";

// Cart-component viser indkøbskurven
// Det modtager cart (items i x) og removeFromCart (funktion til at fjerne items) som props
function Cart({ cart, removeFromCart }) {
  // Hvis cart er tom, vis tekst
  if (cart.length === 0) {
    return <p>The cart is empty.</p>;
  }

  // Beregn totalpris og converts item.price string til numbers
  // Reduce: JavaScript-metode, der går igennem et array og bygger en enkelt værdi ud fra det
  // Reduce går gennem alle items i cart og lægger deres pris sammen
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div>
        {/* Liste over alle varer i kurven */}
        <ul className="list-group">
            {cart.map((item) => (
            // Hver item vises med CartItem-component
            // item sendes som prop, sammen med funktionen removeFromCart
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