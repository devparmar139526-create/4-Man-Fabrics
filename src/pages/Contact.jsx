import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Car, Coffee, Moon } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-blue-400 mb-2 text-lg">Get in Touch</p>
            <h1 className="text-5xl font-bold mb-6">Contact Arihant 4Man</h1>
            <p className="text-2xl mb-4">Let's Create Together</p>
            <p className="text-lg mb-8">
              Ready to bring your fashion vision to life? Our expert team is here to guide you through every step 
              of creating your perfect bespoke garment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919913323064" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                <span>📞</span> Call Now
              </a>
              <a href="https://wa.me/919913323064" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                <span>💬</span> WhatsApp
              </a>
              <a href="mailto:4manfabrics@gmail.com" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                <span>✉️</span> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <a href="tel:+919913323064" className="flex-1 min-w-[200px] max-w-[250px] p-4 hover:bg-gray-50 rounded-lg transition">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold text-gray-800">Call Now</h3>
            </a>
            <a href="https://wa.me/919913323064" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] max-w-[250px] p-4 hover:bg-gray-50 rounded-lg transition">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold text-gray-800">WhatsApp</h3>
            </a>
            <a href="mailto:4manfabrics@gmail.com" className="flex-1 min-w-[200px] max-w-[250px] p-4 hover:bg-gray-50 rounded-lg transition">
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="font-semibold text-gray-800">Email Us</h3>
            </a>
            <div className="flex-1 min-w-[200px] max-w-[250px] p-4 hover:bg-gray-50 rounded-lg transition cursor-pointer">
              <div className="text-3xl mb-2">🏪</div>
              <h3 className="font-semibold text-gray-800">Visit Store</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
            <p className="text-xl text-gray-600">Let's Start a Conversation</p>
            <p className="text-gray-500 mt-2 max-w-3xl mx-auto">
              Whether you have questions about our services, need a custom consultation, or want to visit our showroom, 
              we're here to help you every step of the way.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Reach Out to Us</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Visit Our Store */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Visit Our Store</h4>
                      <p className="text-gray-600 leading-relaxed">
                        1st Floor, City Center, 105-108, Divanpara Main Rd, opp. old khadpith, 
                        Gujari Bazar, Diwanpara, Rajkot, Gujarat 360005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Call Us</h4>
                      <a href="tel:+919913323064" className="text-blue-600 hover:underline text-lg">
                        +91 99133 23064
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Email Us</h4>
                      <a href="mailto:4manfabrics@gmail.com" className="text-blue-600 hover:underline">
                        4manfabrics@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Business Hours</h4>
                      <p className="text-gray-600">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message*
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        required
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-xl text-gray-600">Find Us on the Map</p>
            <p className="text-gray-500 mt-2">
              Located in the heart of Rajkot, our showroom offers easy access and convenient parking. 
              Come experience our premium collection in person.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-700 font-semibold">Interactive Map</p>
                    <p className="text-gray-600 text-sm">Loading location...</p>
                  </div>
                </div>
              </div>

              {/* Store Information */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Arihant 4Man Fabrics</h3>
                <p className="text-lg text-gray-600 mb-6">Premium Tailoring & Fabrics</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Address:</h4>
                    <p className="text-gray-600 leading-relaxed">
                      1st Floor, City Center<br />
                      105-108, Divanpara Main Rd<br />
                      opp. old khadpith, Gujari Bazar<br />
                      Diwanpara, Rajkot, Gujarat 360005
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Contact:</h4>
                    <p className="text-gray-600">📞 <a href="tel:+919913323064" className="text-blue-600 hover:underline">+91 99133 23064</a></p>
                    <p className="text-gray-600">✉️ <a href="mailto:4manfabrics@gmail.com" className="text-blue-600 hover:underline">4manfabrics@gmail.com</a></p>
                    <p className="text-gray-600">🕒 Mon-Sat: 10AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-3">🚗</div>
              <h4 className="font-bold text-gray-800 mb-2">Parking Available</h4>
              <p className="text-sm text-gray-600">Convenient parking near our showroom</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-3">🕒</div>
              <h4 className="font-bold text-gray-800 mb-2">Extended Hours</h4>
              <p className="text-sm text-gray-600">Open till 8 PM for your convenience</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-3">☕</div>
              <h4 className="font-bold text-gray-800 mb-2">Welcome Area</h4>
              <p className="text-sm text-gray-600">Comfortable seating while you browse</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-3">🌙</div>
              <h4 className="font-bold text-gray-800 mb-2">After-Hours Support</h4>
              <p className="text-sm text-gray-600">Concierge available beyond standard timings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
