import React from "react";
import ContactItem from "./ContactItem";

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
