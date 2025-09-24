import './App.css';
import Data from "./data";
import ItemList from './ItemList';
import { useState } from "react";
import Cart from "./Cart";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen
  // Opret produkter som Data-objekter
  const items = [
        new Data(1, 'Gentlewoman', 'high waisted bukser', 'xs', '150', 'hvid', 'Elegant and minimalistic'),
        new Data(2, 'Gentlewoman', 'kjole', 's', '175', 'blå', 'Soft and feminine'),
        new Data(3, 'Gentlewoman', 'open back top', 'm', '200', 'sort', 'Casual and comfortable'),
        new Data(4, 'Gentlewoman', 'hvidt top & bottom sæt', 'm', '375', 'hvid', 'Chic and trendy'),
        new Data(5, 'Gentlewoman', 'full body suit', 'l', '300', 'hvid', 'Modern and soft'),
        new Data(6, 'Gentlewoman', '3-piece set', 's', '420', 'creme', 'Soft and comfortable'), 
    ]

    // State:items der er tilgængelige
    const [availableClothes, setAvailableClothes] = useState(items);
    // State: items der er lagt i cart
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
      // Finder produktet i listen af tilgængelige
      const item = availableClothes.find((product) => product.id === id);
      if (!item) return;

      // Fjerner produktet fra tilgængelige
      setAvailableClothes(availableClothes.filter((product) => product.id !== id));

      // Tilføjer produktet til cart
      setCart([...cart, item]);
    };



    const removeFromCart = (id) => {
    // Finder produktet i cart
    const item = cart.find((product) => product.id === id);
      if (!item) return;
  
      // Fjerner produktet fra cart
      setCart(cart.filter((product) => product.id !== id));
      // Lægger produktet tilbage i listen af tilgængelige
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
