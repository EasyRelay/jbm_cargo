import { useState, useEffect } from 'react';
import { ArrowLeft, Menu,  X } from 'lucide-react';
import logo from '../public/logo.png'; // Assuming you have a logo image
import logo2 from '../public/logo2.png'; // Assuming you have a logo image
import { Link, useNavigate } from 'react-router';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(window.location.pathname === '/');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, [window.location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  
  // if (window.location.pathname === '/') {
  //   setIsHome(true);
  // }else{
  //   setIsHome(false);
  // }

  return (
    <header
      className={
        isHome
          ? `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
          }`
          : "fixed top-0 w-full z-50 transition-all duration-300 bg-black shadow-lg"
      }
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3" 
          onClick={() => {
            navigate ('/')
            setIsHome(true);
          }}>
            <div className="relative">
              {isHome ? (
                isScrolled ? (
                  <img
                    src={logo2}
                    alt="Logo"
                    className="h-14 scale-110 w-auto transition-colors duration-[3500ms] ease-in-out rounded-full"
                  />
                ) : (
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-14 scale-110 w-auto transition-colors duration-300"
                  />
                )
              ) : (
                <img
                  src={logo}
                  alt="Logo"
                  className="h-14 scale-110 w-auto transition-colors duration-300"
                />
              )}
            </div>

            <div>
              <h1
                className={`text-2xl font-bold transition-colors duration-300 ${isHome ? (isScrolled ? "text-black" : "text-white") : "text-white"
                  }`}
              >
                JBM CARGO
              </h1>
              <p
                className={`text-sm transition-colors duration-300 ${isHome ? (isScrolled ? "text-blue-600" : "text-red-200") : "text-red-200"
                  }`}
              >
                LLC
              </p>
            </div>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isHome ? ['Home', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled
                  ? 'text-black hover:text-blue-600'
                  : 'text-white hover:text-red-300'
                  }`}
              >
                {item}
              </button>
            )) :
              <Link to="/" className='flex text-white' onClick={() => setIsHome(true)}>
                <ArrowLeft className='w-4 mr-1' /> Back to home
              </Link>
            }
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
              }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-black hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;