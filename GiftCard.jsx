import React from 'react';
import { Heart, Star, Sparkles, Eye, ShoppingBag, Check } from 'lucide-react';

export default function GiftCard({
  gift,
  isWishlisted,
  isInCart,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onCustomize
}) {
  return (
    <div className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between relative border border-rose-900/40">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-rose-950/80">
        <img
          src={gift.image}
          alt={gift.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-transparent to-black/30" />

        {/* Badge */}
        {gift.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rose-600/90 text-white font-semibold text-[11px] shadow-lg backdrop-blur-sm">
            {gift.badge}
          </span>
        )}

        {/* Milestone Tag */}
        <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-rose-900/80 text-rose-200 border border-rose-700/50 text-[10px] font-medium backdrop-blur-sm">
          {gift.milestone}
        </span>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(gift);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
            isWishlisted
              ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/40 scale-110'
              : 'bg-rose-950/60 text-rose-200 hover:text-white hover:bg-rose-900/80'
          }`}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(gift)}
          className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-rose-950/80 border border-rose-700/60 text-rose-100 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 backdrop-blur-md"
          title="Quick View"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Recipient */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-1 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold">{gift.rating}</span>
              <span className="text-rose-300/60">({gift.reviewsCount})</span>
            </div>
            <span className="text-[11px] text-rose-300/70 font-medium">{gift.recipient}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(gift)}
            className="text-sm font-semibold text-rose-100 group-hover:text-pink-300 transition-colors cursor-pointer line-clamp-2"
          >
            {gift.title}
          </h3>

          <p className="text-xs text-rose-300/60 mt-1 line-clamp-2 font-light">
            {gift.subtitle}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="mt-4 pt-3 border-t border-rose-900/40">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-bold font-serif text-white">₹{gift.price.toLocaleString('en-IN')}</span>
            {gift.originalPrice && (
              <span className="text-xs text-rose-300/50 line-through">
                ₹{gift.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="text-[11px] text-emerald-400 font-semibold ml-auto">
              Save {Math.round(((gift.originalPrice - gift.price) / gift.originalPrice) * 100)}%
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {gift.isPersonalizable ? (
              <button
                onClick={() => onCustomize(gift)}
                className="w-full py-2 rounded-xl bg-rose-900/40 hover:bg-rose-900/70 border border-rose-700/50 text-rose-200 text-xs font-medium flex items-center justify-center gap-1 transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Customize
              </button>
            ) : (
              <button
                onClick={() => onQuickView(gift)}
                className="w-full py-2 rounded-xl bg-rose-900/40 hover:bg-rose-900/70 border border-rose-700/50 text-rose-200 text-xs font-medium flex items-center justify-center gap-1 transition"
              >
                <Eye className="w-3.5 h-3.5" />
                Details
              </button>
            )}

            <button
              onClick={() => onAddToCart(gift)}
              className={`w-full py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                isInCart
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-md shadow-rose-600/20'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  In Bag
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add
                </>
              )}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
