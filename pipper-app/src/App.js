import React, { useRef, useState, useEffect } from "react"; // Importerer React + hooks (useState til data, useEffect til ESC, useRef til fokus-retur)
import "./index.css";                                      // Importerer global CSS (lad den være som den er)
import "./Styles/App.css";                                 // Importerer din hoved-CSS til layout/modal mv.
import { initialUsers } from "./User/users";               // Importerer startdata til feedet (din users.js)
import ShowPip from "./Components/ShowPip";                // Importerer komponenten der viser listen af pips
import MakePip from "./Components/MakePip";                // Importerer formular-komponenten til at lave en ny pip

export default function App() {                            // Standard-eksporterer App-komponenten
  const [pips, setPips] = useState(initialUsers);          // Opretter state "pips" med startværdi fra initialUsers
  const [isModalOpen, setIsModalOpen] = useState(false);   // Styrer om modal-vinduet er åbent (true/false)
  const openBtnRef = useRef(null);                         // Ref til "Åbn modal"-knappen (så vi kan give fokus tilbage ved luk)

  // Lytter efter ESC-tasten for at kunne lukke modal’en hurtigt
  useEffect(() => {                                        // Kører når isModalOpen ændrer værdi
    function onKeyDown(e) {                                // Funktion der håndterer tastetryk
      if (e.key === "Escape") setIsModalOpen(false);       // Hvis brugeren trykker ESC → luk modal
    }
    if (isModalOpen) {                                     // Kun lyt når modal er åben
      document.addEventListener("keydown", onKeyDown);     // Tilføj global lytter
    }
    return () => document.removeEventListener("keydown", onKeyDown); // Ryd op i lytteren
  }, [isModalOpen]);                                       // Afhænger af om modal er åben

  // Funktion der kaldes når formularen sender en ny pip
  const handleAddPip = ({ username, pip }) => {            // Modtager et objekt med username og pip-tekst
    // Her laver vi et "nyt pip"-objekt. I en rigtig app ville id og tidspunkt komme fra serveren.
    const newPip = {
      id: Date.now(),                                      // Simpelt unikt id (tidsstempel) – fint til demo
      username,                                            // Brugernavn fra formularen
      pip,                                                 // Selve pip-beskeden fra formularen
      created_at: new Date().toISOString(),                // ISO-tidsstempel – robust og nemt at formatere
    };

    // Opdaterer listen med den nye pip øverst (immutabel opdatering)
    setPips((prev) => [newPip, ...prev]);                  // Laver en ny array: ny pip først, derefter de gamle

    // Luk modal efter succes og giv fokus tilbage til knappen (tilgængelighed)
    setIsModalOpen(false);                                 // Luk modal
    setTimeout(() => openBtnRef.current?.focus(), 0);      // Returnér fokus til "Åbn modal"-knappen
  };

  return (                                                 // Returnerer App’ens UI
    <div className="app-shell">{/* Ydre wrapper med max-width/padding styret i CSS */}
      {/* Knap der åbner modal’en */}
      <button
        ref={openBtnRef}                                   // Gemmer reference til knappen
        className="open-modal-btn"                         // Styling i App.css
        onClick={() => setIsModalOpen(true)}               // Åbner modal ved klik
        aria-haspopup="dialog"                             // Tilgængelighed: denne knap åbner et dialogvindue
        aria-expanded={isModalOpen}                        // Fortæller skærmlæser om modal-tilstand
      >
        Skriv en pip
      </button>

      {/* Feedet der viser alle pips */}
      <ShowPip pips={pips} />                              {/* Giver feedet pips-listen som prop */}

      {/* Modal: overlay + dialog-boks (kun når isModalOpen = true) */}
      {isModalOpen && (                                    // Betinget rendering: vis kun modal når åben
        <div
          className="modal-backdrop"                       // Mørk baggrund der dækker hele skærmen
          onClick={(e) => {
            if (e.target === e.currentTarget) {            // Klikker man på selve baggrunden (ikke selve boksen)…
              setIsModalOpen(false);                       // …så lukker vi modal (klassisk UX)
            }
          }}
        >
          <div
            className="modal"                              // Selve dialogboksen (centreret kort)
            role="dialog"                                  // ARIA: dette element er en dialog
            aria-modal="true"                              // ARIA: dialogen er modal (låser baggrunden)
            aria-labelledby="makepip-title"                // Kobler titel-elementet som label
          >
            <div className="modal-header">                 {/* Toplinje i modal med titel + luk-knap */}
              <h2 id="makepip-title">Opret ny pip</h2>     {/* Titel på dialogen */}
              <button
                className="modal-close"                    // Lille kryds-knap
                onClick={() => setIsModalOpen(false)}      // Lukker modal ved klik
                aria-label="Luk"                           // ARIA label til skærmlæsere
              >
                ×
              </button>
            </div>

            {/* Formularen inde i modal’en */}
            <MakePip onAddPip={handleAddPip} />           {/* Giver formularen en prop der peger på handleAddPip */}
          </div>
        </div>
      )}
    </div>
  );
}
