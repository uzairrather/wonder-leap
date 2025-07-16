import React, { useState } from "react";
import { Crown, Gem, CheckCircle, Users } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { FloatingElements } from "./FloatingElements";

export const SignupSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showEmailChoice, setShowEmailChoice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setShowEmailChoice(true);
  };

  const subject = encodeURIComponent("Join WonderLeap!");
  const body = encodeURIComponent(
    `Hello WonderLeap Team,\n\nI would like to join and stay updated.\nHere is my email: ${email}\n\nThank you!`
  );
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@wonderleap.co.uk&su=${subject}&body=${body}`;
  const mailtoLink = `mailto:hello@wonderleap.co.uk?subject=${subject}&body=${body}`;

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/10 to-yellow-400/5"></div>
      <FloatingElements />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <AnimatedSection direction="up">
          <div className="bg-gradient-to-r from-purple-800/50 via-indigo-800/50 to-purple-800/50 backdrop-blur-2xl rounded-3xl p-12 border-4 border-yellow-400/30 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-3xl"></div>
            <div className="mb-8 relative z-10">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-purple-900 px-12 py-6 rounded-full font-black text-2xl shadow-2xl mb-8 border-4 border-yellow-300/50 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                <Crown className="w-8 h-8 animate-bounce relative z-10" />
                <span className="relative z-10">WONDERLEAP LAUNCH APPROACHING!</span>
                <Gem className="w-8 h-8 animate-bounce relative z-10" />
              </div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text mb-8 drop-shadow-2xl relative z-10">
              Join WonderLeap!
            </h2>
            <p className="text-2xl text-white/95 mb-8 leading-relaxed font-semibold drop-shadow-lg relative z-10">
              Be the first to meet Wonda, explore our Wonder Kingdoms, and unlock a future of possibilities.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto relative z-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-8 py-5 rounded-full text-purple-900 placeholder-purple-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-xl font-semibold shadow-xl border-2 border-yellow-400/30 bg-gradient-to-r from-white to-yellow-50"
                    required
                  />
                  <button
                    type="submit"
                    className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-300 text-purple-900 px-10 py-5 rounded-full font-black text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 whitespace-nowrap border-4 border-yellow-300/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                    <span className="relative z-10">Join Now!</span>
                  </button>
                </div>

                <div className="mt-8 bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-yellow-400/20 backdrop-blur-2xl rounded-3xl p-6 border-2 border-yellow-400/30 shadow-2xl">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <Users className="w-10 h-10 text-yellow-300 animate-bounce" />
                    <Crown className="w-8 h-8 text-amber-300 animate-pulse" />
                    <Users className="w-10 h-10 text-yellow-300 animate-bounce delay-300" />
                  </div>
                  <p className="text-white text-center text-3xl font-black tracking-wide drop-shadow-2xl animate-pulse">
                    👑 Join thousands awaiting WonderLeap launch day! 🏰
                  </p>
                  <div className="flex items-center justify-center space-x-3 mt-4">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce shadow-lg shadow-yellow-400/50"></div>
                    <div className="w-4 h-4 bg-amber-400 rounded-full animate-bounce delay-100 shadow-lg shadow-amber-400/50"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-200 shadow-lg shadow-yellow-500/50"></div>
                    <div className="w-4 h-4 bg-amber-500 rounded-full animate-bounce delay-300 shadow-lg shadow-amber-500/50"></div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto relative z-10">
                <div className="bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-emerald-600/30 border-4 border-emerald-400/50 rounded-3xl p-8 backdrop-blur-2xl">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6 animate-bounce" />
                  <h3 className="text-3xl font-black text-white mb-4">Welcome to WonderLeap!</h3>
                  <p className="text-white/95 text-xl font-semibold">
                    Your invitation has been sent! We'll notify you as soon as WonderLeap's kingdom opens.
                  </p>
                </div>
              </div>
            )}

            {showEmailChoice && (
              <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm w-full space-y-4">
                  <h2 className="text-xl font-bold text-purple-800">Choose how to send</h2>
                  <p className="text-gray-600">Select your preferred email app</p>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        window.open(gmailLink, "_blank");
                        setIsSubscribed(true);
                        setEmail("");
                        setShowEmailChoice(false);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded"
                    >
                      📩 Send via Gmail
                    </button>
                    <button
                      onClick={() => {
                        window.location.href = mailtoLink;
                        setIsSubscribed(true);
                        setEmail("");
                        setShowEmailChoice(false);
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
                    >
                      💼 Send via Outlook / Mail App
                    </button>
                    <button
                      onClick={() => setShowEmailChoice(false)}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
