import { ArrowRight, Shield, Clock, MapPin, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import heroBgImage from '../public/herioBg.png';
import { message } from 'antd';
import { useState } from 'react';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isQuoteButtonHovered, setIsQuoteButtonHovered] = useState(false);

  const copyText = (text: number) => {
    navigator.clipboard.writeText(text.toString());
    message.success('Text copied to clipboard');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-700 to-black relative overflow-hidden">
      <img src={heroBgImage} alt="Hero Background" className="absolute inset-0 opacity-45 w-full h-full object-cover " />

      <div className="absolute inset-0  bg-black bg-opacity-20"></div>
    
      <div ref={ref} className="relative mt-10 z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Your Trusted
              <span className="block text-red-500">Logistics Partner</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Professional freight transportation services across the nation. 
              Safe, reliable, and on-time delivery guaranteed.
            </p>

            <div className='text-white text-4xl w-fit mb-6'>
              <h1 onClick={() => copyText(3146601)} className='cursor-pointer mb-2'>
                <p className='inline text-white opacity-40 hover:underline'>USDOT#:</p> 3146601
              </h1>
              <h1 onClick={() => copyText(102456)} className='cursor-pointer '>
                <p className='inline text-white opacity-40 hover:underline'>MC#:</p> 102456
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onMouseEnter={() => setIsQuoteButtonHovered(true)}
                onMouseLeave={() => setIsQuoteButtonHovered(false)}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="backdrop-blur-sm hover:bg-blue-900 border hover:border-blue-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Quote Now
                {isQuoteButtonHovered ? 
                <Check className="h-5 w-5" />
                : <ArrowRight className="h-5 w-5" />}
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Our Services
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'Licensed & Insured', desc: 'DOT: 3146601 | MC: 102456' },
                { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock assistance' },
                { icon: MapPin, title: 'Nationwide Service', desc: 'Coast to coast coverage' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <feature.icon className="h-8 w-8 text-red-500 mb-3" />
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;