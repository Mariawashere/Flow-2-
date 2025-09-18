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
        
        
      </header>
      <div className='ItemList'>
          <div className='produkter'><ItemList dataItems={items}/></div>   
          <div className='bluser'><ItemList dataItems={items}/></div>
          <div className='bukser'><ItemList dataItems={items}/></div>
          <div className='t-shirts'><ItemList dataItems={items}/></div>
          <div className='hoodies'><ItemList dataItems={items}/></div>
          <div className='jakker'><ItemList dataItems={items}/></div>
          <div className='tilbehør'><ItemList dataItems={items}/></div>

      </div>

    </div>
  );
}

export default App;
