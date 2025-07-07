import React from 'react';
import { Star, Heart, Sparkles, Zap, Crown, Gem, Diamond } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Royal Floating Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Crown className="w-8 h-8 text-yellow-400/40 drop-shadow-lg" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Gem className="w-6 h-6 text-purple-400/50 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <Diamond className="w-10 h-10 text-amber-400/35 drop-shadow-lg" />
      </div>
      <div className="absolute top-60 right-1/3 animate-float" style={{ animationDelay: '0.5s' }}>
        <Star className="w-7 h-7 text-yellow-300/45 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-5 h-5 text-purple-300/50 drop-shadow-lg" />
      </div>
      <div className="absolute top-32 left-1/3 animate-float" style={{ animationDelay: '2.5s' }}>
        <Heart className="w-9 h-9 text-pink-400/30 drop-shadow-lg" />
      </div>
      <div className="absolute top-1/2 right-8 animate-float" style={{ animationDelay: '3s' }}>
        <Zap className="w-6 h-6 text-cyan-400/40 drop-shadow-lg" />
      </div>
      
      {/* Royal Floating Particles */}
      <div className="absolute top-16 right-1/4 w-4 h-4 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-full animate-bounce shadow-lg shadow-yellow-400/30"></div>
      <div className="absolute bottom-40 left-16 w-6 h-6 bg-gradient-to-r from-purple-400/35 to-indigo-500/35 rounded-full animate-pulse shadow-lg shadow-purple-400/30"></div>
      <div className="absolute top-1/2 left-8 w-3 h-3 bg-gradient-to-r from-emerald-400/40 to-teal-500/40 rounded-full animate-bounce shadow-lg shadow-emerald-400/30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-16 right-1/4 w-5 h-5 bg-gradient-to-r from-pink-400/25 to-rose-500/25 rounded-full animate-pulse shadow-lg shadow-pink-400/30" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute top-24 left-1/2 w-7 h-7 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full animate-bounce shadow-lg shadow-cyan-400/30" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute bottom-28 right-1/3 w-4 h-4 bg-gradient-to-r from-orange-400/35 to-red-500/35 rounded-full animate-pulse shadow-lg shadow-orange-400/30" style={{ animationDelay: '2.2s' }}></div>
      
      {/* Royal Glowing Orbs */}
      <div className="absolute top-1/3 left-12 w-8 h-8 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full animate-royal-pulse shadow-2xl shadow-yellow-400/40 border border-yellow-400/30"></div>
      <div className="absolute bottom-1/3 right-12 w-6 h-6 bg-gradient-to-r from-purple-400/25 to-indigo-500/25 rounded-full animate-royal-pulse shadow-2xl shadow-purple-400/40 border border-purple-400/30" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-2/3 right-1/5 w-5 h-5 bg-gradient-to-r from-emerald-400/30 to-teal-500/30 rounded-full animate-royal-pulse shadow-2xl shadow-emerald-400/40 border border-emerald-400/30" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};