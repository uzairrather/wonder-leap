import React from 'react';
import { Star, Heart, Rocket, Users, Target } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { FloatingElements } from './FloatingElements';

export const MissionSection: React.FC = () => {
  const values = [
    { icon: Heart, label: "Inclusivity", gradient: "from-purple-800/50 to-indigo-800/50", border: "border-yellow-400/30" },
    { icon: Rocket, label: "Future Ready", gradient: "from-indigo-800/50 to-purple-800/50", border: "border-purple-400/30" },
    { icon: Users, label: "Global Reach", gradient: "from-amber-800/50 to-yellow-800/50", border: "border-amber-400/30" },
    { icon: Target, label: "Early Start", gradient: "from-emerald-800/50 to-teal-800/50", border: "border-emerald-400/30" }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Star className="w-12 h-12 text-yellow-400" />
                <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text drop-shadow-2xl">
                  WonderLeap Mission
                </h2>
              </div>
              <div className="space-y-6 text-white/95 text-xl leading-relaxed font-medium">
                <p className="drop-shadow-lg">
                  WonderLeap’s mission is to build a vibrant world of early career exploration where every child can discover their potential through exciting, imaginative adventures.
                </p>
                <p className="drop-shadow-lg">
                  By transforming career discovery into a magical journey, WonderLeap sparks curiosity, boosts confidence, and empowers children to imagine a future full of endless possibilities.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className={`flex items-center space-x-3 bg-gradient-to-r ${value.gradient} backdrop-blur-2xl rounded-2xl p-4 border-2 ${value.border} relative`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-2xl"></div>
                    <value.icon className="w-8 h-8 text-yellow-300 relative z-10" />
                    <span className="text-white font-bold text-lg relative z-10">{value.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={300}>
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <img 
                  src="/IMG_3138.jpeg" 
                  alt="Wonda the WonderLeap Explorer" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/50 filter brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl"></div>
              </div>
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/30 via-purple-500/30 to-yellow-400/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
