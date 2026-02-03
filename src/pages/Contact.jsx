import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Car, Coffee, Moon, ShoppingBag } from 'lucide-react';

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
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
      <section className="relative bg-[#1D4E38] text-heritage-ivory py-20 md:py-32 min-h-[calc(100vh-80px)] md:min-h-0 flex items-center">
        {/* Cross-hatch Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-8" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(212, 196, 168, 0.15) 0px, rgba(212, 196, 168, 0.15) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, rgba(212, 196, 168, 0.15) 0px, rgba(212, 196, 168, 0.15) 1px, transparent 1px, transparent 30px)' }}></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-heritage-champagne/60 text-xs tracking-[0.3em] uppercase mb-12 md:mb-20">Get in Touch</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-thin text-white mb-10 md:mb-16 leading-none px-4">
              Contact
            </h1>
            <p className="text-base text-white/50 font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
              Let's bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-heritage-sage border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="tel:+919913323064" className="p-6 hover:bg-heritage-champagne/10 rounded-lg transition-all duration-500 border border-transparent hover:border-heritage-champagne text-center">
              <div className="flex justify-center mb-3">
                <Phone size={32} className="text-heritage-forest" />
              </div>
              <h3 className="font-semibold text-heritage-forest">Call Now</h3>
            </a>
            <a href="https://wa.me/919913323064" target="_blank" rel="noopener noreferrer" className="p-6 hover:bg-heritage-champagne/10 rounded-lg transition-all duration-500 border border-transparent hover:border-heritage-champagne text-center">
              <div className="flex justify-center mb-3">
                <MessageSquare size={32} className="text-heritage-forest" />
              </div>
              <h3 className="font-semibold text-heritage-forest">WhatsApp</h3>
            </a>
            <a href="mailto:4manfabrics@gmail.com" className="p-6 hover:bg-heritage-champagne/10 rounded-lg transition-all duration-500 border border-transparent hover:border-heritage-champagne text-center">
              <div className="flex justify-center mb-3">
                <Mail size={32} className="text-heritage-forest" />
              </div>
              <h3 className="font-semibold text-heritage-forest">Email Us</h3>
            </a>
            <div className="p-6 hover:bg-heritage-champagne/10 rounded-lg transition-all duration-500 cursor-pointer border border-transparent hover:border-heritage-champagne text-center">
              <div className="flex justify-center mb-3">
                <ShoppingBag size={32} className="text-heritage-forest" />
              </div>
              <h3 className="font-semibold text-heritage-forest">Visit Store</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-24 bg-heritage-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-heritage-forest">Connect With Us</h2>
            <p className="text-xl text-heritage-forest/80">Let's Start a Conversation</p>
            <p className="text-heritage-forest/70 mt-2 max-w-3xl mx-auto">
              Whether you have questions about our services, need a custom consultation, or want to visit our showroom, 
              we're here to help you every step of the way.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-heritage-sage rounded-lg border border-[#E5E7EB] hover:border-heritage-champagne transition-all duration-500 p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-heritage-forest">Reach Out to Us</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Visit Our Store */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-heritage-champagne/20 text-heritage-forest rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="inline" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-heritage-forest">Visit Our Store</h4>
                      <p className="text-heritage-forest/80 leading-relaxed">
                        1st Floor, City Center, 105-108, Divanpara Main Rd, opp. old khadpith, 
                        Gujari Bazar, Diwanpara, Rajkot, Gujarat 360005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-heritage-champagne/20 text-heritage-forest rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="inline" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-heritage-forest">Call Us</h4>
                      <a href="tel:+919913323064" className="text-heritage-champagne hover:text-heritage-forest hover:underline text-lg transition-colors duration-500">
                        +91 99133 23064
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-heritage-champagne/20 text-heritage-forest rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="inline" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-heritage-forest">Email Us</h4>
                      <a href="mailto:4manfabrics@gmail.com" className="text-heritage-champagne hover:text-heritage-forest hover:underline transition-colors duration-500">
                        4manfabrics@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-heritage-champagne/20 text-heritage-forest rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="inline" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-heritage-forest">Business Hours</h4>
                      <p className="text-heritage-forest/80">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p className="text-heritage-forest/80">Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold tracking-wide text-heritage-forest mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:ring-1 focus:ring-heritage-champagne focus:border-heritage-champagne outline-none transition-all duration-500 bg-heritage-ivory text-heritage-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold tracking-wide text-heritage-forest mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:ring-1 focus:ring-heritage-champagne focus:border-heritage-champagne outline-none transition-all duration-500 bg-heritage-ivory text-heritage-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold tracking-wide text-heritage-forest mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:ring-1 focus:ring-heritage-champagne focus:border-heritage-champagne outline-none transition-all duration-500 bg-heritage-ivory text-heritage-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold tracking-wide text-heritage-forest mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:ring-1 focus:ring-heritage-champagne focus:border-heritage-champagne outline-none transition-all duration-500 bg-heritage-ivory text-heritage-forest"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold tracking-wide text-heritage-forest mb-2">
                        Message*
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        required
                        rows="4"
                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:ring-1 focus:ring-heritage-champagne focus:border-heritage-champagne outline-none transition-all duration-500 resize-none bg-heritage-ivory text-heritage-forest"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-[#1D4E38] text-white py-3 rounded-lg font-semibold tracking-wide transition-all duration-500 border-2 border-[#1D4E38] hover:border-[#A8E6CF]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-heritage-sage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-heritage-forest">Visit Our Store</h2>
            <p className="text-xl text-heritage-forest/80">Find Us on the Map</p>
            <p className="text-heritage-forest/70 mt-2">
              Located in the heart of Rajkot, our showroom offers easy access and convenient parking. 
              Come experience our premium collection in person.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div className="bg-heritage-sage rounded-lg overflow-hidden border border-[#E5E7EB] hover:border-heritage-champagne transition-all duration-500 h-96">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-heritage-sage to-heritage-ivory">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <MapPin size={64} className="text-gray-400" />
                    </div>
                    <p className="text-heritage-forest font-semibold">Interactive Map</p>
                    <p className="text-heritage-forest/70 text-sm">Loading location...</p>
                  </div>
                </div>
              </div>

              {/* Store Information */}
              <div className="bg-heritage-ivory rounded-lg p-8 border border-[#E5E7EB] hover:border-heritage-champagne transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 text-heritage-forest">4-Man-Fabrics</h3>
                <p className="text-lg text-heritage-forest/80 mb-6">Premium Tailoring & Fabrics</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-heritage-forest mb-2">Address:</h4>
                    <p className="text-heritage-forest/80 leading-relaxed">
                      1st Floor, City Center<br />
                      105-108, Divanpara Main Rd<br />
                      opp. old khadpith, Gujari Bazar<br />
                      Diwanpara, Rajkot, Gujarat 360005
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-heritage-forest mb-2">Contact:</h4>
                    <p className="text-heritage-forest/80"><Phone size={16} className="inline mr-1" /> <a href="tel:+919913323064" className="text-heritage-champagne hover:text-heritage-forest hover:underline transition-colors duration-500">+91 99133 23064</a></p>
                    <p className="text-heritage-forest/80"><Mail size={16} className="inline mr-1" /> <a href="mailto:4manfabrics@gmail.com" className="text-heritage-champagne hover:text-heritage-forest hover:underline transition-colors duration-500">4manfabrics@gmail.com</a></p>
                    <p className="text-heritage-forest/80"><Clock size={16} className="inline mr-1" /> Mon-Sat: 10AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-heritage-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="bg-heritage-sage p-6 rounded-lg border border-[#E5E7EB] hover:border-heritage-champagne transition-all duration-500 text-center">
              <div className="flex justify-center mb-3">
                <Car size={40} className="text-heritage-forest" />
              </div>
              <h4 className="font-bold text-heritage-forest mb-2">Parking Available</h4>
              <p className="text-sm text-heritage-forest/80">Convenient parking near our showroom</p>
            </div>

            <div className="bg-heritage-sage p-6 rounded-lg border border-[#E5E7EB] hover:border-heritage-champagne transition-all duration-500 text-center">
              <div className="flex justify-center mb-3">
                <Clock size={40} className="text-heritage-forest" />
              </div>
              <h4 className="font-bold text-heritage-forest mb-2">Extended Hours</h4>
              <p className="text-sm text-heritage-forest/80">Open till 8 PM for your convenience</p>
            </div>

            <div className="bg-heritage-sage p-6 rounded-lg border border-[#E5E7EB] hover:border-heritage-champagne transition-all duration-500 text-center">
              <div className="flex justify-center mb-3">
                <Coffee size={40} className="text-heritage-forest" />
              </div>
              <h4 className="font-bold text-heritage-forest mb-2">Welcome Area</h4>
              <p className="text-sm text-heritage-forest/80">Comfortable seating while you browse</p>
            </div>

            <div className="bg-heritage-sage p-6 rounded-lg border border-[#E5E7EB] hover:border-heritage-champagne transition-all duration-500 text-center">
              <div className="flex justify-center mb-3">
                <Moon size={40} className="text-heritage-forest" />
              </div>
              <h4 className="font-bold text-heritage-forest mb-2">After-Hours Support</h4>
              <p className="text-sm text-heritage-forest/80">Concierge available beyond standard timings</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
