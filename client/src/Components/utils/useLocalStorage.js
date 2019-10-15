import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return window.localStorage.getItem(key) || initialValue;
  });

  const customSetter = newValue => {
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  };

  return [value, customSetter];
};