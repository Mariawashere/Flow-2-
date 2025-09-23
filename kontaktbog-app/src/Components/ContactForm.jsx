import React, { useEffect, useState } from "react";

/**
 * Vis en formular i en popup (modal) til enten at tilføje eller redigere en kontakt.
 *
 * Props:
 * - open: true/false → viser eller skjuler modal
 * - initial: kontakt der skal redigeres (hvis nogen), eller null hvis ny
 * - onCancel: funktion til at lukke modal uden at gemme
 * - onSave: funktion der kaldes med kontaktdata når der gemmes
 */

export default function ContactForm({ open, initial, onCancel, onSave }) {
   
  // State til at holde formularens felter
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    notes: "",
  });


   // Når modal åbnes, forudfyld med data (hvis vi redigerer)
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

  // Hvis modal ikke skal vises, returnér null (vis intet)
  if (!open) return null;


  // Hvis initial er sat → vi er i redigerings-mode
  const isEdit = Boolean(initial);

  // Opdater felterne når brugeren skriver i formularen
  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Når brugeren trykker på "Gem" knappen
  const submit = (e) => {

    e.preventDefault();       // Undgå at siden genindlæses

    // Enkel validering
    if (!form.name.trim()) return alert("Please enter a name.");
    if (!form.phone.trim()) return alert("Please enter a phone number.");


    // Byg kontaktobjekt:
    // - Hvis vi redigerer, behold samme ID
    // - Hvis vi tilføjer ny, lav nyt ID med Date.now()
    const payload = isEdit ? { ...initial, ...form } : { id: Date.now(), ...form };

    // Giv data til App-komponenten
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
