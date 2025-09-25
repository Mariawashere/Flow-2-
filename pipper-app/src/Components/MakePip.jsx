import React, { useState } from "react";                        // Importerer React og useState til formular-tilstand

export default function MakePip({ onAddPip }) {                 // Modtager en prop-funktion som kaldes ved submit
  const [username, setUsername] = useState("@victor123");       // Kontrolleret felt: brugernavn, med en startværdi
  const [text, setText] = useState("");                         // Kontrolleret felt: pip-tekst, tom fra start
  const maxUser = 30;                                           // Maks længde for brugernavn (matcher original krav) 
  const maxText = 255;                                          // Maks længde for besked (matcher original krav)

  const isUserValid = username.length > 0 && username.length <= maxUser; // Simpel validering for brugernavn
  const isTextValid = text.length > 0 && text.length <= maxText;         // Simpel validering for tekst
  const canSubmit = isUserValid && isTextValid;                 // Kun hvis begge felter er gyldige

  const handleSubmit = (e) => {                                 // Håndterer submit for formularen
    e.preventDefault();                                         // Forhindrer browserens standard side-refresh
    if (!canSubmit) return;                                     // Stopper hvis felter ikke er gyldige

    // Kalder callback fra App med de nødvendige data
    onAddPip({ username, pip: text });                          // Sender data op til App (løfter state op)

    setText("");                                                // Nulstiller tekstfeltet efter succes
  };

  return (                                                      // Returnerer UI for formularen
    <form onSubmit={handleSubmit} style={{ marginBottom: 16, display: "grid", gap: 8 }}>
      <label>
        {/* Label og input for brugernavn */}
        Brugernavn (max {maxUser} tegn)
        <input
          type="text"                                           // Tekstfelt
          value={username}                                      // Kontrolleret: værdien styres af state
          onChange={(e) => setUsername(e.target.value)}         // Opdaterer state når man skriver
          maxLength={maxUser}                                   // HTML-begrænsning af længde
          required                                              // Gør feltet påkrævet
          style={{ width: "100%", padding: 8, marginTop: 4 }}
        />
      </label>

      <label>
        {/* Label og textarea for pip-tekst */}
        Din pip (max {maxText} tegn)
        <textarea
          value={text}                                          // Kontrolleret: værdien styres af state
          onChange={(e) => setText(e.target.value)}             // Opdaterer state når man skriver
          maxLength={maxText}                                   // HTML-begrænsning af længde
          required                                              // Gør feltet påkrævet
          rows={4}                                              // Giver lidt højde
          style={{ width: "100%", padding: 8, marginTop: 4, resize: "vertical" }}
        />
      </label>

      {/* Lille tæller og fejlindikatorer */}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6b7280" }}>
        <span>{username.length}/{maxUser}</span>                 {/* Viser hvor mange tegn i brugernavn */}
        <span>{text.length}/{maxText}</span>                     {/* Viser hvor mange tegn i tekst */}
      </div>

      {/* Submit-knap deaktiveres hvis formularen ikke er gyldig */}
      <button type="submit" disabled={!canSubmit} style={{ padding: "8px 12px", borderRadius: 8 }}>
        Opret pip
      </button>
    </form>
  );
}
