import React from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { number: '500+', label: 'Successful Deliveries', icon: Award },
    { number: '10+', label: 'Years Experience', icon: Clock },
    { number: '48', label: 'States Covered', icon: MapPin },
    { number: '24/7', label: 'Customer Support', icon: Users }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={ref} className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About JBM CARGO LLC
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Founded with a commitment to excellence, JBM CARGO LLC has established itself as a trusted partner in the logistics industry. We specialize in providing reliable, safe, and efficient freight transportation services across the United States.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Our team of experienced professionals and modern fleet ensures that your cargo reaches its destination on time and in perfect condition. We take pride in our attention to detail, customer service, and industry compliance.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">DOT Number: 3146601</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">MC Number: 102456</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Fully Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Professional & experienced drivers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Modern, well-maintained fleet
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Competitive pricing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Real-time tracking & updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;