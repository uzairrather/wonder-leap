import React from 'react';
import { Star } from 'lucide-react'; // ✅ Replaced Crown with Star
import { AnimatedSection } from './AnimatedSection';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection direction="up" className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-8">
            <Star className="w-12 h-12 text-yellow-400" />
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
              WonderLeap Early Careers
            </h2>
            <Star className="w-12 h-12 text-yellow-400" />
          </div>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
            WonderLeap is a majestic learning kingdom where young explorers discover their destined careers through enchanted adventures and epic quests.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
