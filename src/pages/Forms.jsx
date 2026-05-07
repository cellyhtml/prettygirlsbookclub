import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Forms.css';

const Forms = () => {
  return (
    <div className="forms-page editorial-page">
      <div className="container">
        <Link to="/" className="back-link"><ArrowLeft size={18} /> Voltar para Home</Link>
        
        <div className="forms-header text-center">
          <h1 className="editorial-title">Secret<br/>Society</h1>
          <p className="handwriting annotation-center">Apenas para convidadas</p>
        </div>

        <div className="forms-editorial-grid">
          
          {/* Join Us Section */}
          <div className="envelope-container">
            <div className="wax-seal">
              <Lock size={30} color="var(--white)" />
            </div>
            
            <div className="letter-content">
              <h2 className="editorial-heading">Participe do Clube</h2>
              <p className="typewriter-text">
                As portas do Pretty Girls Book Club estão temporariamente fechadas. 
                Mantemos um número reduzido de membras para garantir que todas as vozes 
                sejam ouvidas durante nossos surtos literários.
              </p>
              
              <div className="letter-signature">
                <p>Com amor,</p>
                <p className="handwriting">As fundadoras</p>
              </div>

              <div className="letter-action">
                <a href="https://instagram.com/prettygirlsbookclub._" target="_blank" rel="noopener noreferrer" className="btn-editorial" aria-label="Seguir no Instagram">
                  Acompanhar @prettygirlsbookclub._
                </a>
              </div>
            </div>
          </div>

          {/* Quiz Section */}
          <div className="quiz-scrap polaroid">
            <div className="tape pink"></div>
            <h3 className="scrap-title">Quiz do Mês</h3>
            <p>
              Terminou a leitura de <strong>"Quem é você, Alasca?"</strong>? 
              Responda ao nosso quiz oficial e garanta seus pontos no ranking das leitoras do mês!
            </p>
            
            <div className="quiz-placeholder">
              <span className="handwriting">Formulário das Membras</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Forms;
