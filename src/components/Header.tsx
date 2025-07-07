import React, { useState, useEffect } from 'react';
import { Star, Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const navItems = ['about', 'mission', 'challenge', 'founder', 'contact'];

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-2xl border-b border-yellow-400/30 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-500/10 to-yellow-400/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Left Side: Logo & Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-yellow-300 md:hidden z-50"
            >
              <Menu className="w-8 h-8" />
            </button>

            <div className="relative z-10">
              <img
                src="/IMG_3141[57].jpeg"
                alt="WonderLeap Logo"
                className="h-14 w-auto drop-shadow-2xl"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-full blur-lg" />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="text-white hover:text-yellow-300 font-bold text-lg relative group cursor-pointer"
                  onClick={() => handleScroll(item)}
                >
                  <span className="relative z-10 capitalize">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-purple-500/0 group-hover:from-yellow-400/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300" />
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleScroll('signup')}
              className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-purple-900 px-6 py-2.5 rounded-full font-black text-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 transition-all transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 border-2 border-yellow-300/50"
            >
              <Star className="w-5 h-5 inline mr-1 mb-1" />
              Get Notified
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 backdrop-blur-xl flex flex-col pt-24 px-6 md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition z-50"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Mobile Nav */}
          <ul className="w-full bg-purple-800/90 rounded-xl p-4 space-y-3 shadow-2xl mt-4">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleScroll(item)}
                className="text-lg font-semibold bg-purple-700 text-white py-3 text-center rounded-xl hover:bg-purple-600 transition-all duration-200 cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleScroll('signup')}
            className="w-full flex justify-center items-center gap-2 bg-yellow-400 text-purple-900 font-bold py-3 rounded-full text-lg hover:bg-yellow-300 transition mt-6"
          >
            <Star className="w-5 h-5" />
            Get Notified
          </button>
        </div>
      )}
    </header>
  );
};
