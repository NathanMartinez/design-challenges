import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeContextUpdate = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeContextUpdate.Provider value={setDarkMode}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
