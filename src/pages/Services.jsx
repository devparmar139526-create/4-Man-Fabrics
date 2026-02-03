import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Scissors, Watch, Users, CheckCircle, ArrowRight, Shirt, Binary, CircleDot, Wallet, SplitSquareVertical, PenTool } from 'lucide-react';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };
  const customizationOptions = [
    { icon: Binary, count: '4000+', label: 'Fabrics', description: 'Premium fabrics from around the world' },
    { icon: Palette, count: '300+', label: 'Linings', description: 'Luxurious interior finishes' },
    { icon: Shirt, count: '4', label: 'Lapels', description: 'Classic to contemporary designs' },
    { icon: CircleDot, count: '24', label: 'Buttons', description: 'Handcrafted button selections' },
    { icon: Wallet, count: '8', label: 'Pockets', description: 'Functional and stylish pockets' },
    { icon: SplitSquareVertical, count: '3', label: 'Vents', description: 'Tailored back vent styles' },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Meet with our experts to discuss your needs and preferences',
    },
    {
      number: '02',
      title: 'Design & Measurement',
      description: 'Select designs, fabrics and get precise measurements taken',
    },
    {
      number: '03',
      title: 'Crafting',
      description: 'Our skilled artisans bring your design to life with meticulous attention to detail',
    },
    {
      number: '04',
      title: 'Final Fitting',
      description: 'Try on your custom creation and receive any necessary adjustments',
    },
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
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(212, 196, 168, 0.3) 1px, transparent 1px)', backgroundSize: '25px 25px' }}></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-heritage-champagne/60 text-xs tracking-[0.3em] uppercase mb-12 md:mb-20">Our Services</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-thin text-white mb-10 md:mb-16 leading-none px-4">
              Premium Tailoring
            </h1>
            <p className="text-base text-white/50 font-light mb-20 leading-relaxed tracking-wide max-w-2xl mx-auto">
              Bespoke services crafted with precision
            </p>
            <div className="flex items-center justify-center gap-8">
              <motion.button 
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs text-white/80 tracking-[0.2em] uppercase hover:text-white transition-all duration-500 border-b border-transparent hover:border-white pb-1 cursor-pointer"
                whileHover={{ y: -2 }}
              >
                View Services
              </motion.button>
              <div className="w-px h-4 bg-white/20"></div>
              <a href="https://wa.me/919913323064" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  className="text-xs text-white/80 tracking-[0.2em] uppercase hover:text-white transition-all duration-500 border-b border-transparent hover:border-white pb-1"
                  whileHover={{ y: -2 }}
                >
                  Book Now
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="services-section" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold mb-4 text-black">Our Bespoke Approach</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Our bespoke approach to designing is collaborative, hands-on, and consumer-centric. 
              We combine a unique blend of classic craftsmanship with contemporary designs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <div className="w-24 h-24 bg-white border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool size={36} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">Designing</h3>
              <p className="text-black">Turning creative ideas into unique fashion statements</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <div className="w-24 h-24 bg-white border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors size={36} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">Tailoring</h3>
              <p className="text-black">Expert craftsmanship delivering perfect fits every time</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <div className="w-24 h-24 bg-white border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt size={36} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black">Accessories</h3>
              <p className="text-black">Complementary pieces that complete your distinguished look</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Designing Service */}
      <section className="py-24 bg-heritage-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-heritage-champagne/20 text-heritage-champagne px-4 py-2 rounded-full mb-4">
                  <span className="font-semibold">3 Service Features</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-heritage-forest">Designing Excellence</h2>
                <p className="text-xl text-heritage-forest/80 mb-6">Where creativity meets craftsmanship</p>
                <p className="text-heritage-forest/80 leading-relaxed mb-6">
                  4-Man-Fabrics is a designer studio where great designing ideas are turned into reality and perfect style. 
                  We make sure that our customers are happy with our services and rich designs. Our team combines artistic 
                  vision with technical expertise to create garments that are both aesthetically pleasing and functionally excellent.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-heritage-champagne/20 text-heritage-forest rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Custom Design Consultation</h4>
                      <p className="text-gray-600">One-on-one sessions with our expert designers to bring your vision to life</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-heritage-champagne/20 text-heritage-forest rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Trend Analysis</h4>
                      <p className="text-gray-600">Up-to-date knowledge of global fashion trends adapted for local tastes</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-heritage-champagne/20 text-heritage-forest rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">3D Visualization</h4>
                      <p className="text-gray-600">Preview your designs before production with our advanced 3D modeling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailoring Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-[#D4C4A8]/20 text-[#1D4E38] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Perfect Measurements</h4>
                      <p className="text-gray-600">Detailed body measurements for the perfect fit every time</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-[#D4C4A8]/20 text-[#1D4E38] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Fabric Selection</h4>
                      <p className="text-gray-600">Choose from thousands of premium fabrics from around the world</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-[#D4C4A8]/20 text-[#1D4E38] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Style Customization</h4>
                      <p className="text-gray-600">Multiple options for collars, cuffs, buttons, pockets and more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-[#D4C4A8]/20 text-[#1D4E38] px-4 py-2 rounded-full mb-4">
                  <span className="font-semibold">3 Service Features</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Tailoring Excellence</h2>
                <p className="text-xl text-gray-600 mb-6">Precision in every stitch</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Having clothes that fits your body type is extremely important, for that you must have good options available. 
                  4-Man-Fabrics has a well experienced and talented team of tailors providing state of the art Customized Suits, 
                  Shirts, Trousers, Wedding Outfits and much more. Our Custom tailoring services includes perfection in measurements, 
                  choice of fabric, color, pattern, collar and cuffs, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#D4C4A8]/20 text-[#1D4E38] px-4 py-2 rounded-full mb-4">
                  <span className="font-semibold">3 Service Features</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Accessories Excellence</h2>
                <p className="text-xl text-gray-600 mb-6">Complete your look</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Accessories add personality to your looks. Accessories are an essential part of a man's wardrobe, 
                  they also work as great gifts. Accessories are always a great idea to finish the look with pieces 
                  that adds a little extra to your style. 4-Man-Fabrics has the finest collection of accessories that includes 
                  everything from elegant neck ties, socks, handkerchiefs, belts sunglasses.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-[#D4C4A8]/20 text-[#1D4E38] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Premium Collection</h4>
                      <p className="text-gray-600">Curated selection of high-quality accessories to complement any outfit</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-[#D4C4A8]/20 text-[#1D4E38] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Custom Matching</h4>
                      <p className="text-gray-600">Expert advice on pairing accessories with your attire</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-[#D4C4A8]/20 text-[#1D4E38] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Gift Sets</h4>
                      <p className="text-gray-600">Beautifully packaged gift sets for special occasions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">
              From the first consultation to the final fitting, we ensure a smooth and enjoyable experience.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-[#1D4E38] to-[#D4C4A8] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-[#E5E7EB]" style={{ zIndex: -1 }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1D4E38] to-[#A8E6CF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Look?</h2>
          <p className="text-lg mb-8">
            Book a consultation with our experts today and take the first step towards owning bespoke garments 
            that reflect your unique style and personality.
          </p>
          <a href="https://wa.me/919913323064" target="_blank" rel="noopener noreferrer">
            <motion.button 
              className="bg-white hover:border-[#A8E6CF] text-heritage-forest px-8 py-3 rounded-lg font-semibold transition border-2 border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Consultation
            </motion.button>
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
