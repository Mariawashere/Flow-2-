import { useCallback, useState } from "react";

/**
 * A tiny hook to manage a boolean toggle (like modals or dropdowns).
 * @param {boolean} initial - default state (false by default)
 */
export default function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((v) => !v), []);

  return { value, on, off, toggle, set: setValue };
}
