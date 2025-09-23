import { useCallback, useState } from "react";

/**
 * Denne hook giver dig en nem måde at styre en boolean (true/false) værdi.
 * Bruges fx til at åbne/lukke modaler, dropdowns eller skifte visning.
 *
 * Eksempel brug:
 * const form = useToggle(false);
 * form.on();     // sæt til true
 * form.off();    // sæt til false
 * form.toggle(); // skift mellem true og false
 * form.value     // læs den nuværende værdi
 */

export default function useToggle(initial = false) {
  // Boolean state: starter med initial (default = false)
  const [value, setValue] = useState(initial);
  
  // Funktion der sætter value til true
  const on = useCallback(() => setValue(true), []);
  
  // Funktion der sætter value til false
  const off = useCallback(() => setValue(false), []);
  
  // Funktion der skifter value mellem true og false
  const toggle = useCallback(() => setValue((v) => !v), []);

  // Returnér et objekt med værdi og funktioner til styring
  return { value, on, off, toggle, set: setValue };
}
