import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Star, Gem, CheckCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { FloatingElements } from "./FloatingElements";

export const SignupSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null); // ✅ Type-safe ref
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_xdg5iqc",
        "template_2m8efsf",
        formRef.current as HTMLFormElement, // ✅ TypeScript-safe cast
        "Js_6VGeKZWi4q_907"
      );

      setIsSubscribed(true);
      formRef.current?.reset();
      toast.success("Your invitation has been sent! 🎉");
    } catch (err) {
      toast.error("Email sending failed. Please try again.");
      console.error("EmailJS Error:", err);
    } finally {
      setLoading(false);
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

            <div className="mb-6 sm:mb-8 relative z-10">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-purple-900 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-black text-sm sm:text-lg md:text-2xl shadow-2xl border-4 border-yellow-300/50 relative max-w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 animate-bounce relative z-10" />
                <span className="relative z-10 text-center whitespace-normal">
                  WONDERLEAP APPROACHING!
                </span>
                <Gem className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 animate-bounce relative z-10" />
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text mb-6 sm:mb-8 drop-shadow-2xl relative z-10">
              Join WonderLeap!
            </h2>

            <p className="text-lg sm:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed font-semibold drop-shadow-lg relative z-10">
              Be the first to meet Wonda, explore our Wonder Kingdoms, and
              unlock a future of possibilities.
            </p>

            {!isSubscribed ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto relative z-10 w-full"
              >
                <div className="flex flex-col gap-4 w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="px-6 py-4 rounded-full text-purple-900 placeholder-purple-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-base sm:text-xl font-semibold shadow-xl border-2 border-yellow-400/30 bg-gradient-to-r from-white to-yellow-50"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="px-6 py-4 rounded-full text-purple-900 placeholder-purple-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-base sm:text-xl font-semibold shadow-xl border-2 border-yellow-400/30 bg-gradient-to-r from-white to-yellow-50"
                    required
                  />
                  <input type="hidden" name="title" value="WonderLeap Signup" />
                  <textarea
                    name="message"
                    placeholder="Tell us a bit about you (optional)"
                    rows={3}
                    className="px-6 py-4 rounded-2xl text-purple-900 placeholder-purple-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-base sm:text-xl font-semibold shadow-xl border-2 border-yellow-400/30 bg-gradient-to-r from-white to-yellow-50"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-300 text-purple-900 px-8 sm:px-10 py-4 rounded-full font-black text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 whitespace-nowrap border-4 border-yellow-300/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                    <span className="relative z-10">
                      {loading ? "Sending..." : "Join Now!"}
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto relative z-10">
                <div className="bg-gradient-to-r from-emerald-600/30 via-teal-600/30 to-emerald-600/30 border-4 border-emerald-400/50 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-400 mx-auto mb-4 sm:mb-6 animate-bounce" />
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 sm:mb-4">
                    Welcome to WonderLeap!
                  </h3>
                  <p className="text-white/95 text-base sm:text-xl font-semibold">
                    Your invitation has been sent! We'll notify you as soon as
                    WonderLeap's kingdom opens.
                  </p>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};
