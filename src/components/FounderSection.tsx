import React from 'react';
import { Star, Award } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Star className="w-12 h-12 text-yellow-400" />
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
              Meet Our WONDERLEAP FOUNDER
            </h2>
            <Star className="w-12 h-12 text-yellow-400" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <img 
                  src="/IMG_3486.jpeg" 
                  alt="Finneen Bradley - Founder of WonderLeap" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-yellow-400/50 filter brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl"></div>
              </div>
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/30 via-purple-500/30 to-yellow-400/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>

              {/* Achievement Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 p-3 rounded-full shadow-xl animate-bounce border-2 border-yellow-300/50">
                <Award className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-yellow-300 p-3 rounded-full shadow-xl animate-bounce delay-300 border-2 border-purple-300/50">
                <Star className="w-6 h-6" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={300}>
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-white">Finneen Bradley</h3>

              <div className="space-y-4 text-white/90 leading-relaxed text-lg">
                <p>
                  As a distinguished graduate of Ulster University Magee campus with a first-class Business Studies degree and a distinction in a Level 7 Postgraduate Qualification in Career Guidance (QCG), Finneen has combined academic excellence with decades of service empowering young minds.
                </p>
                <p>
                  With decades of experience as a careers specialist, youth mentor, and social enterprise leader, she has dedicated her career to helping young people explore new possibilities with confidence. As Founder of Finnesse Careers and Empowerment, Finneen has delivered award-winning programmes across the UK and Ireland and was the first-ever finalist from Northern Ireland in the UK Careers Impact Award.
                </p>
                <p>
                  Her work has reached thousands of learners and educators. This unique blend of expertise and visionary leadership led her to create WonderLeap, a powerful yet accessible tool designed to inspire future generations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-800/50 via-indigo-800/50 to-purple-800/50 p-8 rounded-3xl border-2 border-yellow-400/30 shadow-xl backdrop-blur-xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>
                <p className="text-white/90 italic text-lg font-medium leading-relaxed relative z-10">
                  "I'm thrilled to introduce WonderLeap and our inspiring mascot Wonda, who embodies curiosity and adventure. Together, WonderLeap and Wonda aim to create a movement where every child feels seen, inspired, and ready to explore their future fearlessly."
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
