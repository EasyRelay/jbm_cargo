import { Truck, Package, Route, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Truck,
      title: 'Long-Haul Trucking',
      description: 'Cross-country freight transportation with experienced drivers and modern equipment.',
      features: ['Temperature-controlled', 'Real-time tracking', 'Scheduled deliveries']
    },
    {
      icon: Package,
      title: 'Freight Management',
      description: 'Complete logistics solutions from pickup to delivery with full cargo insurance.',
      features: ['Cargo insurance', 'Documentation', 'Custom solutions']
    },
    {
      icon: Route,
      title: 'Route Optimization',
      description: 'Efficient routing and planning to ensure timely and cost-effective deliveries.',
      features: ['GPS tracking', 'Fuel efficiency', 'Time optimization']
    },
    {
      icon: Shield,
      title: 'Secure Transport',
      description: 'High-security transportation for valuable and sensitive cargo.',
      features: ['Background checks', 'Secure vehicles', 'Insurance coverage']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your transportation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-700 hover:scale-105 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="from-blue-900 via-blue-800 bg-gradient-to-br opacity-95 to-blue-950 text-white p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Ship?</h3>
            <p className="text-xl mb-8">Get a free quote for your freight transportation needs</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-700  hover:bg-blue-600 border text-white px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;