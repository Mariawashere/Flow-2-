import logo from './logo.svg';
import './App.css';
import { Data } from "./Data";

function App() {
  // Vi 'leger' at vi har hentet disse data fra serveren og databasen.
  const items = [
        new Data(1, 'mærke', 'xs', '150', 'red', 'desc'),
        new Data(2, 'mærke2', 's', '175', 'pink', 'desc'),
    ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ItemList dataItems={items}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
