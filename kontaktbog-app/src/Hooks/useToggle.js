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
  
  const [value, setValue] = useState(initial);
  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((v) => !v), []);
  
  return { value, on, off, toggle, set: setValue };
}
