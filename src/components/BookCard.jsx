import { BookOpen } from 'lucide-react';
import '../styles/BookCard.css';

const BookCard = ({ title, author, category, coverColor, readLink }) => {
  return (
    <div className="book-card-container">
      <div className="book-card">
        <div className="book-cover" style={{ background: coverColor }}>
          <div className="book-spine"></div>
          <div className="book-title-wrapper">
            <h3 className="book-title">{title}</h3>
            <p className="book-author">{author}</p>
          </div>
        </div>
      </div>
      <div className="book-details">
        <span className="book-category">{category}</span>
        <h4 className="details-title">{title}</h4>
        <p className="details-author">{author}</p>
        <a 
          href={readLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-read"
        >
          <BookOpen size={16} /> Ler PDF
        </a>
      </div>
    </div>
  );
};

export default BookCard;
