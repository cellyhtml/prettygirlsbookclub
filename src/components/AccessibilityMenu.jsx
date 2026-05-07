import React, { useState, useEffect } from 'react';
import { Accessibility, Sun, Moon, Type, X, RotateCcw } from 'lucide-react';
import '../styles/AccessibilityMenu.css';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const savedFontSize = localStorage.getItem('pgbc-fontsize');
    const savedContrast = localStorage.getItem('pgbc-contrast');
    
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize));
      document.documentElement.style.fontSize = `${(parseInt(savedFontSize) / 100) * 16}px`;
    }
    
    if (savedContrast === 'true') {
      setHighContrast(true);
      document.body.classList.add('high-contrast');
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeFontSize = (delta) => {
    const newSize = Math.max(80, Math.min(150, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${(newSize / 100) * 16}px`;
    localStorage.setItem('pgbc-fontsize', newSize);
  };

  const toggleContrast = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    if (newContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    localStorage.setItem('pgbc-contrast', newContrast);
  };

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    document.documentElement.style.fontSize = '16px';
    document.body.classList.remove('high-contrast');
    localStorage.removeItem('pgbc-fontsize');
    localStorage.removeItem('pgbc-contrast');
  };

  return (
    <div className="a11y-container">
      <button 
        className="a11y-trigger" 
        onClick={toggleMenu}
        aria-label="Menu de Acessibilidade"
      >
        <Accessibility size={28} />
      </button>

      {isOpen && (
        <div className="a11y-menu">
          <div className="a11y-header">
            <h3>Acessibilidade</h3>
            <button onClick={toggleMenu} className="close-btn"><X size={20} /></button>
          </div>
          
          <div className="a11y-options">
            <div className="a11y-option">
              <span>Tamanho da Fonte</span>
              <div className="a11y-controls">
                <button onClick={() => changeFontSize(-10)} aria-label="Diminuir fonte"><Type size={16} /></button>
                <span className="value">{fontSize}%</span>
                <button onClick={() => changeFontSize(10)} aria-label="Aumentar fonte"><Type size={24} /></button>
              </div>
            </div>

            <div className="a11y-option">
              <span>Alto Contraste</span>
              <button 
                onClick={toggleContrast} 
                className={`toggle-btn ${highContrast ? 'active' : ''}`}
                aria-label="Alternar alto contraste"
              >
                {highContrast ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <button onClick={reset} className="reset-btn">
              <RotateCcw size={16} /> Restaurar Padrão
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;
