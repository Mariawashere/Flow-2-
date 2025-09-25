import React from "react";                                            // Importerer React

// Lille hjælpefunktion til at danne et avatar-bogstav fra brugernavn
function getAvatarLetter(username = "") {                             // Får username som tekst
  const clean = username.replace(/^@/, "");                           // Fjerner @ i starten hvis den findes
  return clean.charAt(0).toUpperCase() || "?";                        // Tager første bogstav og gør det stort, ellers "?"
}

export default function PipItem({ pip }) {                            // Modtager et "pip"-objekt som prop
  const { username, pip: text, created_at } = pip;                    // "Destructurer" felterne for nem adgang
  const letter = getAvatarLetter(username);                           // Finder avatar-bogstavet
  const when = created_at                                             // Viser pæn tid hvis tilstede
    ? new Date(created_at).toLocaleString("da-DK")                    // Forsøger at formatere ISO tid til dansk
    : "";                                                             // Ellers tom tekst

  return (                                                            // Returnerer UI for én pip
    <article
      style={{
        display: "grid", gridTemplateColumns: "48px 1fr", gap: 12,
        padding: 12, border: "1px solid #e5e7eb", borderRadius: 12
      }}
      aria-label={`Pip fra ${username}`}
    >
      {/* Avatar-cirkel med første bogstav */}
      <div className="avatar">
       {letter}
      </div>


      {/* Tekstdel: navn, tidspunkt og besked */}
      <div>
        <div className="pip-meta">                           {/* Meta-linje: navn + tid */}
          <strong>{username}</strong>                        {/* Brugernavn i fed */}
          {when && (
            <time className="time" dateTime={created_at}>   {/* Tid i grå, lille tekst */}
              {when}
            </time>
          )}
        </div>
        <p className="pip-text">{text}</p>                   {/* Selve beskeden */}
      </div>

    </article>
  );
}
