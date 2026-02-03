import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Sparkles, Shirt, ShoppingBag } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <motion.div 
      className="min-h-screen bg-heritage-ivory"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="relative bg-[#1D4E38] text-heritage-ivory py-20 md:py-32 overflow-hidden min-h-[calc(100vh-80px)] md:min-h-0 flex items-center">
        {/* Vertical Bars Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(212, 196, 168, 0.25) 0px, rgba(212, 196, 168, 0.25) 2px, transparent 2px, transparent 40px)' }}></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-heritage-champagne/60 text-xs tracking-[0.3em] uppercase mb-12 md:mb-20">Our Story</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-thin text-white mb-10 md:mb-16 leading-none px-4">
              About 4 Man Fabrics
            </h1>
            <p className="text-base text-white/50 font-light mb-20 leading-relaxed tracking-wide max-w-2xl mx-auto">
              Three decades of excellence in premium fabrics
            </p>
            <div className="flex items-center justify-center gap-8">
              <Link to="/wardrobe">
                <motion.button 
                  className="text-xs text-white/80 tracking-[0.2em] uppercase hover:text-white transition-all duration-500 border-b border-transparent hover:border-white pb-1"
                  whileHover={{ y: -2 }}
                >
                  Our Collection
                </motion.button>
              </Link>
              <div className="w-px h-4 bg-white/20"></div>
              <Link to="/contact">
                <motion.button 
                  className="text-xs text-white/80 tracking-[0.2em] uppercase hover:text-white transition-all duration-500 border-b border-transparent hover:border-white pb-1"
                  whileHover={{ y: -2 }}
                >
                  Contact
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Years of Excellence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-6xl font-bold text-heritage-champagne mb-2">35+</h2>
            <p className="text-2xl text-black">Years of Excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-black">A Legacy of Excellence</h2>
            <div className="space-y-6 text-lg text-black leading-relaxed">
              <p>
                Founded in 1987, 4man began as a small fabric store with a big vision: to provide customers with the finest quality fabrics and tailoring services. The name "4man" represents our commitment to serving men of all ages and preferences with premium wardrobe solutions.
              </p>
              <p>
                Over the decades, we've grown from a modest establishment to a renowned name in premium fabrics and tailoring. Our dedication to quality has remained unwavering, as we continue to source exceptional materials from across the globe.
              </p>
              <p>
                Today, 4man stands as a testament to our founders' vision, serving generations of customers who value quality, craftsmanship, and personalized service.
              </p>
              <div className="text-center mt-8">
                <Link to="/wardrobe">
                  <motion.button 
                    className="bg-heritage-forest text-heritage-ivory px-8 py-3 rounded-lg font-semibold transition-all duration-500 ease-in-out border border-heritage-forest hover:bg-transparent hover:border-heritage-champagne hover:text-heritage-champagne"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Collection
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Established Badge */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="inline-block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-black animate-pulse"></div>
            {/* Middle ring */}
            <div className="absolute inset-2 rounded-full border border-black/50"></div>
            {/* Inner content */}
            <div className="relative border-4 border-black rounded-full p-8 bg-white">
              <p className="text-4xl font-bold text-black">1987</p>
              <p className="text-xl text-black mt-2">Established</p>
              <p className="text-lg text-black mt-1">Heritage Brand</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">Our Purpose</h2>
            <p className="text-xl text-black">Mission & Vision</p>
            <p className="text-lg text-black mt-2">Guiding principles that drive our commitment to excellence and innovation in premium tailoring.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg border border-[#D4C4A8] hover:border-[#D4C4A8] transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 text-heritage-champagne">Our Mission</h3>
              <p className="text-black mb-4">
                To provide exceptional fabrics and tailoring services that exceed customer expectations, helping individuals express their personal style with confidence and distinction.
              </p>
              <p className="text-black">
                We believe in the transformative power of well-crafted clothing and are committed to making premium quality accessible to our discerning clientele.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg border border-[#D4C4A8] hover:border-[#D4C4A8] transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 text-heritage-champagne">Our Vision</h3>
              <p className="text-black mb-4">
                To be recognized as the premier destination for superior fabrics and bespoke tailoring solutions, setting industry standards for quality, creativity, and customer satisfaction.
              </p>
              <p className="text-black">
                We aspire to preserve traditional craftsmanship while embracing innovation, ensuring that the 4man legacy continues to thrive for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">Our Founders</h2>
            <p className="text-xl text-black">The Vision Behind 4man</p>
            <p className="text-lg text-black mt-2">Meet the passionate individuals who built 4man into the premium fashion brand it is today.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ankur Jain */}
            <div className="bg-white rounded-lg overflow-hidden border border-[#D4C4A8] hover:border-[#D4C4A8] transition-all duration-500">
              <div className="h-64 bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shirt size={48} className="text-black" />
                  </div>
                  <p className="text-lg font-semibold text-black">Ankur Jain</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-[#1D4E38] font-semibold">Founder</span>
                  <span className="text-black">Since 1987</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-black">Ankur Jain</h4>
                <p className="text-black text-sm leading-relaxed">
                  Founder of 4man, a men's fashion brand with over three decades of legacy. Started with a small showroom and a big vision to provide complete wardrobe solutions for the discerning Indian male.
                </p>
              </div>
            </div>

            {/* Shilpa Jain */}
            <div className="bg-white rounded-lg overflow-hidden border border-[#D4C4A8] hover:border-[#D4C4A8] transition-all duration-500">
              <div className="h-64 bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <ShoppingBag size={48} className="text-black" />
                  </div>
                  <p className="text-lg font-semibold text-black">Shilpa Jain</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-[#1D4E38] font-semibold">Co-Founder</span>
                  <span className="text-black">Team Leader</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-black">Shilpa Jain</h4>
                <p className="text-black text-sm leading-relaxed">
                  Sister of Ankur Jain and co-founder of 4man. She has won customer confidence by offering premium quality fabrics at the best prices, while leading the talented workforce to maintain excellence and consistent quality.
                </p>
              </div>
            </div>

            {/* Deepti Jain */}
            <div className="bg-white rounded-lg overflow-hidden border border-[#D4C4A8] hover:border-[#D4C4A8] transition-all duration-500">
              <div className="h-64 bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Sparkles size={48} className="text-black" />
                  </div>
                  <p className="text-lg font-semibold text-black">Deepti Jain</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-[#1D4E38] font-semibold">Co-Founder</span>
                  <span className="text-black">Innovation Lead</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-black">Deepti Jain</h4>
                <p className="text-black text-sm leading-relaxed">
                  Co-founder bringing fresh perspective and innovative vision to the brand. She curates exclusive fabric collections and ensures personalized customer experiences through modern trends and timeless elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1D4E38] text-heritage-ivory">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the 4man Difference</h2>
          <p className="text-lg mb-8 text-heritage-ivory/80">Visit our store to explore our premium fabric collection or schedule a consultation for your custom tailoring needs.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <motion.button 
                className="bg-heritage-ivory text-heritage-forest px-8 py-3 rounded-lg font-semibold transition-all duration-500 hover:bg-transparent hover:border hover:border-heritage-ivory hover:text-heritage-ivory"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
            <Link to="/wardrobe">
              <motion.button 
                className="bg-heritage-champagne text-heritage-forest px-8 py-3 rounded-lg font-semibold transition-all duration-500 border-2 border-heritage-champagne hover:bg-transparent hover:text-heritage-champagne"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Collection
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
