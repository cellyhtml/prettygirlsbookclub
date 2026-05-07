import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/Home.css';

const CherryIcon = ({ size = 40, color = "var(--cherry-red)" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" fill={color} />
    <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" fill={color} />
    <path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
    <path d="M22 9c-4.28 0-7.14-2.33-10-7 2.46 0 5.27 2 8 7Z" fill="#2d6a4f" stroke="#2d6a4f" />
  </svg>
);

const Home = () => {
  return (
    <div className="home-page">
      {/* Editorial Hero Section */}
      <section className="hero editorial-hero">
        <div className="container hero-content">
          <div className="hero-text-block">
            <p className="handwriting scribble-top">Bem-vindas ao nosso clube</p>
            <h1 className="editorial-title">
              PRETTY<br/>
              <span className="cherry-accent">GIRLS</span><br/>
              READ.
            </h1>
            <p className="hero-subtitle">
              Mais que um clube de leitura. Um espaço secreto onde páginas viram conexões, teorias e surtos literários.
            </p>
            <Link to="/forms" className="btn-editorial" aria-label="Acessar formulário de participação">
              Descubra os Segredos <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="hero-moodboard">
            <div className="polaroid hero-polaroid-1">
              <div className="tape pink"></div>
              <img src="/group-photo.jpg" alt="Aesthetic Club" className="polaroid-img" />
              <div className="polaroid-caption handwriting">Nossos encontros &lt;3</div>
            </div>
            
            <div className="moodboard-element star-sticker">
              <CherryIcon size={45} />
            </div>
          </div>
        </div>
      </section>

      {/* Book of the Month - Scrapbook Style */}
      <section className="section bom-section scrapbook-bom">
        <div className="container">
          <div className="section-header-editorial">
            <h2>O Livro<br/>do Mês</h2>
            <div className="handwriting annotation">Nossa obsessão atual</div>
          </div>
          
          <div className="bom-editorial-layout">
            <div className="polaroid book-polaroid">
              <div className="tape"></div>
              <img src="/book-cover.jpg" alt="Quem é você, Alasca?" className="polaroid-img book-img-polaroid" />
              <div className="polaroid-caption">Alasca.</div>
            </div>
            
            <div className="bom-details-note">
              <div className="paper-note">
                <div className="pin"></div>
                <h3>Quem é você, Alasca?</h3>
                <p className="author-name">por John Green</p>
                <div className="note-divider"></div>
                <p className="description">
                  Neste mês, estamos lendo este emocionante romance sobre juventude, perdas e a busca pelo "Grande Talvez". Preparem-se para muitas emoções, luto e teorias no nosso encontro final!
                </p>
                <Link to="/book-review" className="read-more-link" aria-label="Ler resenha completa de Quem é você, Alasca?">
                  Ler a resenha completa <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts - Ripped Paper Style */}
      <section className="section blog-section">
        <div className="container">
          <h2 className="editorial-heading-center">Diário do Clube</h2>
          
          <div className="posts-grid-editorial">
            <div className="post-scrap">
              <div className="scrap-date handwriting">05 Mai, 2026</div>
              <h3 className="scrap-title">Planejamento: O que vem por aí em Maio</h3>
              <p>O Grande Talvez chegou! Confira o cronograma de leitura de "Alasca" e nosso calendário de Maio.</p>
              <Link to="/diary/4" className="btn-text">Ler entrada ➔</Link>
            </div>
            
            <div className="post-scrap pink-scrap">
              <div className="scrap-date handwriting">25 Abr, 2026</div>
              <h3 className="scrap-title">Como organizar sua TBR</h3>
              <p>Dicas das CEOs para você parar de comprar livros e ler os que já tem (spoiler: nós também falhamos nisso).</p>
              <Link to="/diary/2" className="btn-text">Ler entrada ➔</Link>
            </div>
            
            <div className="post-scrap">
              <div className="scrap-date handwriting">02 Mai, 2026</div>
              <h3 className="scrap-title">Resumo: Encontro de Abril</h3>
              <p>Café, risadas e o anúncio da Polyane como vencedora do quiz de "O Acordo". Confira os melhores momentos!</p>
              <Link to="/diary/3" className="btn-text" aria-label="Ler resumo do encontro de abril">Ler entrada ➔</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
