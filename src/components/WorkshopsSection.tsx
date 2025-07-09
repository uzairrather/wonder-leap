import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Star, Award } from 'lucide-react';
import { FloatingElements } from './FloatingElements';

const WorkshopsSection: React.FC = () => {
  return (
    <section
      id="workshops"
      className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5 z-0" />
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text drop-shadow-2xl mb-8">
            Early Careers Exploration Workshops
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <AnimatedSection direction="left" delay={100}>
            <div className="bg-gradient-to-br from-purple-800/50 via-indigo-800/50 to-purple-800/50 backdrop-blur-2xl rounded-3xl p-10 border-4 border-yellow-400/30 shadow-2xl relative text-white/90 text-lg leading-relaxed font-medium text-left z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl z-0"></div>
              <div className="relative z-10 space-y-5">
                <p>
                  <strong>WonderLeap Workshops for Primary Schools</strong> step into the world of WonderLeap and meet Wonda, the brave and curious mascot guiding every adventure.
                </p>
                <p>
                  These immersive, interactive workshops invite children to join Wonda and the Explorers on a magical journey of early career discovery. Through hands-on activities, creative challenges, games, and playful storytelling, pupils get to experience what it’s like to step into different roles from engineers to artists and beyond.
                </p>
                <p>
                  Children build key skills like teamwork, problem-solving, and self-confidence while expanding their imaginations and learning about the world of work in a fun, safe, and inspiring environment.
                </p>
                <p>
                  With opportunities to meet Wonda, take part in themed quests, and earn special Explorer badges, WonderLeap workshops create unforgettable moments that ignite lifelong curiosity and help every child imagine a future full of possibilities.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Two Images */}
          <AnimatedSection direction="right">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
              {['/workshop1.jpeg', '/workshop2.jpeg'].map((src, index) => (
                <div key={index} className="relative">
                  <img
                    src={src}
                    alt={`WonderLeap Workshop ${index + 1}`}
                    className="w-full rounded-3xl shadow-2xl border-4 border-yellow-400/50 filter brightness-110 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl" />
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 via-purple-500/30 to-yellow-400/30 rounded-3xl blur-2xl opacity-60 animate-pulse" />
                </div>
              ))}
              {/* Floating Icons on last image */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 p-3 rounded-full shadow-xl animate-bounce border-2 border-yellow-300/50">
                <Award className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-yellow-300 p-3 rounded-full shadow-xl animate-bounce delay-300 border-2 border-purple-300/50">
                <Star className="w-6 h-6" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
