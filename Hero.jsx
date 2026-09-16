import React from 'react';
import { Heart, Sparkles, Award, Gift, Calendar, ArrowRight } from 'lucide-react';

export default function Hero({ onExploreClick, onPersonalizeClick }) {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20 border-b border-rose-900/30">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-900/40 border border-rose-700/50 text-rose-200 text-xs sm:text-sm font-medium mb-6 animate-float">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Dedicated Exclusively to Anniversary Celebrations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Celebrate Every Year of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200">
                Togetherness & Love
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-rose-200/80 max-w-2xl mx-auto lg:mx-0 font-light">
              From 1st year paper milestones to 50th Golden Jubilees — discover personalized keepsakes, 
              engraved lights, star maps, and luxury hampers designed to make your special date unforgettable.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold text-sm shadow-xl shadow-rose-600/30 hover:scale-105 transition-all flex items-center gap-2"
              >
                <Gift className="w-4 h-4" />
                Browse Anniversary Gifts
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onPersonalizeClick}
                className="px-7 py-3.5 rounded-full bg-rose-900/40 hover:bg-rose-900/70 border border-rose-700/60 text-rose-100 font-semibold text-sm hover:scale-105 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Live Gift Customizer
              </button>
            </div>

            {/* Quick Benefits */}
            <div className="mt-10 pt-6 border-t border-rose-900/40 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-rose-200 font-serif">100%</p>
                <p className="text-xs text-rose-300/70">Personalized Touch</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-rose-200 font-serif">Express</p>
                <p className="text-xs text-rose-300/70">Anniversary Delivery</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-rose-200 font-serif">4.9 ★</p>
                <p className="text-xs text-rose-300/70">From 2,500+ Couples</p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md glass-card rounded-3xl p-6 border border-rose-700/40 shadow-2xl">
              {/* Special Offer Ribbon */}
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                20% OFF CODE: ANNIVERSARY20
              </div>

              <div className="relative rounded-2xl overflow-hidden mb-4 group">
                <img
                  src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800"
                  alt="Anniversary Acrylic LED Gift"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded-md bg-rose-600/80 text-[11px] font-semibold">Most Popular Gift</span>
                  <h3 className="text-lg font-serif font-bold mt-1">Acrylic Song & Photo Lamp</h3>
                  <p className="text-xs text-rose-200/90">Personalize with your couple photo & special date</p>
                </div>
              </div>

              {/* Interactive Coupon Box */}
              <div className="bg-rose-900/40 rounded-xl p-3.5 border border-rose-800/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-pink-400" />
                  <div>
                    <p className="text-xs text-rose-300">Anniversary Discount</p>
                    <p className="text-sm font-mono font-bold text-amber-200">Use Code: ANNIVERSARY20</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-400 font-semibold">Save 20% Today</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
