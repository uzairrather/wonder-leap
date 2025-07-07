import React from 'react';
import { AnimatedSection } from './AnimatedSection';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 sm:py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12">
          
          {/* Logo + Mission */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative mb-6">
              <img
                src="/IMG_3141[57].jpeg"
                alt="WonderLeap Logo"
                className="h-14 sm:h-16 w-auto drop-shadow-2xl filter brightness-110 contrast-110"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-lg blur-lg"></div>
            </div>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium">
              Championing early career exploration by opening up the kingdom of work to every young mind through immersive,
              majestic, and meaningful learning adventures.
            </p>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right" delay={200}>
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yellow-400">WonderLeap Contact</h4>
            <div className="space-y-2 text-white/90 text-base sm:text-lg">
              <p className="font-semibold">Finneen Bradley</p>
              <p>Founding Director</p>
              <p>📞 07936 777312</p>
              <p>📧 info@finnesse.co.uk</p>
              <p>🌐 www.finnesse.co.uk</p>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection direction="right" delay={400}>
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">Join WonderLeap</h4>
            <div className="space-y-3">
              <button className="block w-full text-left text-white/80 hover:text-yellow-300 transition-colors text-base sm:text-lg font-medium hover:scale-105 transform duration-200">
                School Partnerships
              </button>
              <button
                onClick={() => scrollToSection('signup')}
                className="block w-full text-left text-white/80 hover:text-yellow-300 transition-colors text-base sm:text-lg font-medium hover:scale-105 transform duration-200"
              >
                WonderLeap Newsletter
              </button>
              <button className="block w-full text-left text-white/80 hover:text-yellow-300 transition-colors text-base sm:text-lg font-medium hover:scale-105 transform duration-200">
                Partner Enquiries
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-yellow-400/30 pt-6 text-center">
          <p className="text-white/80 text-sm sm:text-base">
            © 2025 WonderLeap Academy. All rights reserved. | Discover, Leap and Succeed
          </p>
        </div>
      </div>
    </footer>
  );
};
