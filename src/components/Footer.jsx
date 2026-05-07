import { Heart } from 'lucide-react';
import '../styles/Footer.css';

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      {/* Decorative top wave/gradient line */}
      <div className="footer-glow"></div>
      
      <div className="container footer-content">
        
        {/* Brand Column */}
        <div className="footer-column brand-column">
          <div className="logo-wrapper">
            <img src="/logo_final.png" alt="Pretty Girls Book Club" className="footer-logo-final" />
          </div>
          <p>Um espaço seguro para quem prefere viver mil vidas através das páginas de um bom livro.</p>
        </div>

        {/* Links Column */}
        <div className="footer-column links-column">
          <h4>Explorar</h4>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about">Sobre Nós</a>
            <a href="/library">Biblioteca</a>
            <a href="/forms">Participe</a>
          </div>
        </div>
        
        {/* Socials Column */}
        <div className="footer-column socials-column">
          <h4>Acompanhe</h4>
          <div className="social-links">
            <a href="https://instagram.com/prettygirlsbookclub._" target="_blank" rel="noopener noreferrer" className="social-link official">
              <InstagramIcon size={20} />
              <span>@prettygirlsbookclub._</span>
            </a>
            <a href="https://www.tiktok.com/@prettygirlsbookclub._" target="_blank" rel="noopener noreferrer" className="social-link official">
              <TikTokIcon size={20} />
              <span>@prettygirlsbookclub._</span>
            </a>
            <a href="https://instagram.com/analureads._" target="_blank" rel="noopener noreferrer" className="social-link">
              <InstagramIcon size={20} />
              <span>@analureads._</span>
            </a>
            <a href="https://instagram.com/cellyreads_" target="_blank" rel="noopener noreferrer" className="social-link">
              <InstagramIcon size={20} />
              <span>@cellyreads_</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          Feito com <Heart size={14} className="heart-icon" /> para leitoras apaixonadas. &copy; {new Date().getFullYear()} Pretty Girls Book Club.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
