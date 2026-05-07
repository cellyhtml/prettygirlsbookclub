import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import '../styles/BookReview.css';

const BookReview = () => {
  return (
    <div className="book-review-page editorial-page">
      <div className="container">
        <Link to="/" className="back-link"><ArrowLeft size={18} /> Voltar para Home</Link>
        
        <div className="review-layout">
          {/* Left Column: Visuals */}
          <div className="review-visuals">
            <div className="polaroid review-polaroid">
              <div className="tape"></div>
              <img src="/book-cover.jpg" alt="Quem é você, Alasca?" className="polaroid-img" />
              <div className="polaroid-caption handwriting">Nossa leitura de Maio</div>
            </div>
            
            <div className="review-meta-note paper-note">
              <div className="pin"></div>
              <h4>Ficha Técnica</h4>
              <ul>
                <li><strong>Autor:</strong> John Green</li>
                <li><strong>Gênero:</strong> Jovem Adulto / Drama</li>
                <li><strong>Páginas:</strong> ~256</li>
                <li><strong>Mês:</strong> Maio 2026</li>
              </ul>
              <div className="sticker-star">⭐</div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="review-content-main">
            <header className="review-header">
              <p className="handwriting annotation">Livro do Mês</p>
              <h1 className="editorial-title">Quem é você, Alasca?</h1>
            </header>

            <div className="review-text-block paper-note">
              <div className="pin"></div>
              <div className="review-body">
                <h3>O que esperar?</h3>
                <p>
                  Miles Halter é um adolescente fascinado pelas últimas palavras de grandes personalidades. Cansado de sua vida sem graça na Flórida, ele decide buscar o seu <strong>"Grande Talvez"</strong> e se muda para o internato de Culver Creek, no Alabama.
                </p>
                <p>
                  Lá, ele conhece o Coronel, o Takumi e a enigmática e magnética <strong>Alasca Young</strong>. Alasca é tudo o que Miles não é: impulsiva, brilhante e autodestrutiva. Entre trotes escolares, amizades profundas e o amadurecimento, Miles descobre que a vida é muito mais complexa e dolorosa do que ele imaginava.
                </p>
                <p>
                  John Green entrega uma história visceral sobre o primeiro amor, o luto e a busca por sentido em meio ao labirinto de sofrimento. É um livro para ler com o coração na mão e lencinhos do lado.
                </p>

                <div className="editorial-quote">
                  "Vou em busca de um Grande Talvez."
                </div>

                <h3>Por que ler conosco?</h3>
                <p>
                  Este livro é um marco na literatura YA e gera discussões profundas sobre destino, perdoar a si mesmo e o impacto que deixamos na vida uns dos outros. No Pretty Girls, vamos explorar cada teoria e cada emoção que Culver Creek tem a oferecer.
                </p>
              </div>
              
              <div className="review-footer">
                <div className="handwriting sign-off">Boa leitura, girls! <Heart size={16} fill="var(--cherry-red)" stroke="var(--cherry-red)" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReview;
