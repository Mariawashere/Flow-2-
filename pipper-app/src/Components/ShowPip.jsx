import React from "react";                                      // Importerer React (kræves for JSX)
import PipItem from "./PipItem";                                // Importerer elementet for én enkelt pip

export default function ShowPip({ pips }) {                     // Modtager "pips" som prop fra App
  
  // Hvis der ingen pips er, vis en tom-tilstandstekst
  if (!pips || pips.length === 0) {                             // Tjekker om pips er tom eller ikke findes
    return <p>Der er ingen pips endnu. Skriv den første!</p>;   // Enkel besked til brugeren
  }

  return (                                                      // Hvis vi har pips, renderer vi listen
    <div style={{ display: "grid", gap: 12 }}>      {/* Simpel layout med afstand mellem elementer */}
      {/* 
        Her bruger vi .map:
        - .map går igennem hvert element i array'et "pips"
        - for hver "pip" returnerer vi en <PipItem /> komponent
        - "key" skal være unik pr. element (React bruger den til at optimere rendering)
      */}
      {pips.map((pipObj) => (                                   // Starter map over listen
        <PipItem key={pipObj.id} pip={pipObj} />                // For hvert element laver vi et PipItem og sender data i prop "pip"
      ))}
    </div>
  );
}
