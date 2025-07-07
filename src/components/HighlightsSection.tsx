import React from 'react';
import { Gamepad2, Lightbulb, Globe, BookOpen } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const HighlightsSection: React.FC = () => {
  const highlights = [
    {
      icon: Gamepad2,
      title: "WonderLeap Gaming Quests",
      description: "Embark on epic adventures in our career kingdoms.",
      gradient: "from-purple-800/50 via-indigo-800/50 to-purple-800/50",
      hoverGradient: "hover:from-purple-700/60 hover:via-indigo-700/60 hover:to-purple-700/60",
      iconBg: "from-yellow-400 to-amber-500",
      iconColor: "text-purple-900",
      border: "border-yellow-400/30"
    },
    {
      icon: Lightbulb,
      title: "Enchanted Learning Realms",
      description: "Develop skills through magical challenges and mystical activities.",
      gradient: "from-indigo-800/50 via-purple-800/50 to-indigo-800/50",
      hoverGradient: "hover:from-indigo-700/60 hover:via-purple-700/60 hover:to-indigo-700/60",
      iconBg: "from-purple-500 to-indigo-500",
      iconColor: "text-yellow-300",
      border: "border-purple-400/30"
    },
    {
      icon: Globe,
      title: "Kingdom Career Exploration",
      description: "Discover esteemed careers explained for young minds.",
      gradient: "from-amber-800/50 via-yellow-800/50 to-amber-800/50",
      hoverGradient: "hover:from-amber-700/60 hover:via-yellow-700/60 hover:to-amber-700/60",
      iconBg: "from-amber-500 to-yellow-500",
      iconColor: "text-purple-900",
      border: "border-amber-400/30"
    },
    {
      icon: BookOpen,
      title: "WonderLeap Curriculum",
      description: "Built around future skills, digital literacy, and dynamic",
      gradient: "from-emerald-800/50 via-teal-800/50 to-emerald-800/50",
      hoverGradient: "hover:from-emerald-700/60 hover:via-teal-700/60 hover:to-emerald-700/60",
      iconBg: "from-emerald-500 to-teal-500",
      iconColor: "text-white",
      border: "border-emerald-400/30"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <AnimatedSection key={index} direction="left" delay={index * 200}>
              <div
                className={`group text-center p-4 sm:p-6 md:p-8 rounded-3xl bg-gradient-to-br ${highlight.gradient} ${highlight.hoverGradient} transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border-2 ${highlight.border} backdrop-blur-xl relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl" />

                {/* Icon */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${highlight.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl border-2 border-yellow-300/50 relative z-10`}
                >
                  <highlight.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${highlight.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 relative z-10 break-words">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm sm:text-lg relative z-10 break-words">
                  {highlight.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
