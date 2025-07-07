import React from 'react';
import { Star, Gem, Diamond, ArrowRight, Calendar } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { FloatingElements } from './FloatingElements';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 pt-24 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
      <FloatingElements />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 sm:w-6 h-4 sm:h-6 bg-yellow-400/30 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
        <div className="absolute top-40 right-20 w-3 sm:w-4 h-3 sm:h-4 bg-purple-400/40 rounded-full animate-bounce shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-20 left-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-amber-400/25 rounded-full animate-pulse delay-300 shadow-lg shadow-amber-400/50"></div>
        <div className="absolute top-60 right-1/3 w-4 sm:w-5 h-4 sm:h-5 bg-indigo-400/35 rounded-full animate-bounce delay-500 shadow-lg shadow-indigo-400/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full z-10">
        {/* Coming Soon Badge */}
        <AnimatedSection direction="down" className="text-center mb-8">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-purple-900 px-6 sm:px-12 py-4 sm:py-6 rounded-full font-black text-xl sm:text-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-yellow-300/50 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
            <Star className="w-6 sm:w-8 h-6 sm:h-8 animate-bounce relative z-10" />
            <span className="tracking-wider relative z-10">COMING VERY SOON!</span>
            <Gem className="w-6 sm:w-8 h-6 sm:h-8 animate-bounce relative z-10" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delay={300}>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text mb-6 leading-tight drop-shadow-2xl">
                <span className="block animate-pulse">WonderLeap</span>
                <span className="block bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent text-3xl sm:text-5xl lg:text-6xl animate-bounce">
                  Adventure Edition
                </span>
              </h1>

              <div className="mb-8">
                <p className="text-xl sm:text-2xl lg:text-4xl text-yellow-300 font-black mb-6 tracking-wide drop-shadow-lg">
                  Discover. Leap. Succeed.
                </p>
                <p className="text-base sm:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-md font-medium">
                  Enter a majestic realm where career discovery becomes an epic adventure for young minds!
                </p>
              </div>

              {/* Launch Countdown */}
              <div className="bg-gradient-to-r from-purple-800/50 via-indigo-800/50 to-purple-800/50 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 mb-8 border-2 border-yellow-400/30 shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>
                <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6 relative z-10">
                  <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-300 animate-bounce" />
                  <span className="text-white font-black text-lg sm:text-2xl tracking-wide">WonderLeap Launch Soon!</span>
                  <Diamond className="w-6 sm:w-8 h-6 sm:h-8 text-purple-300 animate-bounce delay-300" />
                </div>
                <p className="text-white/90 text-center text-sm sm:text-lg font-bold relative z-10 whitespace-nowrap">
                  ✨ Claim your place in the kingdom of career exploration 🏰
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-12">
                <button
                  onClick={() => scrollToSection('signup')}
                  className="group relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-purple-900 px-8 sm:px-12 py-4 sm:py-6 rounded-full font-black text-lg sm:text-2xl hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 flex items-center justify-center space-x-3 sm:space-x-4 border-4 border-yellow-300/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                  <Star className="w-6 sm:w-8 h-6 sm:h-8 relative z-10" />
                  <span className="relative z-10">Join WonderLeap!</span>
                  <ArrowRight className="w-6 sm:w-8 h-6 sm:h-8 group-hover:translate-x-2 transition-transform relative z-10" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={600}>
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <img
                  src="/IMG_3102 copy.jpeg"
                  alt="Wonda the WonderLeap Explorer - WonderLeap Mascot"
                  className="w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/50 filter brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl"></div>
              </div>
              <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-yellow-400/30 via-purple-500/30 to-yellow-400/30 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>

              {/* Floating Elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 p-3 sm:p-4 rounded-full shadow-2xl animate-bounce border-4 border-yellow-300/50">
                <Star className="w-6 sm:w-8 h-6 sm:h-8" />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-yellow-300 p-3 sm:p-4 rounded-full shadow-2xl animate-bounce delay-300 border-4 border-purple-300/50">
                <Gem className="w-6 sm:w-8 h-6 sm:h-8" />
              </div>
              <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-purple-900 p-2.5 sm:p-3 rounded-full shadow-xl animate-pulse border-2 border-amber-300/50">
                <Diamond className="w-4 sm:w-6 h-4 sm:h-6" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg className="w-full h-24 sm:h-32 fill-current text-slate-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path d="M0,0V46.29..." fill="url(#waveGradient)" opacity=".25"></path>
          <path d="M0,0V15.81..." fill="url(#waveGradient)" opacity=".5"></path>
          <path d="M0,0V5.63..." fill="url(#waveGradient)"></path>
        </svg>
      </div>
    </section>
  );
};
