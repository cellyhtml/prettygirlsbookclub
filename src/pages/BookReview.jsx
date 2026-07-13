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
              <img src="/nos-ja-moramos-aqui.jpg" alt="Nós Já Moramos Aqui" className="polaroid-img" />
              <div className="polaroid-caption handwriting">Nossa leitura de Julho</div>
            </div>

            <div className="review-meta-note paper-note">
              <div className="pin"></div>
              <h4>Ficha Técnica</h4>
              <ul>
                <li><strong>Autor:</strong> Marcus Kliewer</li>
                <li><strong>Gênero:</strong> Thriller / Terror / Suspense</li>
                <li><strong>Páginas:</strong> 320</li>
                <li><strong>Mês:</strong> Julho 2026</li>
              </ul>
              <div className="sticker-star">⭐</div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="review-content-main">
            <header className="review-header">
              <p className="handwriting annotation">Livro do Mês</p>
              <h1 className="editorial-title" style={{ fontSize: '3rem', lineHeight: '1.1' }}>Nós Já Moramos Aqui</h1>
            </header>

            <div className="review-text-block paper-note">
              <div className="pin"></div>
              <div className="review-body">
                <h3>O que esperar?</h3>
                <p>
                  Charlie e Eve ganham a vida comprando, reformando e revendendo casas antigas. Quando adquirem uma propriedade isolada e cheia de história no Oregon, elas acreditam ter encontrado o projeto perfeito para suas carreiras. No entanto, a rotina pacífica de reforma é interrompida em uma tarde fria e chuvosa.
                </p>
                <p>
                  Uma família misteriosa bate à porta. O pai, com um sorriso educado mas insistente, diz que morou ali na infância e pede para mostrar a casa rapidamente para seus filhos. Incapaz de negar um pedido que parece tão inofensivo, Eve os deixa entrar. Esse pequeno ato de gentileza dá início a uma espiral terrível de acontecimentos perturbadores.
                </p>
                <p>
                  À medida que uma forte tempestade isola a casa do resto do mundo, os visitantes parecem cada vez mais relutantes em ir embora. A atmosfera fica claustrofóbica, o comportamento da família se torna cada vez mais bizarro, e Eve passa a questionar o que é real e o que é paranoia no porão escuro do imóvel.
                </p>

                <div className="editorial-quote">
                  "Um thriller psicológico tenso que nasceu como um fenômeno viral no Reddit e logo teve seus direitos de adaptação comprados pela Netflix!"
                </div>

                <h3>Por que ler conosco?</h3>
                <p>
                  No Pretty Girls, adoramos uma boa dose de mistério e romance, mas este mês vamos nos aventurar pelos caminhos sombrios do horror psicológico! <em>"Nós Já Moramos Aqui"</em> é perfeito para gerar teorias malucas nos nossos chats, discussões acaloradas sobre sobrevivência, o perigo de tentar ser educada com estranhos e como a nossa mente pode nos pregar peças quando o medo toma conta. Preparem as cobertas e a luz acesa!
                </p>
              </div>

              <div className="review-footer">
                <div className="handwriting sign-off">Boa leitura e bons sustos, girls! <Heart size={16} fill="var(--cherry-red)" stroke="var(--cherry-red)" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReview;
