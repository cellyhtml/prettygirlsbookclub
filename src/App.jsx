import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Library from './pages/Library';
import Forms from './pages/Forms';
import DiaryDetail from './pages/DiaryDetail';
import BookReview from './pages/BookReview';
import AccessibilityMenu from './components/AccessibilityMenu';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element={<Library />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/diary/:id" element={<DiaryDetail />} />
            <Route path="/book-review" element={<BookReview />} />
          </Routes>
        </main>
        <Footer />
        <AccessibilityMenu />
      </div>
    </Router>
  );
}

export default App;
