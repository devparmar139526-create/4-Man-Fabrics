import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Shield, TrendingUp, Binary, Heart, Shirt, Drama, Users, ShoppingBag, Scissors, Cloud, Wheat, Zap, Flag, Feather, CheckCircle2 } from 'lucide-react';

const Wardrobe = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const categories = [
    { id: 'fabrics', name: 'Fabrics', icon: Binary },
    { id: 'wedding', name: 'Wedding Suites', icon: Heart },
    { id: 'formal', name: 'Formal Attires', icon: Shirt },
    { id: 'theme', name: 'Theme Attires', icon: Drama },
    { id: 'uniforms', name: 'Uniforms', icon: Users },
    { id: 'ready', name: 'Ready to Wear', icon: ShoppingBag },
  ];

  const fabricTypes = [
    { name: 'Cotton', icon: Cloud, description: 'Breathable and comfortable' },
    { name: 'Linen', icon: Wheat, description: 'Lightweight and elegant' },
    { name: 'Iron Free', icon: Zap, description: 'Low maintenance luxury' },
    { name: 'Khadi', icon: Flag, description: 'Traditional handspun' },
    { name: 'Raw Silk', icon: Feather, description: 'Premium natural fiber' },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-heritage-ivory"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="relative bg-[#1D4E38] text-heritage-ivory py-20 md:py-32 min-h-[calc(100vh-80px)] md:min-h-0 flex items-center">
        {/* Chevron Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(212, 196, 168, 0.2) 0px, rgba(212, 196, 168, 0.2) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(212, 196, 168, 0.2) 0px, rgba(212, 196, 168, 0.2) 1px, transparent 1px, transparent 20px)' }}></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-heritage-champagne/60 text-xs tracking-[0.3em] uppercase mb-12 md:mb-20">Premium Collection</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-thin text-white mb-10 md:mb-16 leading-none px-4">
              Wardrobe
            </h1>
            <p className="text-base text-white/50 font-light mb-20 leading-relaxed tracking-wide max-w-2xl mx-auto">
              Timeless elegance in every piece
            </p>
            <motion.button 
              className="text-xs text-white/80 tracking-[0.2em] uppercase hover:text-white transition-all duration-500 border-b border-transparent hover:border-white pb-1"
              whileHover={{ y: -2 }}
            >
              Browse Collection
            </motion.button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-heritage-sage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-heritage-forest">Product Categories</h2>
            <p className="text-xl text-heritage-forest/80">Discover Our Premium Collections</p>
            <p className="text-heritage-forest/70 mt-2">
              Explore our curated categories, each crafted with exceptional attention to detail and premium quality materials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 rounded-lg text-center cursor-pointer transition-all duration-500 ease-in-out ${
                    activeCategory === category.id
                      ? 'bg-heritage-champagne text-heritage-forest border border-heritage-champagne scale-105'
                      : 'bg-heritage-ivory border border-heritage-champagne hover:border-heritage-champagne text-heritage-forest'
                  }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <IconComponent size={32} className="text-heritage-forest" />
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-heritage-forest">Fabrics</h2>
              <p className="text-lg text-heritage-forest/80 leading-relaxed mb-6 max-w-3xl mx-auto">
                Explore our premium collection of fabrics sourced from around the world, including fine cotton, 
                linen, iron-free, khadi, and raw silk varieties. Each fabric is carefully selected for its quality, 
                texture, and performance, ensuring exceptional comfort and durability in every garment.
              </p>
            </div>

            {/* Fabric Types Grid */}
            <div className="grid md:grid-cols-5 gap-6">
              {fabricTypes.map((fabric, index) => {
                const IconComponent = fabric.icon;
                return (
                  <div key={index} className="bg-heritage-sage p-6 rounded-lg border border-heritage-champagne hover:border-heritage-champagne transition-all duration-500 text-center">
                    <div className="flex justify-center mb-4">
                      <IconComponent size={48} className="text-heritage-forest" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-heritage-forest">{fabric.name}</h3>
                    <p className="text-heritage-forest/70 text-sm">{fabric.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="py-24 bg-heritage-sage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-heritage-forest">Featured Fabrics Products</h2>
            <p className="text-xl text-heritage-forest/80">Discover our handpicked selection of premium fabrics products</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item} 
                className="bg-heritage-ivory rounded-lg overflow-hidden border border-heritage-champagne hover:border-heritage-champagne transition-all duration-500"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-64 bg-gradient-to-br from-heritage-sage to-heritage-champagne flex items-center justify-center">
                  <Binary size={64} className="text-heritage-forest" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-heritage-forest">Premium Fabric Collection</h3>
                  <p className="text-heritage-forest/80">Explore our exquisite range of premium fabrics</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-heritage-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-heritage-forest">Quality Assurance</h2>
              <p className="text-xl text-heritage-forest/80">Our Commitment to Quality</p>
              <p className="text-heritage-forest/70 mt-2">
                At 4-Man-Fabrics, we maintain rigorous quality standards at every stage of production. 
                From fabric selection to the final stitch, each piece undergoes multiple quality checks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-heritage-ivory p-10 border border-heritage-stone text-center transition-all duration-500 hover:border-heritage-champagne">
                <div className="w-16 h-16 bg-heritage-sage border border-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={24} className="text-heritage-forest" />
                </div>
                <h3 className="text-xl font-light mb-4 text-heritage-forest tracking-tight">Premium Materials</h3>
                <p className="text-heritage-forest/70 leading-relaxed">
                  We source only the finest fabrics from trusted suppliers around the world, ensuring superior comfort and durability.
                </p>
              </div>

              <div className="bg-heritage-ivory p-10 border border-heritage-stone text-center transition-all duration-500 hover:border-heritage-champagne">
                <div className="w-16 h-16 bg-heritage-sage border border-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scissors size={24} className="text-heritage-forest" />
                </div>
                <h3 className="text-xl font-light mb-4 text-heritage-forest tracking-tight">Expert Craftsmanship</h3>
                <p className="text-heritage-forest/70 leading-relaxed">
                  Our master tailors bring decades of experience, ensuring every stitch meets our exacting standards.
                </p>
              </div>

              <div className="bg-heritage-ivory p-10 border border-heritage-stone text-center transition-all duration-500 hover:border-heritage-champagne">
                <div className="w-16 h-16 bg-heritage-sage border border-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-[#1D4E38]" />
                </div>
                <h3 className="text-xl font-light mb-4 text-[#1D4E38] tracking-tight">Rigorous Testing</h3>
                <p className="text-[#1D4E38] leading-relaxed">
                  Each garment undergoes multiple quality checks throughout the production process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Wardrobe;
