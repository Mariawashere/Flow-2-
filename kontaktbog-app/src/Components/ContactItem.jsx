import React from "react";

export default function ContactItem({ contact, selected, onSelect }) {
  return (
    <div
      className={`row ${selected ? "selected" : ""}`}
      onClick={() => onSelect(contact.id)}
      role="button"
      aria-pressed={selected}
    >
      <div className="name">{contact.name}</div>
      <div className="meta">{contact.phone}</div>
    </div>
  );
}
