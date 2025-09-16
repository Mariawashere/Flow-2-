import logo from './logo.svg';
import './App.css';
import {Contacts} from "./contacts"; 
import ContactList from './ContactList';

function App() {
  const contacts = [
    new Contact ('Maria Bakardzieva', 'mariabak2004@gmail.com', '+4578456723', 'Microsoft', 'front-end developer'), 
    new Contact ('Jasmin Taher', 'jasmin0511@gmail.com', '+4567452311','Google', 'full-stack developer'), 
    new Contact ('Maria Astrup', 'astrup56@gmail.com', '+4560556090', 'Samsung', 'web-developer'), 
    new Contact ('Victor Jardim', 'victoriersej@gmail.com', '+4530603070', 'Arla', 'content-producer') 
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ContactList ContactItem = {contacts}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
