import React, { useState } from 'react';
import { Star, Gem, CheckCircle, Users } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { FloatingElements } from './FloatingElements';

export const SignupSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section
      id="signup"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
      <FloatingElements />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <AnimatedSection direction="up">
          <div className="bg-gradient-to-r from-purple-800/50 via-indigo-800/50 to-purple-800/50 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 md:p-12 border-4 border-yellow-400/30 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>

            {/* ✅ Updated Responsive Banner */}
            <div className="mb-6 sm:mb-8 relative z-10">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-purple-900 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-black text-sm sm:text-lg md:text-2xl shadow-2xl border-4 border-yellow-300/50 relative max-w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 animate-bounce relative z-10" />
                <span className="relative z-10 text-center whitespace-normal">WONDERLEAP APPROACHING!</span>
                <Gem className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 animate-bounce relative z-10" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text mb-6 sm:mb-8 drop-shadow-2xl relative z-10">
              Join WonderLeap!
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed font-semibold drop-shadow-lg relative z-10">
              Be the first to meet Wonda, explore our Wonder Kingdoms, and unlock a future of possibilities.
            </p>

            {!isSubscribed ? (
              <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto relative z-10 w-full"
              >
                {/* Email + Button */}
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 sm:py-5 rounded-full text-purple-900 placeholder-purple-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-base sm:text-xl font-semibold shadow-xl border-2 border-yellow-400/30 bg-gradient-to-r from-white to-yellow-50"
                    required
                  />
                  <button
                    type="submit"
                    className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-300 text-purple-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 whitespace-nowrap border-4 border-yellow-300/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                    <span className="relative z-10">Join Now!</span>
                  </button>
                </div>

                {/* Launch Day Info */}
                <div className="mt-6 sm:mt-8 bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 border-2 border-yellow-400/30 shadow-2xl">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 animate-bounce" />
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300 animate-pulse" />
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 animate-bounce delay-300" />
                  </div>
                  <p className="text-white text-center text-xl sm:text-3xl font-black tracking-wide drop-shadow-2xl animate-pulse">
                    ✨ Join thousands awaiting WonderLeap day! 🏰
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-4">
                    {[0, 100, 200, 300].map((delay, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-bounce shadow-lg ${
                          i % 2 === 0 ? 'bg-yellow-400 shadow-yellow-400/50' : 'bg-amber-400 shadow-amber-400/50'
                        }`}
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto relative z-10">
                <div className="bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-emerald-600/30 border-4 border-emerald-400/50 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-400 mx-auto mb-4 sm:mb-6 animate-bounce" />
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 sm:mb-4">Welcome to WonderLeap!</h3>
                  <p className="text-white/95 text-base sm:text-xl font-semibold">
                    Your invitation has been sent! We'll notify you as soon as WonderLeap's kingdom opens.
                  </p>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
