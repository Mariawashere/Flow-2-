import React, { useMemo, useState } from "react";
import { initialContacts } from "./Data/contacts";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";
import ContactForm from "./Components/ContactForm";
import useToggle from "./Hooks/useToggle"; // ✅ new import

export default function App() {
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
  const selected = useMemo(
    () => contacts.find((c) => c.id === selectedId) || null,
    [contacts, selectedId]
  );

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
