import './App.css';
import {Contact} from "./contacts"; 
import ContactList from './ContactList';

function App() {
  const contacts = [
    new Contact ('Maria', 'Bakardzieva', 'mariabak2004@gmail.com', '+4578456723', 'Microsoft', 'front-end developer'), 
    new Contact ('Jasmin', 'Taher', 'jasmin0511@gmail.com', '+4567452311','Google', 'full-stack developer'), 
    new Contact ('Maria', 'Astrup', 'astrup56@gmail.com', '+4560556090', 'Samsung', 'web-developer'), 
    new Contact ('Victor', 'Jardim', 'victoriersej@gmail.com', '+4530603070', 'Arla', 'content-producer') 
  ];
  console.log(contacts);
  
  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="info-container">
        <div className="personer"><ContactList OurContacts={contacts}/></div>
       
        <div className="Kontatktinfo"><ContactList OurContacts={contacts}/></div>
      </div>
    </div>
  );
}

export default App;
