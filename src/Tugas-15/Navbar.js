import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
  const [themeColor] = useContext(ThemeContext);
  return (
    <nav className={`nav nav-${themeColor}`}>
      <div className="nav-item">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact to="/materi-9" activeClassName="active">Materi 9</NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact to="/materi-10" activeClassName="active">Materi 10</NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact to="/materi-11" activeClassName="active">Materi 11</NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact to="/materi-12" activeClassName="active">Materi 12</NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact to="/materi-13" activeClassName="active">Materi 13</NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact to="/materi-14" activeClassName="active">Materi 14</NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact to="/materi-15" activeClassName="active">Materi 15</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
