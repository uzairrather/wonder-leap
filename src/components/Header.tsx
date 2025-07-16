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

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'mission', label: 'Mission' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'founder', label: 'Founder' },
    { id: 'edtech', label: 'EdTech Platform' },
    { id: 'watch', label: 'Curious Minds' },
    { id: 'workshops', label: 'WonderLeap Workshops' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-2xl border-b border-yellow-400/30 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-500/10 to-yellow-400/10" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <img
            src="/IMG_3141[57].jpeg"
            alt="WonderLeap Logo"
            className="h-14 w-auto drop-shadow-xl"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-4 ml-6 lg:ml-10">
              {navItems.map(({ id, label }) => (
                <li
                  key={id}
                  onClick={() => handleScroll(id)}
                  className="relative px-3 py-2 rounded-md font-bold text-base lg:text-lg cursor-pointer transition-colors duration-300 group"
                >
                  <span className="relative z-10 text-white group-hover:text-yellow-300">
                    {label}
                  </span>
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-yellow-400/0 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleScroll('signup')}
              className="ml-4 relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-purple-900 px-5 py-2.5 rounded-full font-black text-base lg:text-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 transition-all transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 border-2 border-yellow-300/50"
            >
              <Star className="w-5 h-5 inline mr-1 mb-1" />
              Get Notified
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-yellow-300 md:hidden z-50"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 backdrop-blur-xl flex flex-col pt-24 px-6 md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <ul className="w-full bg-purple-800/90 rounded-xl p-4 space-y-3 shadow-2xl mt-4">
            {navItems.map(({ id, label }) => (
              <li
                key={id}
                onClick={() => handleScroll(id)}
                className="text-lg font-semibold bg-purple-700 text-white py-3 text-center rounded-xl hover:bg-purple-600 transition-all duration-200 cursor-pointer"
              >
                {label}
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
