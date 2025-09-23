import React from "react";
import ContactItem from "./ContactItem";


/**
 * Denne komponent viser hele listen af kontakter i venstre kolonne.
 * 
 * Props (data der kommer fra App-komponenten):
 * - contacts: en array af kontaktobjekter
 * - selectedId: id'et på den kontakt der er valgt lige nu
 * - onSelect: funktion der kaldes når brugeren klikker på en kontakt
 */

export default function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <div className="section">
      <div className="list">
        {contacts.map((c) => (
          <ContactItem
            key={c.id}
            contact={c}
            selected={c.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
