import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Marketplace from './pages/Marketplace';
import Artists from './pages/Artists';

// main app component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white">
        {/* header stays on all pages */}
        <Header />
        {/* routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
        {/* footer stays on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
