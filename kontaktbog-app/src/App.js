import React, { useMemo, useState } from "react";
import { initialContacts } from "./Data/contacts";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";
import ContactForm from "./Components/ContactForm";
import useToggle from "./Hooks/useToggle"; // ✅ new import

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(contacts[0]?.id ?? null);

  const form = useToggle(false); // ✅ replaces [formOpen, setFormOpen]
  const [editing, setEditing] = useState(null);

  const selected = useMemo(
    () => contacts.find((c) => c.id === selectedId) || null,
    [contacts, selectedId]
  );

  const handleSelect = (id) => setSelectedId(id);

  const handleSave = (contact) => {
    setContacts((prev) => {
      const exists = prev.some((c) => c.id === contact.id);
      const next = exists
        ? prev.map((c) => (c.id === contact.id ? contact : c))
        : [...prev, contact];
      return next;
    });

    form.off();       // ✅ close modal
    setEditing(null); // ✅ reset form data
    setSelectedId(contact.id);
  };

  const handleDelete = (id) => {
    setContacts((prev) => {
      const next = prev.filter((c) => c.id !== id);
      if (id === selectedId) {
        setSelectedId(next[0]?.id ?? null);
      }
      return next;
    });
  };

  const openAdd = () => {
    setEditing(null);
    form.on(); // ✅ open modal
  };

  const openEdit = (contact) => {
    setEditing(contact);
    form.on(); // ✅ open modal
  };

  const closeForm = () => {
    form.off();       // ✅ close modal
    setEditing(null); // ✅ reset form state
  };

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
            <ContactList contacts={contacts} selectedId={selectedId} onSelect={handleSelect} />
          </section>

          <section className="kontaktinfo">
            <ContactDetails contact={selected} onEdit={openEdit} onDelete={handleDelete} />
          </section>
        </div>
      </div>

      <ContactForm
        open={form.value}         // ✅ controlled by useToggle
        initial={editing}
        onCancel={closeForm}
        onSave={handleSave}
      />
    </div>
  );
}
