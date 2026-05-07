import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page editorial-page">
      <div className="container">
        <Link to="/" className="back-link"><ArrowLeft size={18} /> Voltar para Home</Link>
        
        <div className="about-editorial-grid">
          {/* Left Column: Text */}
          <div className="about-text-column">
            <h1 className="editorial-title">
              Nossa<br/>
              <span className="cherry-accent">História</span>
            </h1>
            
            <div className="text-scrap">
              <p className="lead-text">
                O Pretty Girls Book Club nasceu de uma vontade imensa de compartilhar universos, surtos e teorias de madrugada com garotas que entendem exatamente o que estamos sentindo.
              </p>
              <p>
                Não somos apenas um clube de leitura. Somos um espaço seguro, um grupo de amigas e um refúgio para quem prefere viver mil vidas através das páginas de um bom livro. Nossa estética pode ser fofa, mas nossas discussões são profundas (e as vezes caóticas).
              </p>
            </div>
            
            <div className="founder-scraps">
              <h2 className="handwriting">As fundadoras</h2>
              
              <div className="founder-card polaroid">
                <div className="tape"></div>
                <h3>Leandra</h3>
                <p className="role">CEO & Mediadora Oficial</p>
                <p className="bio">Sempre com um romance na bolsa. Chora com finais felizes e marca os livros com post-its coloridos.</p>
              </div>
              
              <div className="founder-card polaroid">
                <div className="tape pink"></div>
                <h3>Analu</h3>
                <p className="role">CEO & Curadora Oficial</p>
                <p className="bio">Mestre em descobrir os melhores livros antes de virarem hype no TikTok. Lê fantasia como se respirasse.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Visual Moodboard */}
          <div className="about-moodboard-column">
            <div className="corkboard">
              <div className="polaroid massive-polaroid">
                <div className="tape"></div>
                <div className="tape pink bottom-tape"></div>
                <img src="/ceos-photo.jpg" alt="Ceo's do book club" className="polaroid-img" />
                <div className="polaroid-caption handwriting">Ceo's do book club</div>
              </div>
              
              <div className="paper-note tiny-note">
                <div className="pin"></div>
                <Heart fill="var(--cherry-red)" color="var(--cherry-red)" size={30} />
                <p className="handwriting">Nossa história escrita em cada página.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
