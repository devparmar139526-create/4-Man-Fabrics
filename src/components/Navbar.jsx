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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="cursor-pointer"
            >
              <h1 className={`text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}>
                Arihant <span className="text-[#C5A059]">4Man</span>
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    isScrolled ? 'text-[#1A1A1A]' : 'text-white'
                  } ${isActive(link.path) ? 'text-[#C5A059]' : 'hover:text-[#C5A059]'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] transition-all group-hover:w-full ${
                    isActive(link.path) ? 'w-full' : ''
                  }`}></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`px-6 py-2 text-sm font-medium tracking-wide transition-colors ${
                isScrolled 
                  ? 'text-[#1A1A1A] hover:text-[#C5A059]' 
                  : 'text-white hover:text-[#C5A059]'
              }`}
            >
              Login
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="px-6 py-2.5 bg-[#C5A059] text-white text-sm font-medium tracking-wide rounded hover:bg-[#B39049] transition-all transform hover:scale-105 shadow-md"
            >
              Register
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-[#1A1A1A]' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-[#1A1A1A]' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-gray-200"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-6 py-3 text-[#1A1A1A] hover:bg-[#F5F5F5] hover:text-[#C5A059] transition-colors ${
                  isActive(link.path) ? 'text-[#C5A059] bg-[#F5F5F5]' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-2 border-t border-gray-200 mt-2">
              <button className="w-full px-4 py-2.5 text-[#1A1A1A] border-2 border-[#1A1A1A] rounded hover:bg-[#1A1A1A] hover:text-white transition-all font-medium">
                Login
              </button>
              <button className="w-full px-4 py-2.5 bg-[#C5A059] text-white rounded hover:bg-[#B39049] transition-all font-medium shadow-md">
                Register
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
