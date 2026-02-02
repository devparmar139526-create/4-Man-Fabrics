import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Sparkles } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A059] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <h2 className="text-3xl mb-4">About <span className="text-blue-400">4man</span></h2>
            <p className="text-xl mb-6">Legacy of Excellence</p>
            <p className="text-lg mb-8">Discover the journey of craftsmanship and tradition that has made us a trusted name in premium fabrics and bespoke tailoring for over three decades.</p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Explore Collection
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Years of Excellence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-blue-600 mb-2">35+</h2>
            <p className="text-2xl text-gray-700">Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">A Legacy of Excellence</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Explore Our Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Established Badge */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block border-4 border-gray-800 rounded-full p-8">
            <p className="text-4xl font-bold text-gray-800">1987</p>
            <p className="text-xl text-gray-600 mt-2">Established</p>
            <p className="text-lg text-gray-600 mt-1">Heritage Brand</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Purpose</h2>
            <p className="text-xl text-gray-600">Mission & Vision</p>
            <p className="text-lg text-gray-500 mt-2">Guiding principles that drive our commitment to excellence and innovation in premium tailoring.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                To provide exceptional fabrics and tailoring services that exceed customer expectations, helping individuals express their personal style with confidence and distinction.
              </p>
              <p className="text-gray-700">
                We believe in the transformative power of well-crafted clothing and are committed to making premium quality accessible to our discerning clientele.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be recognized as the premier destination for superior fabrics and bespoke tailoring solutions, setting industry standards for quality, creativity, and customer satisfaction.
              </p>
              <p className="text-gray-700">
                We aspire to preserve traditional craftsmanship while embracing innovation, ensuring that the 4man legacy continues to thrive for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Founders</h2>
            <p className="text-xl text-gray-600">The Vision Behind 4man</p>
            <p className="text-lg text-gray-500 mt-2">Meet the passionate individuals who built 4man into the premium fashion brand it is today.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ankur Jain */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl">👔</span>
                  </div>
                  <p className="text-lg font-semibold">Ankur Jain</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-blue-600 font-semibold">Founder</span>
                  <span className="text-gray-600">Since 1987</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Ankur Jain ~ Founder</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Mr. Ankur Jain is the founder of 4man, a men's fashion brand with a decade of legacy. The journey started by establishing a small showroom with a big vision. It is a standard company with its registered trademark.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  4man provides the complete wardrobe solution for a discerning Indian male. At the same time Mr. Ankur Jain is working on envisioning the brand to evolve as a unique and compelling lifestyle brand with its offerings going beyond wardrobe solutions.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  Having started our transformation journey a few years back, we are today at an inflection point where we are investing to build 4man as the complete wardrobe solution for a discerning Indian male.
                </p>
              </div>
            </div>

            {/* Shilpa Jain */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl">👗</span>
                  </div>
                  <p className="text-lg font-semibold">Shilpa Jain</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-purple-600 font-semibold">Co-Founder</span>
                  <span className="text-gray-600">Team Leader</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Shilpa Jain ~ Co-founder</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Shilpa Jain, sister of Ankur Jain and assistant founder of 4man, has won the confidence of our valued customers by offering them premium high quality fabrics at the best prices.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  A critical pillar in supporting 4man with a youthful team that forms its core, she leads the talented workforce to maintain healthy work cultures, competitive standards and consistent quality by always being ready to learn and grow.
                </p>
              </div>
            </div>

            {/* Deepti Jain */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl">✨</span>
                  </div>
                  <p className="text-lg font-semibold">Deepti Jain</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-pink-600 font-semibold">Co-Founder</span>
                  <span className="text-gray-600">Innovation Lead</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Deepti Jain ~ Co-founder</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Deepti Jain, co-founder of 4man, brings a fresh perspective and innovative vision to the brand. Her dedication to excellence and keen eye for detail have been instrumental in shaping 4man's commitment to quality and customer satisfaction.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  With a strong focus on modern trends and timeless elegance, Deepti plays a pivotal role in curating exclusive fabric collections and ensuring that every customer receives a personalized experience. Her passion for fashion and entrepreneurial spirit continues to drive 4man forward.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">
                  She believes in creating lasting relationships with customers by delivering not just products, but experiences that celebrate style, sophistication, and individuality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the 4man Difference</h2>
          <p className="text-lg mb-8">Visit our store to explore our premium fabric collection or schedule a consultation for your custom tailoring needs.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition">
              Contact Us
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition border-2 border-white">
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
