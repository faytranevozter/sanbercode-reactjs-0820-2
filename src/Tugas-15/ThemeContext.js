import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColorX] = useState(null);

  const setThemeColor = (value) => {
    localStorage.setItem('theme', value);
    setThemeColorX(value);
  };

  useEffect(() => {
    if (themeColor === null) {
      let theme = localStorage.getItem('theme');
      if (theme === null) {
        theme = 'dark';
      }
      setThemeColor(theme);
    }
  }, [themeColor]);

  return (
    <ThemeContext.Provider value={[themeColor, setThemeColor]}>
      {children}
    </ThemeContext.Provider>
  );
};
