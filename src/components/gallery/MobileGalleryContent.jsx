import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from './galleryData';

const MobileGalleryContent = ({ activeCategory, setActiveCategory, filteredItems }) => {
  return (
    <section className="pt-28 pb-14 bg-[#FAFAFA] min-h-screen">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-[#1D4E38] mb-3">Our Collections</h2>
          <p className="text-sm text-[#1D4E38]/70 max-w-sm mx-auto leading-relaxed">
            Browse each category with a cleaner, touch-first gallery flow.
          </p>
        </div>

        <div className="sticky top-[84px] z-40 -mx-4 px-4 bg-[#FAFAFA] border-y border-gray-200">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] py-2">
            <div className="flex flex-nowrap items-center gap-5 w-max px-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-none whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 relative pb-3 ${
                    activeCategory === category
                      ? 'text-[#1D4E38]'
                      : 'text-gray-400 active:text-[#1D4E38]'
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1D4E38]"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 550, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-6 w-full"></div>

        <motion.div layout className="grid grid-cols-2 gap-3">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#F0F7F4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[10px] uppercase tracking-widest text-[#1D4E38]/60 mb-1">{item.category}</p>
                  <h3 className="text-sm font-serif text-[#1D4E38] leading-snug">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-[#1D4E38]/70 text-sm">
            No items found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileGalleryContent;
