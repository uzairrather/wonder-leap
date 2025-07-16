import React from "react";
import { Star } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection
          direction="up"
          className="text-center mb-12 sm:mb-16 overflow-visible"
        >
          {/* Title with icons */}
          <div className="inline-flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Star className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2">
              <span className="inline-block bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent leading-[1.15]">
                WonderLeap Early Careers
              </span>
            </h2>
            <Star className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
          </div>

          {/* Description */}
          <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-medium leading-[1.75]">
            WonderLeap is a majestic learning kingdom where young explorers
            discover their destined careers through enchanted adventures and
            epic quests.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
