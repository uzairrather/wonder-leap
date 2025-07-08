import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { FloatingElements } from './FloatingElements';
import { Rocket, School, Users, Puzzle } from 'lucide-react';

const EdTechPlatformSection: React.FC = () => {
  return (
    <section
      id="edtech"
      className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5 z-0" />
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text drop-shadow-2xl mb-4">
            🌟 EdTech Platform
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover how WonderLeap is transforming early careers education through play.
          </p>
        </AnimatedSection>

        <div className="space-y-16 text-white/90 text-lg leading-relaxed font-medium">
          <AnimatedSection direction="left">
            <div>
              <h3 className="text-yellow-300 text-2xl font-bold mb-2">What is WonderLeap?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>A pioneering EdTech platform designed to introduce early careers education in a fun, interactive, and immersive way.</li>
                <li>Combining game-based learning with curriculum-aligned content to spark curiosity and confidence in primary-age children.</li>
                <li>Tailored to support and address future skills gaps.</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div>
              <h3 className="text-yellow-300 text-2xl font-bold mb-2">How it Works</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Interactive Zones: Explore themed career zones covering STEM, arts, environment, community services, sports & more.</li>
                <li>Mini-Games & Challenges: Hands-on activities to build essential power skills like problem-solving, teamwork, and creativity.</li>
                <li>Teacher Dashboard: Track pupil progress, assign tasks, and align activities with classroom learning goals.</li>
                <li>Wonda the Mascot: Guides children on their learning journey, making each interaction memorable and supportive.</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div>
              <h3 className="text-yellow-300 text-2xl font-bold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Age-appropriate content designed for Key Stage 1 & 2</li>
                <li>Gamified learning to keep children engaged and motivated.</li>
                <li>Progress tracking and skill badge rewards to encourage continuous exploration.</li>
                <li>Flexible delivery: Use at school, in community hubs, or at home.</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div>
              <h3 className="text-yellow-300 text-2xl font-bold mb-2">Why WonderLeap?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Supports early exposure to a wide range of careers before stereotypes set in.</li>
                <li>Helps teachers meet careers education and personal development objectives.</li>
                <li>Empowers parents to get involved in children’s future-thinking in a fun way.</li>
                <li>Builds the foundation for lifelong learning and future-ready skills.</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div>
              <h3 className="text-yellow-300 text-2xl font-bold mb-2">For Schools & Educators</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Licensing options for classrooms or whole schools.</li>
                <li>Professional development workshops to help teachers integrate WonderLeap effectively.</li>
                <li>Ongoing support and resources to maximise impact.</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up">
            <div className="bg-yellow-400 text-purple-900 text-xl font-bold px-6 py-5 rounded-2xl text-center shadow-2xl border-2 border-yellow-300/50">
              🚀 “Discover, Leap and Succeed” with WonderLeap — let’s build a future where every child can imagine endless possibilities.
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EdTechPlatformSection;
