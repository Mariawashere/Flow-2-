import './App.css';
import Data from "./data";
import ItemList from './ItemList';
import { useState } from "react";
import Cart from "./Cart";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.
  const items = [
        new Data(1, 'Gentlewoman', 'high waisted bukser', 'xs', '150', 'hvid', 'Elegant and minimalistic'),
        new Data(2, 'Gentlewoman', 'kjole', 's', '175', 'blå', 'Soft and feminine'),
        new Data(3, 'Gentlewoman', 'open back top', 'm', '200', 'sort', 'Casual and comfortable'),
        new Data(4, 'Gentlewoman', 'hvidt top & bottom sæt', 'm', '375', 'hvid', 'Chic and trendy'),
        new Data(5, 'Gentlewoman', 'full body suit', 'l', '300', 'hvid', 'Modern and soft'),
        new Data(6, 'Gentlewoman', '3-piece set', 's', '420', 'creme', 'Soft and comfortable'), 
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
