import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <Hero />
              <Services />
              <About />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/privacy_policy" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <PrivacyPolicy />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/cookie_policy" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <CookiePolicy />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/terms_of_service" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <TermsOfService />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;