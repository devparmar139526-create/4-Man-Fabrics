import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Sparkles, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const testimonials = [
    {
      text: 'We specially came down from Bangalore to Rajkot for fabric shopping and it was worth the visit. The collection and variety is amazing. Staff is very helpful and cooperative.',
      author: 'Pooja Agarwal',
      rating: 5
    },
    {
      text: 'Best fabric store in Rajkot. Wide range of premium quality fabrics with excellent customer service. Highly recommended for anyone looking for quality materials.',
      author: 'Chavda Sanjay',
      rating: 5
    },
    {
      text: 'Wonderful and unending range of fabrics! The quality is exceptional and the staff knows exactly what they\'re talking about. A true gem in Rajkot.',
      author: 'Hemal Ranpara',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C5A059] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              <p className="text-[#C5A059] text-sm md:text-base tracking-[0.3em] font-medium mb-4">
                SINCE 1987
              </p>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
              Elevate Your Elegance
              <br />
              <span className="text-[#C5A059]">Beyond Imagination</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-300"
            >
              Where artistry meets precision. Experience the pinnacle of bespoke tailoring with premium fabrics, 
              masterful craftsmanship, and unparalleled attention to detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              <Link 
                to="/wardrobe"
                className="px-10 py-4 bg-[#C5A059] text-white text-lg font-medium tracking-wide rounded hover:bg-[#B39049] transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 group"
              >
                Explore Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="px-10 py-4 border-2 border-white/30 text-white text-lg font-medium tracking-wide rounded hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Book Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center gap-12 mt-16 text-sm"
            >
              <div>
                <p className="text-4xl font-serif font-bold text-[#C5A059]">35+</p>
                <p className="text-gray-400 mt-1">Years Excellence</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-4xl font-serif font-bold text-[#C5A059]">4000+</p>
                <p className="text-gray-400 mt-1">Fabric Options</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-4xl font-serif font-bold text-[#C5A059]">∞</p>
                <p className="text-gray-400 mt-1">Possibilities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-[#C5A059] rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-[#C5A059] text-sm tracking-[0.3em] font-medium mb-4">OUR PROMISE</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#1A1A1A]">
              Commitment to Excellence
            </h2>
            <div className="w-24 h-1 bg-[#C5A059] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scissors,
                title: 'Master Craftsmanship',
                description: 'Expert tailors with decades of experience creating perfect fits'
              },
              {
                icon: Sparkles,
                title: 'Premium Fabrics',
                description: 'Curated selection of the world\'s most luxurious materials'
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Rigorous quality control ensuring perfection in every stitch'
              },
              {
                icon: Clock,
                title: 'Timely Delivery',
                description: 'Committed to meeting every promised timeline without compromise'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#F5F5F5] p-8 rounded-lg text-center hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-[#C5A059]/20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C5A059] to-[#B39049] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-[#1A1A1A]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-[#C5A059] rounded-lg -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <p className="text-[#C5A059] text-sm tracking-[0.3em] font-medium mb-4">SINCE 1987</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#1A1A1A]">
                  Crafting Excellence<br />
                  <span className="text-[#C5A059]">For Generations</span>
                </h2>
                <div className="w-24 h-1 bg-[#C5A059]"></div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  For over three decades, <strong>Arihant 4Man</strong> has been synonymous with premium fabrics 
                  and impeccable tailoring. What began as a small fabric shop in the heart of Rajkot has evolved 
                  into a distinguished destination for discerning gentlemen.
                </p>
                <p className="text-lg">
                  Our founder's vision was simple yet profound: to bring world-class fabrics and master tailoring 
                  to every man who values quality and craftsmanship.
                </p>
              </div>

              <div className="pt-6">
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#C5A059] text-[#C5A059] font-medium tracking-wide rounded hover:bg-[#C5A059] hover:text-white transition-all group"
                >
                  Discover Our Story
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-[#C5A059] text-sm tracking-[0.3em] font-medium mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What Our <span className="text-[#C5A059]">Clients</span> Say
            </h2>
            <div className="w-24 h-1 bg-[#C5A059] mx-auto"></div>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-[#C5A059] text-2xl">★</span>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-center leading-relaxed mb-8 text-gray-200 font-serif italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-center text-[#C5A059] font-medium tracking-wide">
                — {testimonials[currentTestimonial].author}
              </p>
            </motion.div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={() => setCurrentTestimonial((prev) => 
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )}
                className="p-3 bg-white/10 hover:bg-[#C5A059] rounded-full transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-[#C5A059] w-8' : 'bg-white/30 w-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial((prev) => 
                  (prev + 1) % testimonials.length
                )}
                className="p-3 bg-white/10 hover:bg-[#C5A059] rounded-full transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-[#1A1A1A]">
              Ready to Elevate<br />
              <span className="text-[#C5A059]">Your Wardrobe?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Visit our store for personalized service and discover the perfect fabrics 
              for your bespoke tailoring needs.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-12 py-4 bg-[#C5A059] text-white text-lg font-medium tracking-wide rounded hover:bg-[#B39049] transition-all transform hover:scale-105 shadow-xl group"
            >
              Contact Us Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
