import logo from './logo.svg';
import './App.css';
import { Data } from "./data";
import ItemList from './ItemList';

function App() {
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.
  const items = [
        new Data(1, 'mærke', 'model', 'xs', '150', 'red', 'desc'),
        new Data(2, 'mærke2', 'model2', 's', '175', 'pink', 'desc'),
    ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <ItemList dataItems={items}/>
      </header>
    </div>
  );
}

export default App;
