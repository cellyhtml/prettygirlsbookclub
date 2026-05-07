import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header editorial-header">
      <div className="container header-content">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src="/logo_final.png" alt="Pretty Girls Book Club" className="header-logo-main" />
        </Link>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
            <span>Home</span>
            <div className="highlighter"></div>
          </Link>
          <Link to="/about" className={`nav-item ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>
            <span>Sobre Nós</span>
            <div className="highlighter"></div>
          </Link>
          <Link to="/library" className={`nav-item ${isActive('/library') ? 'active' : ''}`} onClick={closeMenu}>
            <span>Biblioteca</span>
            <div className="highlighter"></div>
          </Link>
          <Link to="/forms" className={`nav-item special-item ${isActive('/forms') ? 'active' : ''}`} onClick={closeMenu}>
            <span>Participe</span>
            <div className="tape small-tape"></div>
          </Link>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} color="var(--dark-ink)" /> : <Menu size={28} color="var(--dark-ink)" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
