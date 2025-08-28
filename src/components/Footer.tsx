import {  Phone, Mail,  Clock } from 'lucide-react';
import LegalPages from './LegalPages';
import logo from '../public/logo.png'; // Assuming you have a logo image

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img src={logo} alt="Logo" className={`h-14 scale-110 w-auto transition-colors duration-300 `} />

              </div>
              <div>
                <h3 className="text-2xl font-bold">JBM CARGO</h3>
                <p className="text-red-400">LLC</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted logistics partner for safe, reliable, and efficient freight transportation across the nation.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">DOT: 3146601</p>
              <p className="text-sm text-gray-400">MC: 102456</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Long-Haul Trucking</li>
              <li>Freight Management</li>
              <li>Route Optimization</li>
              <li>Secure Transport</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <a href="tel:(314)930-2134" className="text-gray-300 hover:text-white transition-colors duration-300">
                  (314) 930-2134
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <a href="mailto:jbmcargollc@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  jbmcargollc@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-red-400 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>Mon-Fri: 6AM-8PM</p>
                  <p>Sat: 8AM-6PM</p>
                  <p>24/7 Dispatch Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <LegalPages />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} JBM CARGO LLC. All rights reserved.
          </p>
          <div className="text-gray-400 text-sm">
            <p>Licensed & Insured • Professional Transportation Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;