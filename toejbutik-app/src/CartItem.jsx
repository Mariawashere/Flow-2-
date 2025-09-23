function CartItem({ item }) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {item.brand} - {item.model}
        <span className="badge bg-secondary">{item.price} kr.</span>
      </li>
    );
  }
  
  export default CartItem;