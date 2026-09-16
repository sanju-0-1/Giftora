import React, { useState } from 'react';
import { X, Star, Heart, Sparkles, Check, ShoppingBag, Truck, ShieldCheck, Gift } from 'lucide-react';

export default function QuickViewModal({ gift, isWishlisted, isInCart, onToggleWishlist, onAddToCart, onClose }) {
  const [giftWrap, setGiftWrap] = useState(true);
  const [engravingText, setEngravingText] = useState('');

  if (!gift) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-rose-800/60 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-rose-900/40 text-rose-300 hover:text-white hover:bg-rose-900/80 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Product Image */}
          <div className="md:col-span-6 relative aspect-square rounded-2xl overflow-hidden border border-rose-800/50">
            <img
              src={gift.image}
              alt={gift.title}
              className="w-full h-full object-cover"
            />
            {gift.badge && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-600 text-white font-semibold text-xs">
                {gift.badge}
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="md:col-span-6 space-y-4">
            
            <div className="flex items-center justify-between text-xs text-rose-300/70">
              <span className="px-2.5 py-0.5 rounded-md bg-rose-900/60 border border-rose-800/40">
                {gift.milestone}
              </span>
              <span>{gift.category}</span>
            </div>

            <h2 className="text-xl font-serif font-bold text-white">
              {gift.title}
            </h2>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-300 text-sm font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>{gift.rating}</span>
              </div>
              <span className="text-xs text-rose-300/60">({gift.reviewsCount} Couple Reviews)</span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold font-serif text-white">₹{gift.price.toLocaleString('en-IN')}</span>
              {gift.originalPrice && (
                <span className="text-sm text-rose-300/50 line-through">₹{gift.originalPrice.toLocaleString('en-IN')}</span>
              )}
            </div>

            <p className="text-xs text-rose-200/80 leading-relaxed font-light">
              {gift.description}
            </p>

            {/* Features list */}
            {gift.features && (
              <div className="space-y-1.5 pt-2">
                {gift.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-rose-200">
                    <Check className="w-3.5 h-3.5 text-pink-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Custom Engraving Input */}
            {gift.isPersonalizable && (
              <div className="pt-2">
                <label className="block text-xs font-medium text-rose-300 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Custom Initials or Date (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul & Priya (18.05.2024)"
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  className="w-full bg-rose-900/30 border border-rose-800/50 rounded-xl px-3 py-1.5 text-xs text-rose-100 placeholder-rose-300/40 focus:outline-none focus:border-rose-500"
                />
              </div>
            )}

            {/* Gift Wrap Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="giftWrap"
                checked={giftWrap}
                onChange={(e) => setGiftWrap(e.target.checked)}
                className="rounded text-rose-600 focus:ring-rose-500"
              />
              <label htmlFor="giftWrap" className="text-xs text-rose-200 flex items-center gap-1 cursor-pointer">
                <Gift className="w-3.5 h-3.5 text-pink-400" /> Include Premium Velvet Gift Ribbon Box (+₹99 Free)
              </label>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex gap-3">
              <button
                onClick={() => {
                  onAddToCart({ ...gift, customization: engravingText ? { engravingText } : null, giftWrap });
                }}
                className={`flex-1 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  isInCart
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-lg shadow-rose-600/30'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {isInCart ? 'Added to Bag' : 'Add to Shopping Bag'}
              </button>

              <button
                onClick={() => onToggleWishlist(gift)}
                className={`p-3 rounded-xl border border-rose-700/50 transition ${
                  isWishlisted ? 'bg-pink-600 text-white' : 'bg-rose-900/40 text-rose-200 hover:text-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Guarantees */}
            <div className="pt-3 border-t border-rose-900/40 flex items-center justify-between text-[11px] text-rose-300/60">
              <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Express Delivery</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> 100% Quality Guaranteed</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
