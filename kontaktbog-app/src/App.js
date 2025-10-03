import React, { useMemo, useEffect, useState } from "react";
import { initialContacts } from "./Data/contacts";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";
import ContactForm from "./Components/ContactForm";
import useToggle from "./Hooks/useToggle"; // ✅ new import
import AddContact from "./AddContact";
import { createClient } from '@supabase/supabase-js'


// Opret forbindelse til Supabase
  const supabaseUrl = 'https://jdfuskuvvrswqxjyhzyb.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZnVza3V2dnJzd3F4anloenliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MTYxODYsImV4cCI6MjA3NDk5MjE4Nn0.Id8NLZXlNKW96d2D1esaIQYfotCyx0l0assQUqUYlOY'
  const supabase = createClient(supabaseUrl, supabaseKey)


  export default function App() {
  // Eksempel på at hente data fra Supabase (kan tilpasses efter behov)
  const getContacts = async () => {
    const url = 'https://jdfuskuvvrswqxjyhzyb.supabase.co/rest/v1';
    const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZnVza3V2dnJzd3F4anloenliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MTYxODYsImV4cCI6MjA3NDk5MjE4Nn0.Id8NLZXlNKW96d2D1esaIQYfotCyx0l0assQUqUYlOY';

    const data = await fetch(url + "/contacts", {
      headers: {
        apikey: apikey,
        Authorization: 'Bearer ' + apikey
      }
    }).then(response => response.json())


    setContacts(data);
    console.log(data);
  }

  useEffect(() => {
    getContacts();
  }, [])




  // Kontaktlisten gemmes i state (vi starter med initialContacts)
  const [contacts, setContacts] = useState(initialContacts);

  // ID på den kontakt som brugeren har valgt i venstre kolonne
  const [selectedId, setSelectedId] = useState(contacts[0]?.id ?? null);

  // Brug vores custom hook til at styre om formularen (modalen) er åben
  const form = useToggle(false);
  
  // Hvis vi redigerer en kontakt, gemmer vi kontaktens data her
  // Hvis vi tilføjer en ny kontakt, er den sat til null
  const [editing, setEditing] = useState(null);

  // Brug useMemo til at finde den valgte kontakt ud fra selectedId
  // Dette genberegnes kun når contacts eller selectedId ændres
  // const selected = useMemo(
  //   () => contacts?.find((c) => c.id === selectedId) || null,
  //   [contacts, selectedId]
  // );
  const selected={};

  // Når brugeren klikker på en kontakt i venstre side
  // Opdaterer vi hvilken kontakt der er valgt
  const handleSelect = (id) => setSelectedId(id);

  // Når brugeren gemmer (enten ny eller redigeret kontakt)
  const handleSave = (contact) => {
    setContacts((prev) => {
      const exists = prev.some((c) => c.id === contact.id);
      
      // Hvis kontakten allerede findes (edit), så opdater den
      // Hvis ikke, så tilføj som ny kontakt
      const next = exists
        ? prev.map((c) => (c.id === contact.id ? contact : c))
        : [...prev, contact];
      return next;
    });

    form.off();       
    setEditing(null); 
    setSelectedId(contact.id);
  };

  // Når brugeren sletter en kontakt
  const handleDelete = (id) => {
    setContacts((prev) => {
      const next = prev.filter((c) => c.id !== id);
      
       // Hvis den slettede kontakt var valgt, vælg en anden eller nulstil
      if (id === selectedId) {
        setSelectedId(next[0]?.id ?? null);
      }
      return next;
    });
  };

  // Åbn modal i "tilføj ny" tilstand (blank formular)
  const openAdd = () => {
    setEditing(null);
    form.on(); 
  };

  // Åbn modal i "rediger" tilstand (formular med forudfyldt data)
  const openEdit = (contact) => {
    setEditing(contact);
    form.on(); 
  };

  // Luk modal og ryd redigeringsdata
  const closeForm = () => {
    form.off();       
    setEditing(null);
  };

  // JSX layout: header + 2 kolonner + modal
  return (
    <div className="app-shell">
      <div className="app-card">
        <div className="app-header">
          <h1>Phonebook</h1>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="button" onClick={() => openEdit(selected)} disabled={!selected}>
              Edit
            </button>
            <button className="button primary" onClick={openAdd}>
              Add contact
            </button>
          </div>
        </div>

        <div className="app-body">
          <section className="personer">
            <ContactList 
              contacts={contacts}         // Alle kontakter
              selectedId={selectedId}     // ID på valgt kontakt
              onSelect={handleSelect}     // Funktion til at vælge ny kontakt
            />
          </section>

          <section className="kontaktinfo">
            <ContactDetails 
              contact={selected}          // Hele kontaktobjektet der vises i højre side
              onEdit={openEdit}           // Funktion til at åbne modal i redigeringsmode
              onDelete={handleDelete}     // Funktion til at slette kontakt
            />
          </section>
        </div>
      </div>

      <ContactForm
        open={form.value}        
        initial={editing}
        onCancel={closeForm}
        onSave={handleSave}
      />
    </div>
  );
}
