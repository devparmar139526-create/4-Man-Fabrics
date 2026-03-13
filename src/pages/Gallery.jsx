import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'All',
  'Handwork Kurta',
  'Indowestern',
  'Jodhpuri',
  'Sherwani',
  'Formal Attires',
];

const galleryItems = [
  { id: 1, title: 'Handwork Kurta Look 1', category: 'Handwork Kurta', image: '/gallery/handwork-kurta/1.jpeg' },
  { id: 2, title: 'Handwork Kurta Look 2', category: 'Handwork Kurta', image: '/gallery/handwork-kurta/2.jpeg' },
  { id: 3, title: 'Handwork Kurta Look 3', category: 'Handwork Kurta', image: '/gallery/handwork-kurta/3.jpeg' },
  { id: 4, title: 'Indowestern Look 1', category: 'Indowestern', image: '/gallery/indowestern/1.jpeg' },
  { id: 5, title: 'Indowestern Look 2', category: 'Indowestern', image: '/gallery/indowestern/2.jpeg' },
  { id: 6, title: 'Indowestern Look 3', category: 'Indowestern', image: '/gallery/indowestern/3.jpeg' },
  { id: 7, title: 'Jodhpuri Look 1', category: 'Jodhpuri', image: '/gallery/jodhpuri/1.jpeg' },
  { id: 8, title: 'Jodhpuri Look 2', category: 'Jodhpuri', image: '/gallery/jodhpuri/2.jpeg' },
  { id: 9, title: 'Jodhpuri Look 3', category: 'Jodhpuri', image: '/gallery/jodhpuri/3.jpeg' },
  { id: 10, title: 'Sherwani Look 1', category: 'Sherwani', image: '/gallery/sherwani/1.jpeg' },
  { id: 11, title: 'Sherwani Look 2', category: 'Sherwani', image: '/gallery/sherwani/2.jpeg' },
  { id: 12, title: 'Sherwani Look 3', category: 'Sherwani', image: '/gallery/sherwani/3.jpeg' },
  { id: 13, title: 'Formal Attire Look 1', category: 'Formal Attires', image: '/gallery/formal-attires/1.jpeg' },
  { id: 14, title: 'Formal Attire Look 2', category: 'Formal Attires', image: '/gallery/formal-attires/2.jpeg' },
  { id: 15, title: 'Formal Attire Look 3', category: 'Formal Attires', image: '/gallery/formal-attires/3.jpeg' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1D4E38] mb-4">Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our heritage craftsmanship across various categories.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-[100px] z-40 bg-[#FAFAFA] border-b border-gray-200 py-4 flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium uppercase tracking-widest transition-all duration-300 relative pb-4 mt-2 ${
                activeCategory === category
                  ? "text-[#1D4E38]"
                  : "text-gray-400 hover:text-[#1D4E38]"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1D4E38]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="h-10 w-full"></div>

        {/* Gallery Grid with Framer Motion Layout Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E7EB] hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                
                {/* Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[#D4C4A8] text-xs uppercase tracking-widest mb-1">{item.category}</p>
                  <h3 className="text-white text-xl font-serif">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No items found in this category.
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;