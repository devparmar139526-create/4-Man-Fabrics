import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Shield, TrendingUp } from 'lucide-react';

const Wardrobe = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const categories = [
    { id: 'fabrics', name: 'Fabrics', icon: '🧵' },
    { id: 'wedding', name: 'Wedding Suites', icon: '💍' },
    { id: 'formal', name: 'Formal Attires', icon: '👔' },
    { id: 'theme', name: 'Theme Attires', icon: '🎭' },
    { id: 'uniforms', name: 'Uniforms', icon: '👕' },
    { id: 'ready', name: 'Ready to Wear', icon: '👗' },
  ];

  const fabricTypes = [
    { name: 'Cotton', icon: '☁️', description: 'Breathable and comfortable' },
    { name: 'Linen', icon: '🌾', description: 'Lightweight and elegant' },
    { name: 'Iron Free', icon: '✨', description: 'Low maintenance luxury' },
    { name: 'Khadi', icon: '🇮🇳', description: 'Traditional handspun' },
    { name: 'Raw Silk', icon: '🎋', description: 'Premium natural fiber' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-blue-400 mb-2 text-lg">Premium Collection</p>
            <h1 className="text-5xl font-bold mb-6">Our Wardrobe Collection</h1>
            <p className="text-2xl mb-4">Excellence in Every Thread</p>
            <p className="text-lg mb-8">
              Explore our comprehensive range of premium fabrics, bespoke attires, and ready-to-wear collection. 
              Each piece is crafted with uncompromising quality and timeless elegance, designed for the discerning 
              gentleman who appreciates luxury craftsmanship.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600">Discover Our Premium Collections</p>
            <p className="text-gray-500 mt-2">
              Explore our curated categories, each crafted with exceptional attention to detail and premium quality materials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-lg text-center cursor-pointer transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                }`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Fabrics</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Explore our premium collection of fabrics sourced from around the world, including fine cotton, 
                  linen, iron-free, khadi, and raw silk varieties. Each fabric is carefully selected for its quality, 
                  texture, and performance, ensuring exceptional comfort and durability in every garment.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Explore Fabrics
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {fabricTypes.slice(0, 4).map((fabric, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-3xl mb-2">{fabric.icon}</div>
                    <h4 className="font-semibold text-gray-800">{fabric.name}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Fabric Types Grid */}
            <div className="grid md:grid-cols-5 gap-6">
              {fabricTypes.map((fabric, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
                  <div className="text-5xl mb-4">{fabric.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{fabric.name}</h3>
                  <p className="text-gray-600 text-sm">{fabric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Fabrics Products</h2>
            <p className="text-xl text-gray-600">Discover our handpicked selection of premium fabrics products</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-6xl">🧵</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Premium Fabric Collection</h3>
                  <p className="text-gray-600 mb-4">Explore our exquisite range of premium fabrics</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Quality Assurance</h2>
              <p className="text-xl text-gray-600">Our Commitment to Quality</p>
              <p className="text-gray-500 mt-2">
                At Arihant 4Man, we maintain rigorous quality standards at every stage of production. 
                From fabric selection to the final stitch, each piece undergoes multiple quality checks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Materials</h3>
                <p className="text-gray-600">
                  We source only the finest fabrics from trusted suppliers around the world, ensuring superior comfort and durability.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✂️</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Craftsmanship</h3>
                <p className="text-gray-600">
                  Our master tailors bring decades of experience, ensuring every stitch meets our exacting standards.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Rigorous Testing</h3>
                <p className="text-gray-600">
                  Each garment undergoes multiple quality checks throughout the production process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wardrobe;
