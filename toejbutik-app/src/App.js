import './App.css';
import Data from "./data";
import ItemList from './ItemList';
import { useState } from "react";
import Cart from "./Cart";

function App() {
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.
  const items = [
        new Data(1, 'Gentlewoman', 'model1', 'xs', '150', 'red', 'Elegant and minimalistic'),
        new Data(2, 'Gentlewoman', 'model2', 's', '175', 'pink', 'Soft and feminine'),
    ]

    const [availableClothes, setAvailableClothes] = useState(items);
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
      const item = availableClothes.find((c) => c.id === id);
      if (!item) return;

      setAvailableClothes(availableClothes.filter((c) => c.id !== id));
      setCart([...cart, item]);
    };

    const removeFromCart = (id) => {
      const item = cart.find((c) => c.id === id);
      if (!item) return;
  
      setCart(cart.filter((c) => c.id !== id));
      setAvailableClothes([...availableClothes, item]);
    };

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <ItemList clothes={availableClothes} addToCart={addToCart} />
          </div>
          <div className="col-md-4">
            <h2>Cart</h2>
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </div>
        </div>
      </div>
    );
}

export default App;
