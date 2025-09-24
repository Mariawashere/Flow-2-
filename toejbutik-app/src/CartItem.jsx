function CartItem({ item, removeFromCart }) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {item.brand} - {item.model}
        <span className="badge bg-secondary">{item.price} kr.</span>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => removeFromCart(item.id)}>

          Remove
        
        </button>
      </li>
    );
  }
  
  export default CartItem;