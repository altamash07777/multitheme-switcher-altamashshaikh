import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as typeof theme);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        🎨 Multi-Theme Switcher
      </div>
       <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
      </nav>
      <div>
        <select value={theme} onChange={handleThemeChange} className={styles.dropdown}>
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
