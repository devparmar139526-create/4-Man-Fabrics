import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Video, Grid3x3, Binary, Shirt, Camera, Heart, Play, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 'fabrics', label: 'Fabrics', icon: Binary, count: '4000+' },
    { id: 'wedding', label: 'Wedding', icon: Heart, count: '150+' },
    { id: 'formal', label: 'Formal', icon: Shirt, count: '300+' },
    { id: 'store', label: 'Store', icon: Grid3x3, count: '20+' }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Consistent with other pages */}
      <section className="relative bg-[#1D4E38] text-white py-20 md:py-32 overflow-hidden min-h-[calc(100vh-80px)] md:min-h-0 flex items-center">
        {/* Diamond Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-8" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(212, 196, 168, 0.15) 0px, rgba(212, 196, 168, 0.15) 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-45deg, rgba(212, 196, 168, 0.15) 0px, rgba(212, 196, 168, 0.15) 1px, transparent 1px, transparent 25px)' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-heritage-champagne/60 text-xs tracking-[0.3em] uppercase mb-12 md:mb-20">Visual Showcase</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-thin text-white mb-10 md:mb-16 leading-none px-4">
              Gallery
            </h1>
            <p className="text-base text-white/50 font-light mb-20 leading-relaxed tracking-wide max-w-2xl mx-auto">
              Premium fabrics and bespoke excellence
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation - Simplified */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-serif font-light mb-4 text-black">Collections</h2>
            <p className="text-black/60 text-lg">Browse through our curated categories</p>
          </div>

          {/* Category Cards - Clean Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  className="group relative overflow-hidden bg-[#F0F7F4] border border-[#D4C4A8] hover:border-[#1D4E38] transition-all cursor-pointer h-64"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1D4E38]/5 group-hover:to-[#1D4E38]/10 transition-all"></div>
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="p-4 bg-white rounded-lg border border-[#D4C4A8] group-hover:border-[#1D4E38] transition-colors">
                        <IconComponent size={36} className="text-[#1D4E38]" />
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ rotate: -45 }}
                      >
                        <ArrowRight size={20} className="text-[#1D4E38]" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-light mb-2 text-black">{category.label}</h3>
                      <p className="text-[#1D4E38] font-semibold">{category.count} Items</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Video Section - Different Layout */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Video Info */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-[#1D4E38] mb-4">Featured Video</p>
                <h2 className="text-4xl font-serif font-light mb-6 text-black">
                  Craftsmanship
                  <br />
                  <span className="italic">in Motion</span>
                </h2>
                <p className="text-black/70 leading-relaxed mb-8">
                  Experience the artistry behind every stitch. From fabric selection to the final masterpiece, 
                  witness our dedication to excellence.
                </p>
                <motion.button 
                  className="group flex items-center gap-3 text-[#1D4E38] font-semibold hover:gap-5 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span>Watch Full Video</span>
                  <Play size={20} className="fill-[#1D4E38]" />
                </motion.button>
              </motion.div>
            </div>

            {/* Video Player */}
            <motion.div 
              className="md:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-video bg-[#1D4E38] rounded-lg overflow-hidden border-2 border-[#D4C4A8] group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Play size={32} className="text-[#1D4E38] fill-[#1D4E38] ml-1" />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D4E38] to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Masonry */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-light mb-4 text-black">Latest Additions</h2>
            <p className="text-black/60 text-lg">Newly curated pieces for your inspiration</p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={item}
                className="break-inside-avoid bg-[#F0F7F4] border border-[#D4C4A8] rounded-lg overflow-hidden hover:border-[#1D4E38] hover:shadow-xl transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{ height: item % 2 === 0 ? '380px' : '320px' }}
              >
                <div className="h-2/3 bg-white flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                    {item % 3 === 0 && <Video size={56} className="text-[#1D4E38]" />}
                    {item % 3 === 1 && <Camera size={56} className="text-[#1D4E38]" />}
                    {item % 3 === 2 && <Binary size={56} className="text-[#1D4E38]" />}
                  </motion.div>
                </div>
                <div className="p-6 h-1/3 flex flex-col justify-center">
                  <h4 className="text-xl font-serif text-black mb-2">
                    {item % 3 === 0 ? 'Premium Collection' : item % 3 === 1 ? 'Bespoke Design' : 'Signature Fabric'}
                  </h4>
                  <p className="text-sm text-black/60">Item #{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Reimagined */}
      <section className="relative py-32 bg-[#1D4E38] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4C4A8] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-white leading-tight">
                Ready to Create
                <br />
                <span className="italic text-[#D4C4A8]">Something Extraordinary?</span>
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Visit our showroom and experience the finest fabrics, expert craftsmanship, 
                and personalized service that sets us apart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/919913323064" target="_blank" rel="noopener noreferrer">
                  <motion.button 
                    className="bg-white text-[#1D4E38] px-10 py-4 font-semibold transition-all hover:bg-[#D4C4A8]"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule Consultation
                  </motion.button>
                </a>
                <Link to="/wardrobe">
                  <motion.button 
                    className="bg-transparent text-white px-10 py-4 font-semibold border-2 border-white hover:bg-white hover:text-[#1D4E38] transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Store
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
