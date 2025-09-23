import React from "react";


/**
 * ContactItem viser én enkelt kontakt i venstre kolonne.
 *
 * Props:
 * - contact: objekt med info om kontakten (name, phone, osv.)
 * - selected: true hvis denne kontakt er den der er valgt lige nu
 * - onSelect: funktion der kaldes når brugeren klikker på denne kontakt
 */


export default function ContactItem({ contact, selected, onSelect }) {
  return (
    <div 
      // Dynamisk className: "row" + evt. "selected" hvis den er valgt
      className={`row ${selected ? "selected" : ""}`}
      
      // Når brugeren klikker, fortæller vi det til App-komponenten via onSelect
      onClick={() => onSelect(contact.id)}
      
      // Tilgængelighed: skærmlæsere forstår at dette opfører sig som en knap
      role="button"
      aria-pressed={selected}
    >
      <div className="name">{contact.name}</div>
      <div className="meta">{contact.phone}</div>
    </div>
  );
}
