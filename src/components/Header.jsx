import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// this is the header component for navigation
const Header = () => {
  // state for mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // all the navigation links
  const navLinks = [
    { name: 'About us', path: '/about' },
    { name: 'Explore', path: '/explore' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Artists', path: '/artists' },
  ];

  // function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6H24V10H12V22H24V26H8V6Z" fill="#FBBF24"/>
              </svg>
            </div>
          </Link>

          {/* navigation links for desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* empty div for spacing */}
          <div className="hidden md:block w-24" />

          {/* hamburger menu button for mobile */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile menu - only shows when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 px-4 py-2 ${
                    isActive(link.path)
                      ? 'text-white bg-white/10 rounded-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="border border-white text-white px-6 py-2.5 rounded-lg font-medium text-sm mx-4 mt-4 hover:bg-white hover:text-black transition-all duration-300">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
