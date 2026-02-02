import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Scissors, Watch, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };
  const customizationOptions = [
    { icon: '🧵', count: '4000+', label: 'Fabrics', description: 'Premium fabrics from around the world' },
    { icon: '🎨', count: '300+', label: 'Linings', description: 'Luxurious interior finishes' },
    { icon: '👔', count: '4', label: 'Lapels', description: 'Classic to contemporary designs' },
    { icon: '🔘', count: '24', label: 'Buttons', description: 'Handcrafted button selections' },
    { icon: '🪙', count: '8', label: 'Pockets', description: 'Functional and stylish pockets' },
    { icon: '✂️', count: '3', label: 'Vents', description: 'Tailored back vent styles' },
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-blue-400 mb-2 text-lg">Our Services</p>
            <h1 className="text-5xl font-bold mb-6">Premium Tailoring Services</h1>
            <p className="text-2xl mb-4">Crafted with Excellence</p>
            <p className="text-lg mb-8">
              Discover our comprehensive range of bespoke tailoring services designed to bring your vision to life 
              with unparalleled craftsmanship and premium materials.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Explore Services
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold transition">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Bespoke Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our bespoke approach to designing is collaborative, hands-on, and consumer-centric. 
              We combine a unique blend of classic craftsmanship with contemporary designs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✏️</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Designing</h3>
              <p className="text-gray-600">Turning creative ideas into unique fashion statements</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✂️</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Tailoring</h3>
              <p className="text-gray-600">Expert craftsmanship delivering perfect fits every time</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👔</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Accessories</h3>
              <p className="text-gray-600">Complementary pieces that complete your distinguished look</p>
            </div>
          </div>
        </div>
      </section>

      {/* Designing Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
                  <span className="font-semibold">3 Service Features</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Designing Excellence</h2>
                <p className="text-xl text-gray-600 mb-6">Where creativity meets craftsmanship</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Arihant 4Man is a designer studio where great designing ideas are turned into reality and perfect style. 
                  We make sure that our customers are happy with our services and rich designs. Our team combines artistic 
                  vision with technical expertise to create garments that are both aesthetically pleasing and functionally excellent.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                    <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                    <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                    <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                    <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                    <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
                  <span className="font-semibold">3 Service Features</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Tailoring Excellence</h2>
                <p className="text-xl text-gray-600 mb-6">Precision in every stitch</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Having clothes that fits your body type is extremely important, for that you must have good options available. 
                  Arihant 4Man has a well experienced and talented team of tailors providing state of the art Customized Suits, 
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
                <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4">
                  <span className="font-semibold">3 Service Features</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">Accessories Excellence</h2>
                <p className="text-xl text-gray-600 mb-6">Complete your look</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Accessories add personality to your looks. Accessories are an essential part of a man's wardrobe, 
                  they also work as great gifts. Accessories are always a great idea to finish the look with pieces 
                  that adds a little extra to your style. Arihant has best collection of accessories that includes 
                  everything from elegant neck ties, socks, handkerchiefs, belts sunglasses.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-pink-100 text-pink-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                    <div className="bg-pink-100 text-pink-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                    <div className="bg-pink-100 text-pink-600 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
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
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-200" style={{ zIndex: -1 }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Infinite Possibilities</h2>
            <p className="text-xl text-gray-600">Customization Options</p>
            <p className="text-gray-500 mt-2">
              Discover endless possibilities with our comprehensive range of customization options, designed to bring 
              your unique vision to life with unparalleled attention to detail.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {customizationOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="text-4xl mb-3">{option.icon}</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{option.count}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{option.label}</h4>
                <p className="text-gray-600 text-xs">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">4000+</div>
              <p className="text-gray-700">Fabric Options</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Customization Points</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">∞</div>
              <p className="text-gray-700">Unique Combinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Look?</h2>
          <p className="text-lg mb-8">
            Book a consultation with our experts today and take the first step towards owning bespoke garments 
            that reflect your unique style and personality.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
