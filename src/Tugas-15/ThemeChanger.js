import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeChanger = () => {
  const [themeColor, setThemeColor] = useContext(ThemeContext);

  return (
    <div>
      Theme Color : 
      <button type="button" className="btn btn-dark" disabled={(themeColor === 'dark')} onClick={() => setThemeColor('dark')}>Dark</button>
       
      <button type="button" className="btn btn-light" disabled={(themeColor === 'light')} onClick={() => setThemeColor('light')}>Light</button>
    </div>
  );
};

export default ThemeChanger;
