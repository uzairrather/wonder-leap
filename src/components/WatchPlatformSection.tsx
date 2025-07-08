import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { FloatingElements } from './FloatingElements';

const WatchPlatformSection: React.FC = () => {
  return (
    <section
      id="watch"
      className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5 z-0" />
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text drop-shadow-2xl mb-6">
            Watch Platform
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Explore WonderLeap stories, adventures, and educational series through our immersive Watch Platform. Built to inspire curiosity and creativity in every child.
          </p>
        </AnimatedSection>

        {/* 3-Image Preview Grid */}
        <AnimatedSection direction="up" delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <img
              src="/watch-1.jpeg"
              alt="WonderLeap Episode 1"
              className="w-full h-auto rounded-3xl object-cover shadow-xl border-4 border-yellow-400/20"
            />
            <img
              src="/watch-2.jpeg"
              alt="WonderLeap Episode 2"
              className="w-full h-auto rounded-3xl object-cover shadow-xl border-4 border-yellow-400/20"
            />
            <img
              src="/watch-3.jpeg"
              alt="WonderLeap Episode 3"
              className="w-full h-auto rounded-3xl object-cover shadow-xl border-4 border-yellow-400/20"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WatchPlatformSection;
