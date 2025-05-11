import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <nav className="hidden md:flex ml-8">
            <ul className="flex space-x-6">
              {['About', 'Upcoming Runs', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white hover:text-orange-500 transition-colors font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://chat.whatsapp.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            <MessageCircle size={18} className="mr-2" />
            Join WhatsApp
          </a>
          <a
            href="#signup"
            className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-500 transition-colors"
          >
            Sign Up For Next Run
          </a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ul className="space-y-4">
                {['About', 'Upcoming Runs', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-white hover:text-orange-500 transition-colors font-medium block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 space-y-4">
              <a
                href="https://chat.whatsapp.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors w-full"
              >
                <MessageCircle size={18} className="mr-2" />
                Join WhatsApp
              </a>
              <a
                href="#signup"
                className="flex items-center justify-center bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-500 transition-colors w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up For Next Run
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;