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
    <motion.div 
      className="min-h-screen bg-heritage-ivory"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1D4E38] py-20 md:py-0">
        {/* Diagonal Stripes Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(212, 196, 168, 0.3) 0px, rgba(212, 196, 168, 0.3) 2px, transparent 2px, transparent 30px)' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-heritage-champagne/60 text-xs tracking-[0.3em] uppercase mb-12 md:mb-20"
            >
              Since 1987
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-thin text-white mb-10 md:mb-16 leading-tight sm:leading-none">
              Elevate Your Elegance
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base text-white/50 font-light mb-20 leading-relaxed tracking-wide"
            >
              Where artistry meets precision
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center gap-8"
            >
              <Link 
                to="/wardrobe"
                className="text-xs text-white/80 tracking-[0.2em] uppercase hover:text-white transition-all duration-500 border-b border-transparent hover:border-white pb-1"
              >
                Explore
              </Link>
              <div className="w-px h-4 bg-white/20"></div>
              <Link 
                to="/contact"
                className="text-xs text-white/80 tracking-[0.2em] uppercase hover:text-white transition-all duration-500 border-b border-transparent hover:border-white pb-1"
              >
                Contact
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center gap-6 sm:gap-12 mt-12 sm:mt-16 text-sm px-4"
            >
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-serif font-light text-heritage-champagne">35+</p>
                <p className="text-heritage-ivory/70 mt-1 text-xs sm:text-sm">Years Excellence</p>
              </div>
              <div className="w-px h-12 bg-heritage-champagne/20"></div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-serif font-light text-heritage-champagne">4000+</p>
                <p className="text-heritage-ivory/70 mt-1 text-xs sm:text-sm">Fabric Options</p>
              </div>
              <div className="w-px h-12 bg-heritage-champagne/20"></div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-serif font-light text-heritage-champagne">150+</p>
                <p className="text-heritage-ivory/70 mt-1 text-xs sm:text-sm">Possibilities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-heritage-sage">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-heritage-champagne text-sm tracking-[0.3em] font-medium mb-4">OUR PROMISE</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-heritage-forest tracking-tight">
              Our Commitment to Excellence
            </h2>
            <div className="w-24 h-1 bg-heritage-champagne mx-auto"></div>
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
                transition={{ delay: index * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="bg-heritage-ivory p-10 border border-heritage-stone text-center transition-all duration-700 ease-in-out group hover:border-heritage-champagne"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-heritage-champagne to-heritage-forest rounded-full mb-6 group-hover:scale-110 transition-transform duration-700">
                  <feature.icon className="text-heritage-ivory" size={36} />
                </div>
                <h3 className="text-xl font-serif font-light mb-4 text-[#1D4E38] tracking-tight">{feature.title}</h3>
                <p className="text-[#1D4E38] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-heritage-ivory">
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
                <motion.img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-heritage-champagne rounded-lg -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <p className="text-heritage-champagne text-sm tracking-[0.3em] font-medium mb-4">SINCE 1987</p>
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-[#1D4E38] tracking-tight">
                  Crafting Excellence<br />
                  <span className="text-heritage-champagne">For Generations</span>
                </h2>
                <div className="w-24 h-1 bg-heritage-champagne"></div>
              </div>

              <div className="space-y-4 text-[#1D4E38] leading-relaxed">
                <p className="text-lg">
                  For over three decades, <strong>4-Man-Fabrics</strong> has been synonymous with premium fabrics 
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
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-heritage-forest text-heritage-forest font-medium tracking-wide rounded hover:bg-heritage-forest hover:text-heritage-ivory hover:border-heritage-champagne transition-all duration-500 ease-in-out group"
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
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-heritage-champagne text-sm tracking-[0.3em] font-medium mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-black">
              What Our <span className="text-heritage-champagne">Clients</span> Say
            </h2>
            <div className="w-24 h-1 bg-heritage-champagne mx-auto"></div>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F0F7F4] p-8 md:p-12 rounded-lg border border-[#D4C4A8]"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-heritage-champagne text-2xl">★</span>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-center leading-relaxed mb-8 text-black font-serif italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-center text-black font-medium tracking-wide">
                — {testimonials[currentTestimonial].author}
              </p>
            </motion.div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <motion.button
                onClick={() => setCurrentTestimonial((prev) => 
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )}
                className="p-3 bg-[#D4C4A8] hover:bg-heritage-champagne rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} className="text-black" />
              </motion.button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-heritage-champagne w-8' : 'bg-[#D4C4A8] w-2'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={() => setCurrentTestimonial((prev) => 
                  (prev + 1) % testimonials.length
                )}
                className="p-3 bg-[#D4C4A8] hover:bg-heritage-champagne rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} className="text-black" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-heritage-sage">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-[#1D4E38]">
              Ready to Elevate<br />
              <span className="text-heritage-champagne">Your Wardrobe?</span>
            </h2>
            <p className="text-xl text-[#1D4E38] max-w-2xl mx-auto leading-relaxed">
              Visit our store for personalized service and discover the perfect fabrics 
              for your bespoke tailoring needs.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-12 py-4 bg-heritage-forest text-heritage-ivory text-lg font-medium tracking-wide rounded border border-heritage-forest hover:bg-transparent hover:border-heritage-champagne hover:text-heritage-champagne transition-all duration-500 ease-in-out transform hover:scale-[1.02] group"
            >
              Contact Us Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
