import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Wardrobe', path: '/wardrobe' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Premium Fabrics',
    'Wedding Suites',
    'Formal Attires',
    'Uniforms',
    'Ready to Wear'
  ];

  return (
    <footer className="bg-heritage-sage text-heritage-forest/80 py-24 border-t border-heritage-champagne/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-heritage-forest tracking-tight">
              4-Man-Fabrics
            </h3>
            <p className="text-sm leading-relaxed text-heritage-forest/70">
              Premium fabrics and bespoke tailoring services since 1987. 
              Crafting elegance for every occasion.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-heritage-forest/20 hover:border-heritage-champagne hover:bg-heritage-champagne/10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-heritage-forest/20 hover:border-heritage-champagne hover:bg-heritage-champagne/10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-heritage-forest/20 hover:border-heritage-champagne hover:bg-heritage-champagne/10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-heritage-forest mb-4 font-serif">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-heritage-champagne transition-all duration-500 ease-in-out inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-heritage-forest mb-4 font-serif">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li 
                  key={service} 
                  className="hover:text-heritage-champagne transition-all duration-500 ease-in-out cursor-pointer hover:translate-x-1 transform"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold text-heritage-forest mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-heritage-champagne mt-1 flex-shrink-0" />
                <span className="text-heritage-forest/70">
                  1st Floor, City Center, 105-108,<br />
                  Divanpara Main Rd, opp. old khadpith,<br />
                  Gujari Bazar, Diwanpara,<br />
                  Rajkot, Gujarat 360005
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#C5A059] flex-shrink-0" />
                <a 
                  href="tel:+919913323064" 
                  className="hover:text-[#C5A059] transition-colors text-gray-400"
                >
                  +91 99133 23064
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#C5A059] flex-shrink-0" />
                <a 
                  href="mailto:4manfabrics@gmail.com" 
                  className="hover:text-[#C5A059] transition-colors text-gray-400"
                >
                  4manfabrics@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="text-gray-400">
              © 2026 4-Man-Fabrics. All rights reserved.
            </p>
            <p className="text-gray-400">
              Made by{' '}
              <span className="text-heritage-forest font-bold hover:text-heritage-champagne transition-colors">
                BaseLabs
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
