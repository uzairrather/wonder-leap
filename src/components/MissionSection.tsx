import React from "react";
import { Star, Heart, Rocket, Users, Target, Gem, Diamond } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { FloatingElements } from "./FloatingElements";

export const MissionSection: React.FC = () => {
  const values = [
    { icon: Heart, label: "Inclusivity", gradient: "from-purple-800/50 to-indigo-800/50", border: "border-yellow-400/30" },
    { icon: Rocket, label: "Future Ready", gradient: "from-indigo-800/50 to-purple-800/50", border: "border-purple-400/30" },
    { icon: Users, label: "Global Reach", gradient: "from-amber-800/50 to-yellow-800/50", border: "border-amber-400/30" },
    { icon: Target, label: "Early Start", gradient: "from-emerald-800/50 to-teal-800/50", border: "border-emerald-400/30" }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5" />
      <FloatingElements />

      {/* Particles like HeroSection */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 sm:w-6 h-4 sm:h-6 bg-yellow-400/30 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
        <div className="absolute top-40 right-20 w-3 sm:w-4 h-3 sm:h-4 bg-purple-400/40 rounded-full animate-bounce shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-20 left-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-amber-400/25 rounded-full animate-pulse delay-300 shadow-lg shadow-amber-400/50"></div>
        <div className="absolute top-60 right-1/3 w-4 sm:w-5 h-4 sm:h-5 bg-indigo-400/35 rounded-full animate-bounce delay-500 shadow-lg shadow-indigo-400/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left Side */}
          <AnimatedSection direction="left">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 animate-bounce" />
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text drop-shadow-2xl leading-tight">
                  WonderLeap Mission
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-6 text-white/95 text-base sm:text-xl leading-relaxed font-medium">
                <p className="drop-shadow-lg">
                  WonderLeap’s mission is to build a vibrant world of early career exploration where every child can discover their potential through exciting, imaginative adventures.
                </p>
                <p className="drop-shadow-lg">
                  By transforming career discovery into a magical journey, WonderLeap sparks curiosity, boosts confidence, and empowers children to imagine a future full of endless possibilities.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <div key={index} className={`flex items-center gap-3 bg-gradient-to-r ${value.gradient} backdrop-blur-2xl rounded-2xl p-4 border-2 ${value.border} relative`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-2xl"></div>
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 relative z-10" />
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg relative z-10 whitespace-normal break-words">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side Image with Hero-style Glow + Icons */}
          <AnimatedSection direction="right" delay={300}>
            <div className="relative mx-auto w-full max-w-xs sm:max-w-md">
              {/* Left/Right Glows */}
              <div className="absolute -left-10 -top-10 h-full w-32 bg-gradient-to-b from-yellow-300/30 via-purple-500/30 to-yellow-300/30 rounded-full blur-3xl opacity-50 animate-pulse hidden sm:block" />
              <div className="absolute -right-10 -top-10 h-full w-32 bg-gradient-to-b from-yellow-300/30 via-purple-500/30 to-yellow-300/30 rounded-full blur-3xl opacity-50 animate-pulse hidden sm:block" />

              {/* Main Image */}
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <img
                  src="/IMG_3138.jpeg"
                  alt="Wonda the WonderLeap Explorer"
                  className="w-full mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/50 filter brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl" />
              </div>

              {/* Base Glow */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-yellow-400/30 via-purple-500/30 to-yellow-400/30 rounded-3xl blur-2xl opacity-60 animate-pulse" />

              {/* Animated Floating Icons */}
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
    </section>
  );
};
