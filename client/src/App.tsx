
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import WorkshopInfo from './components/WorkshopInfo';
import LearningOutcomes from './components/LearningOutcomes';
import FAQSection from './components/FAQSection';
import RegistrationForm from './components/RegistrationForm';

const API_URL = import.meta.env.VITE_API_URL || 'https://kidrove-workshop-page.onrender.com';

function App() {
  useEffect(() => {
    fetch(`${API_URL}/api/health`).catch(() => {});
  }, []);
  return (
    <div className="font-sans antialiased bg-slate-50 text-slate-900">
      {/* Fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/96 backdrop-blur border-b border-white/10 h-16">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-full">
          <a href="#" className="flex items-center gap-2.5 text-white font-bold text-lg">
            <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              🤖
            </span>
            Kidrove
          </a>
          <div className="flex items-center gap-5 text-sm">
            <a href="#details" className="text-white/60 hover:text-white transition-colors">Workshop</a>
            <a href="#outcomes" className="text-white/60 hover:text-white transition-colors">Outcomes</a>
            <a href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</a>
            <a href="#register" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Register Now
            </a>
          </div>
        </div>
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
