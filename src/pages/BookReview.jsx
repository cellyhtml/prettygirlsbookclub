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
              <img src="/bromance-cover.jpg" alt="Clube do Livro dos Homens" className="polaroid-img" />
              <div className="polaroid-caption handwriting">Nossa leitura de Junho</div>
            </div>

            <div className="review-meta-note paper-note">
              <div className="pin"></div>
              <h4>Ficha Técnica</h4>
              <ul>
                <li><strong>Autor:</strong> Lyssa Kay Adams</li>
                <li><strong>Gênero:</strong> Romance / Comédia Romântica</li>
                <li><strong>Páginas:</strong> 352</li>
                <li><strong>Mês:</strong> Junho 2026</li>
              </ul>
              <div className="sticker-star">⭐</div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="review-content-main">
            <header className="review-header">
              <p className="handwriting annotation">Livro do Mês</p>
              <h1 className="editorial-title" style={{ fontSize: '3rem', lineHeight: '1.1' }}>Clube do Livro dos Homens</h1>
            </header>

            <div className="review-text-block paper-note">
              <div className="pin"></div>
              <div className="review-body">
                <h3>O que esperar?</h3>
                <p>
                  Gavin Harris, um astro do beisebol profissional, está no fundo do poço. Seu casamento com Thea está desmoronando, e ele não tem a menor ideia de como reconquistar o coração de sua esposa. Em seu momento de maior desespero, seus companheiros de equipe o recrutam para uma sociedade secreta muito especial: o <strong>Clube do Livro dos Homens</strong>.
                </p>
                <p>
                  A grande surpresa? A arma secreta desse grupo de atletas marmanjos para salvar relacionamentos é a leitura atenta de <strong>romances de época picantes</strong>! Sob a tutela de um clássico chamado <em>"Cortejando a Condessa"</em>, Gavin terá que engolir o orgulho, aprender a expressar seus sentimentos de verdade e mostrar para Thea que está pronto para ser o marido que ela merece.
                </p>
                <p>
                  Lyssa Kay Adams entrega uma comédia romântica extremamente divertida, ágil e inteligente sobre vulnerabilidade, comunicação nos casamentos e as falsas expectativas criadas pela masculinidade tradicional. É uma leitura leve e deliciosamente engraçada!
                </p>

                <div className="editorial-quote">
                  "A primeira regra do clube do livro é: você não fala sobre o clube do livro."
                </div>

                <h3>Por que ler conosco?</h3>
                <p>
                  Além de darmos excelentes risadas com as reuniões e os comentários hilários de atletas musculosos interpretando romances de época de forma hiper-analítica, este livro nos trará reflexões maravilhosas. No Pretty Girls, debateremos sobre comunicação, as famosas linguagens do amor, o valor da terapia de casal e como construir relacionamentos genuinamente saudáveis. É perfeito para começar Junho com o coração aquecido e boas risadas!
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
