import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/Library.css';
import imgHipotese from '../assets/books/a_hipotese_do_amor.jpg';
import imgRazao from '../assets/books/a_razao_do_amor.jpg';
import imgAmorEngano from '../assets/books/amor_por_engano.jpg';
import imgAcordo from '../assets/books/o_acordo.jpg';
import imgErro from '../assets/books/o_erro.jpg';
import imgTempestadeOnix from '../assets/books/tempestade_de_onix.jpg';
import imgQuartaAsa from '../assets/books/quarta_asa.jpg';
import imgMinhaMelhorParte from '../assets/books/minha_melhor_parte.jpg';
import imgSorteNoAmor from '../assets/books/sorte_no_amor.jpg';
import imgJogo from '../assets/books/o_jogo.jpg';
import imgEmpregada from '../assets/books/a_empregada.jpg';
import imgChamaFerro from '../assets/books/chama_de_ferro.jpg';
import imgAssistenteVilao from '../assets/books/assistente_do_vilao.jpg';
import imgAddieLaRue from '../assets/books/a_vida_invisivel_de_addie_larue.jpg';
import imgRotaColisao from '../assets/books/em_rota_de_colisao.jpg';

// Mock data
const books = [
  // Romance
  { id: 1, title: 'A Hipótese do Amor', author: 'Ali Hazelwood', category: 'Romance', date: 'Acervo', image: imgHipotese, pdfLink: 'https://drive.google.com/file/d/12lBjxXH6OuPKzcM4aii-hRBelT4ylKR4/view' },
  { id: 2, title: 'A Razão do Amor', author: 'Ali Hazelwood', category: 'Romance', date: 'Acervo', image: imgRazao, pdfLink: 'https://drive.google.com/file/d/1WrheD_qU9yNz2Onhf70pg4PxOiIhAUwj/view' },
  { id: 3, title: 'Amor por Engano', author: 'Lynn Painter', category: 'Romance', date: 'Acervo', image: imgAmorEngano, pdfLink: 'https://drive.google.com/file/d/1OhKQflLsO-oES01NfwoN6BIcXQ-Bi3yt/view?usp=drive_link' },
  { id: 4, title: 'O Acordo', author: 'Elle Kennedy', category: 'Romance', date: 'Acervo', image: imgAcordo, pdfLink: 'https://drive.google.com/file/d/1-5x32ubYefkKd91OcSoJnZRmfQvvIpGn/view?usp=drive_link' },
  { id: 5, title: 'O Erro', author: 'Elle Kennedy', category: 'Romance', date: 'Acervo', image: imgErro, pdfLink: 'https://drive.google.com/file/d/1szINS1bKSwQ9i5t9qXIzheZY2eZJzVpo/view?usp=drive_link' },
  { id: 6, title: 'Sorte no Amor', author: 'Lynn Painter', category: 'Romance', date: 'Acervo', image: imgSorteNoAmor, pdfLink: 'https://drive.google.com/file/d/1lWqQ-rzJCIFeRyacSqpNdrZGK13QL1if/view?usp=drive_link' },
  { id: 11, title: 'Clube do Livro dos Homens', author: 'Lyssa Kay Adams', category: 'Romance', date: 'Acervo', image: 'https://books.google.com/books/content?id=2mgNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', pdfLink: 'https://drive.google.com/file/d/1IvqGPVrTA0kD3usOAXJvcmB_1vL-x8DM/view?usp=drive_link' },
  { id: 12, title: 'O Jogo', author: 'Elle Kennedy', category: 'Romance', date: 'Acervo', image: imgJogo, pdfLink: 'https://drive.google.com/file/d/1DhDsdORN7OAoFKl7La6L5dhZZa8nMyga/view?usp=drive_link' },
  { id: 13, title: 'A Conquista', author: 'Elle Kennedy', category: 'Romance', date: 'Acervo', image: 'https://books.google.com/books/content?id=VsyaDgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', pdfLink: 'https://drive.google.com/file/d/182GpJIg0XpwWsRriHGoQU2A-7cbWWH9s/view?usp=drive_link' },
  { id: 14, title: 'Em Rota de Colisão', author: 'Bal Khabra', category: 'Romance', date: 'Acervo', image: imgRotaColisao, pdfLink: 'https://drive.google.com/file/d/1lV7lGNyvVKKw7H9tWUoDIr3BGaHK2dFS/view?usp=drive_link' },
  { id: 15, title: 'Minha Melhor Parte', author: 'Hannah Bonam-Young', category: 'Romance', date: 'Acervo', image: imgMinhaMelhorParte, pdfLink: 'https://drive.google.com/file/d/1wpsgVPrwyNVd4sQtrNjsLdnnICxwh70z/view?usp=drive_link' },
  { id: 16, title: 'Nem Todo Outono é Igual', author: 'Misty Wilson', category: 'Romance', date: 'Acervo', image: 'https://books.google.com/books/content?id=U_uIEQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', pdfLink: 'https://drive.google.com/file/d/19vWLE4MN1vGC1q6LWIA-A7CEucBPN9Mc/view?usp=drive_link' },
  { id: 17, title: 'Sinais do Amor', author: 'Hannah Bonam-Young', category: 'Romance', date: 'Acervo', image: 'https://books.google.com/books/content?id=1W82EQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', pdfLink: 'https://drive.google.com/file/d/1xhOS4DwkBGcCCsYJFK1GmCJVqP9c1cUl/view?usp=drive_link' },
  
  // Romantasia
  { id: 7, title: 'Quarta Asa', author: 'Rebecca Yarros', category: 'Romantasia', date: 'Acervo', image: imgQuartaAsa, pdfLink: 'https://drive.google.com/file/d/1uvNnRsUSIFq9eiR-mqn1QV4553ADxzxN/view?usp=drive_link' },
  { id: 8, title: 'Assistente do Vilão', author: 'Hannah Nicole Maehrer', category: 'Romantasia', date: 'Acervo', image: imgAssistenteVilao, pdfLink: 'https://drive.google.com/file/d/1tjRsUJqt3V5JzjF7dvoEs5Sxi0_e_3zz/view?usp=drive_link' },
  { id: 9, title: 'A Vida Invisível de Addie LaRue', author: 'V. E. Schwab', category: 'Romantasia', date: 'Acervo', image: imgAddieLaRue, pdfLink: 'https://drive.google.com/file/d/1LyLifnDQjBBNch69XAbdFwvlv0hyCYhi/view?usp=drive_link' },
  { id: 18, title: 'Aliada do Vilão', author: 'Hannah Nicole Maehrer', category: 'Romantasia', date: 'Acervo', image: 'https://books.google.com/books/content?id=pWODEQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', pdfLink: 'https://drive.google.com/file/d/1zQYkeWhVgaJawYhuXnEGgxRUnqHZbKx-/view?usp=drive_link' },
  { id: 19, title: 'Chama de Ferro', author: 'Rebecca Yarros', category: 'Romantasia', date: 'Acervo', image: imgChamaFerro, pdfLink: 'https://drive.google.com/file/d/1pWiOlcyxXfFW3OHthybwiaNBnj-b2oE9/view?usp=drive_link' },
  { id: 20, title: 'Tempestade de Ônix', author: 'Rebecca Yarros', category: 'Romantasia', date: 'Acervo', image: imgTempestadeOnix, pdfLink: 'https://drive.google.com/file/d/1vl4mE3YmEOblKvkNiEirReUcrYV4WmkU/view?usp=drive_link' },
  { id: 21, title: 'Alchemised', author: 'SenLinYu', category: 'Romantasia', date: 'Acervo', image: 'https://books.google.com/books/content?id=oa9HEQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', pdfLink: 'https://drive.google.com/file/d/1g5m5A2-E54IKcap5ImQtkBgjAEU2SRMx/view?usp=drive_link' },
  
  // Suspense
  { id: 10, title: 'A Empregada', author: 'Freida McFadden', category: 'Suspense', date: 'Acervo', image: imgEmpregada, pdfLink: 'https://drive.google.com/file/d/1GF_tnPUbfNstf3ZborSHsYEqnCG_JnEY/view' },
];

const Library = () => {
  const [filter, setFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', 'Romance', 'Romantasia', 'Suspense'];

  const filteredBooks = books.filter(book => {
    const matchesFilter = filter === 'Todos' || book.category === filter;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="library-page editorial-page">
      <div className="container">
        <Link to="/" className="back-link"><ArrowLeft size={18} /> Voltar para Home</Link>
        
        <div className="library-header text-center">
          <h1 className="editorial-title">O Acervo</h1>
          <p className="handwriting annotation-center">Nossas vidas passadas</p>
        </div>

        <div className="filters-container paper-scrap">
          <div className="tape pink"></div>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Pesquisar por título ou autor..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="editorial-input"
            />
          </div>
          <div className="category-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="library-grid">
          {filteredBooks.map((book, index) => (
            <div key={book.id} className={`book-note polaroid ${index % 2 === 0 ? 'tilt-left' : 'tilt-right'}`}>
              <div className="tape"></div>
              
              <div className="book-image-container">
                <img src={book.image} alt={book.title} className="book-lib-img" />
                <span className="book-category-tag">{book.category}</span>
              </div>
              
              <div className="book-lib-info">
                <h3>{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <div className="note-divider"></div>
                
                <div className="book-footer-actions">
                  <a href={book.pdfLink} target="_blank" rel="noopener noreferrer" className="btn-pdf" aria-label={`Baixar PDF de ${book.title}`}>
                    Baixar PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredBooks.length === 0 && (
          <div className="empty-state paper-note">
            <div className="pin"></div>
            <h3>Poxa...</h3>
            <p>Ainda não lemos nenhum livro com esse título no clube.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
