import React from "react";

/**
 * Viser information om den valgte kontakt i højre kolonne.
 *
 * Props:
 * - contact: objekt med data om den valgte kontakt, eller null hvis ingen valgt
 * - onEdit: funktion der kalder App's openEdit() (åbner modal med forudfyldt data)
 * - onDelete: funktion der kalder App's handleDelete() (fjerner kontakt)
 */

export default function ContactDetails({ contact, onEdit, onDelete }) {

  // Hvis der ikke er nogen valgt kontakt → vis info-tekst
  if (!contact) {
    return (
      <div className="section">
        <p>Select a contact from the left to see details.</p>
      </div>
    );
  }

  // Hvis der ER en kontakt valgt → vis alle felter
  return (
    <div className="section details">
      <div>
        <div className="label">Name</div>
        <div className="value">{contact.name}</div>
      </div>
      <div>
        <div className="label">Phone</div>
        <div className="value">{contact.phone}</div>
      </div>
      <div>
        <div className="label">Email</div>
        <div className="value">{contact.email}</div>
      </div>
      <div>
        <div className="label">Company</div>
        <div className="value">{contact.company}</div>
      </div>
      <div>
        <div className="label">Notes</div>
        <div className="value">{contact.notes || "—"}</div>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        <button className="button" onClick={() => onEdit(contact)}>Edit</button>
        <button className="button danger" onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
}
