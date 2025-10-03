import { useState } from 'react';
import { initialContacts } from './Data/contacts';

export default function AddContact() {
  const [contacts, setContacts] = useState(initialContacts);
  const [title, setTitle] = useState("");

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

    if (title.trim() !== "") {
      const newContactItem = {
        title: title,
        created_at: new Date().toISOString()
      };

      const contactFromServer = await createContact(newContactItem);

      // Update state
      setContacts([...contacts, contactFromServer]);
      setTitle(""); // clear input
    } else {
      alert("Du skal da udfylde først for søren da");
    }
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <>
      <h2>Add new contact</h2>
      <form onSubmit={addContact}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={handleTitleChange}
        />
        <button type="submit">Add contact</button>
      </form>

      <h3>Current contacts:</h3>
      <ul>
        {contacts?.map((c, i) => (
          <li key={i}>{c.title}</li>
        ))}
      </ul>
    </>
  );
}
