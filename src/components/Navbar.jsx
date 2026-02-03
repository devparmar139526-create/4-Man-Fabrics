import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Wardrobe', path: '/wardrobe' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-700 ease-in-out ${
      isScrolled 
        ? 'bg-heritage-ivory/95 backdrop-blur-xl border-b border-heritage-champagne/40 py-3 md:py-4' 
        : 'bg-[#1D4E38] py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* PREMIUM LUXURY LOGO */}
          <Link to="/" className="flex items-baseline group">
            <h1 className={`text-2xl md:text-3xl font-serif font-light tracking-[0.3em] uppercase leading-none transition-colors duration-700 ${
              isScrolled ? 'text-[#1D4E38]' : 'text-white'
            }`}>
              <span className={`relative -top-[5px] transition-colors duration-700 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}>4</span> Man Fabrics
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={link.path}
                  className={`text-xs uppercase font-medium tracking-luxury transition-all duration-500 relative group ${
                    isScrolled ? 'text-black' : 'text-white'
                  } ${isActive(link.path) ? 'text-black' : 'hover:text-gray-700'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-heritage-champagne transition-all duration-500 group-hover:w-full ${
                    isActive(link.path) ? 'w-full' : ''
                  }`}></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 transition-colors rounded"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-black' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-black' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-6 pb-4 bg-heritage-ivory/98 backdrop-blur-lg border border-heritage-stone"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-6 py-4 text-heritage-forest hover:bg-heritage-sage hover:text-heritage-darkforest transition-all duration-300 tracking-luxury text-sm uppercase ${
                  isActive(link.path) ? 'text-heritage-darkforest bg-heritage-sage border-l-2 border-heritage-champagne' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
