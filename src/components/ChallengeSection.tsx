import React from "react";
import { AlertTriangle, CheckCircle, Shield } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const ChallengeSection: React.FC = () => {
  const challenges = [
    "Young minds form career dreams as early as ages 4-7",
    "By age 7, many limit their potential due to stereotypes",
    "Most career guidance only begins in secondary schools",
    "Limited role models and career exposure",
  ];

  const solutions = [
    "Immersive Edtech platform for young explorers",
    "AI-guided advisors for personalized career quests",
    "Inclusive platform for all learning styles",
    "Curriculum aligned and globally scalable",
  ];

  return (
    <section
      id="challenge"
      className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/15 to-red-500/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection direction="up" className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl mb-8 border-2 border-red-400/50 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
            <AlertTriangle className="w-8 h-8 relative z-10" />
            <span className="relative z-10">
              WONDERLEAP DECREE: URGENT CHALL
            </span>
            <AlertTriangle className="w-8 h-8 relative z-10" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8 drop-shadow-lg">
            <span className="inline-block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-[1.15]">
               Challenge We're 
            </span>
          </h2>

          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
            A critical gap in the education system that affects millions of
            young minds worldwide
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <AnimatedSection direction="left" delay={200}>
            <div className="h-full">
              <div className="bg-gradient-to-br from-red-800/50 via-orange-800/50 to-red-800/50 p-10 rounded-3xl shadow-2xl border-4 border-red-400/50 h-full transform hover:scale-105 transition-all duration-500 backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-orange-500/10 rounded-3xl"></div>
                <div className="flex items-center space-x-4 mb-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-red-300/50">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white">The Crisis</h3>
                </div>
                <ul className="space-y-6 text-white/90 relative z-10">
                  {challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-4 bg-gradient-to-r from-red-700/30 to-orange-700/30 p-4 rounded-2xl shadow-lg border border-red-400/30"
                    >
                      <div className="w-4 h-4 bg-red-400 rounded-full mt-2 flex-shrink-0 animate-pulse shadow-lg shadow-red-400/50"></div>
                      <span className="text-lg font-semibold">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={400}>
            <div className="h-full">
              <div className="bg-gradient-to-br from-emerald-800/50 via-teal-800/50 to-emerald-800/50 p-10 rounded-3xl shadow-2xl border-4 border-emerald-400/50 h-full transform hover:scale-105 transition-all duration-500 backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-3xl"></div>
                <div className="flex items-center space-x-4 mb-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-emerald-300/50">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white">
                    Our WonderLeap Solution
                  </h3>
                </div>
                <ul className="space-y-6 text-white/90 relative z-10">
                  {solutions.map((solution, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-4 bg-gradient-to-r from-emerald-700/30 to-teal-700/30 p-4 rounded-2xl shadow-lg border border-emerald-400/30"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0 animate-pulse shadow-lg shadow-emerald-400/50" />
                      <span className="text-lg font-semibold">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Impact Statistics */}
        <AnimatedSection direction="up" delay={600} className="mt-16">
          <div className="bg-gradient-to-r from-purple-800/50 via-indigo-800/50 to-purple-800/50 rounded-3xl p-10 text-center shadow-2xl border-4 border-yellow-400/30 backdrop-blur-xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>
            <h3 className="text-3xl font-black text-white mb-8 drop-shadow-lg relative z-10">
              Why This WonderLeap Mission Matters
            </h3>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-gradient-to-r from-yellow-800/30 to-amber-800/30 rounded-2xl p-6 border-2 border-yellow-400/30">
                <div className="text-4xl font-black text-yellow-300 mb-2">
                  4-7
                </div>
                <div className="text-white font-semibold">
                  Years when aspirations form
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-2xl p-6 border-2 border-purple-400/30">
                <div className="text-4xl font-black text-purple-300 mb-2">
                  70%
                </div>
                <div className="text-white font-semibold">
                  Of young minds limit options by age 7
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 rounded-2xl p-6 border-2 border-emerald-400/30">
                <div className="text-4xl font-black text-emerald-300 mb-2">
                  0
                </div>
                <div className="text-white font-semibold">
                  Edtech platforms like WonderLeap
                </div>
              </div>
            </div>
            <p className="mt-8 text-white/90 text-xl max-w-4xl mx-auto relative z-10">
              WonderLeap is a majestic learning kingdom where young explorers
              uncover their potential and dream careers through magical quests
              and enchanted adventures. It sparks curiosity, builds confidence,
              and empowers children to see a future full of wonder and
              possibility.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
