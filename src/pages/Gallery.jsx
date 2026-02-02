import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Video, Grid3x3 } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const filters = [
    { id: 'all', label: 'All Media', icon: '📚' },
    { id: 'images', label: 'Images', icon: '🖼️' },
    { id: 'videos', label: 'Videos', icon: '🎬' },
  ];

  // Placeholder for gallery items - can be populated with actual data later
  const galleryItems = [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl">
              Explore our showcase of premium fabrics, bespoke attire, videos, and our elegant store.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {galleryItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">📸</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No gallery items available yet.</h3>
              <p className="text-gray-500 text-lg mb-8">Check back later for our latest collection!</p>
              
              {/* Placeholder Gallery Demo */}
              <div className="max-w-6xl mx-auto mt-12">
                <h4 className="text-xl font-semibold text-gray-600 mb-6">Coming Soon</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                      <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-6xl">
                          {item % 3 === 0 ? '🎬' : item % 2 === 0 ? '📸' : '🧵'}
                        </span>
                      </div>
                      <div className="p-4">
                        <h5 className="font-semibold text-gray-800">
                          {item % 3 === 0 ? 'Video Preview' : item % 2 === 0 ? 'Image Gallery' : 'Fabric Collection'}
                        </h5>
                        <p className="text-sm text-gray-500 mt-1">Premium showcase item {item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer">
                  <div className="h-64 bg-gray-200">
                    {/* Gallery item content will go here */}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Our Collections</h2>
            <p className="text-lg text-gray-600">Browse through our different categories</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg text-center hover:shadow-xl transition cursor-pointer">
              <div className="text-5xl mb-4">🧵</div>
              <h3 className="text-xl font-bold mb-2">Fabrics</h3>
              <p className="text-sm opacity-90">Premium fabric collection</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg text-center hover:shadow-xl transition cursor-pointer">
              <div className="text-5xl mb-4">💍</div>
              <h3 className="text-xl font-bold mb-2">Wedding</h3>
              <p className="text-sm opacity-90">Bespoke wedding attire</p>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-lg text-center hover:shadow-xl transition cursor-pointer">
              <div className="text-5xl mb-4">👔</div>
              <h3 className="text-xl font-bold mb-2">Formal</h3>
              <p className="text-sm opacity-90">Corporate & formal wear</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-8 rounded-lg text-center hover:shadow-xl transition cursor-pointer">
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="text-xl font-bold mb-2">Store</h3>
              <p className="text-sm opacity-90">Our showroom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Videos</h2>
            <p className="text-lg text-gray-600">Watch our craftsmanship in action</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🎬</div>
                  <p className="text-xl">Video content coming soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Behind the Scenes at 4man</h3>
                <p className="text-gray-600">
                  Discover the artistry and precision that goes into every piece we create. 
                  From fabric selection to the final stitch, experience our commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Premium Craftsmanship?</h2>
          <p className="text-lg mb-8">
            Visit our showroom to see our collection in person and consult with our expert tailors.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition">
              Visit Our Store
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition border-2 border-white">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
