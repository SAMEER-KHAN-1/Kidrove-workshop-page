
import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import WorkshopInfo from './components/WorkshopInfo';
import LearningOutcomes from './components/LearningOutcomes';
import FAQSection from './components/FAQSection';
import RegistrationForm from './components/RegistrationForm';

const API_URL = import.meta.env.VITE_API_URL || 'https://kidrove-workshop-page.onrender.com';

const navLinks = [
  { label: 'Workshop', href: '#details' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'FAQ', href: '#faq' },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/health`).catch(() => {});
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="font-sans antialiased bg-slate-50 text-slate-900">
      {/* Fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/96 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5 text-white font-bold text-lg shrink-0">
            <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              🤖
            </span>
            Kidrove
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white/60 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#register" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Register Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick} className="text-white/70 hover:text-white text-base transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#register" onClick={handleNavClick} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-center">
              Register Now
            </a>
          </div>
        )}
      </nav>

      <HeroSection />
      <WorkshopInfo />
      <LearningOutcomes />
      <FAQSection />
      <RegistrationForm />

      <footer className="bg-slate-950 border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-white/70 font-bold">
            <span className="w-7 h-7 bg-orange-500 rounded-md flex items-center justify-center text-sm">🤖</span>
            Kidrove
          </div>
          <p className="text-white/30 text-sm">© 2026 Kidrove Education. All rights reserved.</p>
          <div className="flex gap-5 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
