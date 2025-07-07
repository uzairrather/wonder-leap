import React, { useState } from 'react';
import { Star, Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-2xl border-b-2 border-yellow-400/30 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-500/10 to-yellow-400/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <nav className="flex items-center justify-between">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Button */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(true)} className="text-yellow-300">
                <Menu className="w-8 h-8" />
              </button>
            </div>

            {/* Logo */}
            <div className="relative">
              <img
                src="/IMG_3141[57].jpeg"
                alt="WonderLeap Logo"
                className="h-14 w-auto drop-shadow-2xl filter brightness-110 contrast-110"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['about', 'mission', 'challenge', 'founder', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className="text-white hover:text-yellow-300 transition-all duration-300 font-bold text-lg hover:scale-110 transform relative group"
              >
                <span className="relative z-10 capitalize">{section}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300"></div>
              </button>
            ))}
            <button
              onClick={() => handleScroll('signup')}
              className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-purple-900 px-6 py-2.5 rounded-full font-black text-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 border-2 border-yellow-300/50"
            >
              <Star className="w-5 h-5 inline mr-1 mb-1" />
              Get Notified
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
            </button>
          </div>
        </nav>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 backdrop-blur-xl md:hidden flex flex-col items-center justify-start pt-24 px-6">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition"
          >
            <X className="w-8 h-8" />
          </button>

          {/* MENU BLOCK with background wrapper */}
          <div className="w-full space-y-4 mt-4">
            <div className="bg-purple-800/90 rounded-xl p-4 space-y-3 shadow-2xl">
              {/* <button
                className="text-xl font-extrabold text-yellow-300 bg-yellow-500/10 border border-yellow-400 w-full text-center py-3 rounded-xl"
                disabled
              >
              </button> */}

              {['about', 'mission', 'challenge', 'founder', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleScroll(section)}
                  className="text-lg font-semibold bg-purple-700 w-full text-white py-3 rounded-xl hover:bg-purple-600 transition-all duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => handleScroll('signup')}
              className="w-full flex justify-center items-center gap-2 bg-yellow-400 text-purple-900 font-bold py-3 rounded-full text-lg hover:bg-yellow-300 transition mt-6"
            >
              <Star className="w-5 h-5" />
              Get Notified
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
