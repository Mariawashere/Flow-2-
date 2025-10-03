import { useState } from 'react';
import { initialContacts } from './Data/contacts';


export default function AddContact({ setContacts, contacts }) {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState(""); 
    const [ phone, setPhone ] = useState("");
    const [ company, setCompany ] = useState("");
    const [ notes, setNotes ] = useState("")

  const createContact = async (contact) => {
    const url = 'https://jdfuskuvvrswqxjyhzyb.supabase.co/rest/v1/contacts';
    const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZnVza3V2dnJzd3F4anloenliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MTYxODYsImV4cCI6MjA3NDk5MjE4Nn0.Id8NLZXlNKW96d2D1esaIQYfotCyx0l0assQUqUYlOY';

    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': "application/json",
        'apikey': apikey,
        'Authorization': "Bearer " + apikey,
        'Prefer': 'return=representation'
      }
    }).then(response => response.json());

    console.log(result[0]);
    return result[0]; // returns the created contact from Supabase
  }

  async function addContact(e) {
    e.preventDefault();

    if (name !== "") {
      const newContactItem = new contacts(name, email, phone, company, notes);

        // kald supabase, gem ny todo
        const contactFromServer = await createContact(newContactItem);

      // Update state
      setContacts([...contacts, contactFromServer ]); //js spread operator
      }
      else {
        alert("Du skal da 'udfylde' først for 'søren' da")
      }
      // Tilføj newTodoItem til min todo list 
    }

    function handleInputChange(e) {
    //  console.log(e.target.value);
      setName(e.target.value);
      setEmail(e.target.value);
      setPhone(e.target.value);
      setCompany(e.target.value);
      setNotes(e.target.value);
    }


    return (
        <>
        <h2>Add new contact</h2>
        <form onSubmit={addContact}>
            {/* Opret med name="attributs navn" */}
           <input type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange}/>
           <input type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange}/>
           <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleInputChange}/>
           <input type="text" placeholder="Company" name="company" value={company} onChange={handleInputChange}/>
           <input type="text" placeholder="Notes" name="notes" value={notes} onChange={handleInputChange}/>

           <button type="submit">Add contact</button>
         </form>
         </>
    )
}
