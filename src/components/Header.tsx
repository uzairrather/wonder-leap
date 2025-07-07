import React from 'react';
import { Crown, Gem ,Star} from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-2xl border-b-2 border-gold-400/30 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-500/10 to-yellow-400/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/IMG_3141[57].jpeg" 
                alt="WonderLeap Logo" 
                className="h-14 w-auto drop-shadow-2xl filter brightness-110 contrast-110"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-full blur-lg"></div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
            >
              <span className="relative z-10">Mission</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('challenge')}
              className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
            >
              <span className="relative z-10">Challenge</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('founder')}
              className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
            >
              <span className="relative z-10">Founder</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('signup')}
              className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-purple-900 px-8 py-3 rounded-full font-black text-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 border-2 border-yellow-300/50"
            >
              <Star className="w-5 h-5 inline mr-2 mb-2" />
              Get Notified
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};