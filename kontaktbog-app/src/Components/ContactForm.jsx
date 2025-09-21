import React, { useEffect, useState } from "react";

export default function ContactForm({ open, initial, onCancel, onSave }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    notes: "",
  });

  useEffect(() => {
    if (open) {
      setForm(initial ?? {
        name: "",
        phone: "",
        email: "",
        company: "",
        notes: "",
      });
    }
  }, [open, initial]);

  if (!open) return null;

  const isEdit = Boolean(initial);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return alert("Please enter a name.");
    if (!form.phone.trim()) return alert("Please enter a phone number.");

    const payload = isEdit ? { ...initial, ...form } : { id: Date.now(), ...form };
    onSave(payload);
  };

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">{isEdit ? "Edit contact" : "Add new contact"}</div>
        <form className="modal-body" onSubmit={submit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={update} placeholder="Jane Doe" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" value={form.phone} onChange={update} placeholder="+45 12 34 56 78" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={form.email} onChange={update} placeholder="jane@example.com" />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" value={form.company} onChange={update} placeholder="Acme A/S" />
          </div>
          <div className="field">
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" name="notes" value={form.notes} onChange={update} placeholder="Anything helpful…" />
          </div>
        </form>
        <div className="modal-footer">
          <button className="button" onClick={onCancel}>Cancel</button>
          <button className="button primary" onClick={submit}>{isEdit ? "Save changes" : "Add contact"}</button>
        </div>
      </div>
    </div>
  );
}
