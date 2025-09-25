// CartItem-component viser en enkel vare i cart
// Den modtager et item-objekt og removeFromCart funktionen fra App.js
function CartItem({ item, removeFromCart }) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">

        {/* Viser produktets brand, model, og pris */}
        {item.brand} - {item.model}
        <span className="badge bg-secondary">{item.price} kr.</span>

        {/* Remove from cart knap */}
        <button
          className="btn btn-sm btn-danger"
          // Click kalder removeFromCart med item.id
          onClick={() => removeFromCart(item.id)}>

          Remove
        
        </button>
      </li>
    );
  }
  
  export default CartItem;