import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistModal({ isOpen, onClose, wishlistItems, onAddToCart, onRemoveFromWishlist }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl glass-card rounded-3xl border border-rose-800/60 p-6 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-rose-900/50">
          <div className="flex items-center gap-2 text-rose-100">
            <Heart className="w-5 h-5 text-rose-500 fill-current" />
            <h2 className="text-lg font-serif font-bold text-white">Your Saved Anniversary Wishlist</h2>
            <span className="text-xs text-rose-300 bg-rose-900/50 px-2 py-0.5 rounded-full">
              ({wishlistItems.length})
            </span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full text-rose-300 hover:text-white hover:bg-rose-900/60">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {wishlistItems.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <Heart className="w-10 h-10 text-rose-500/40 mx-auto" />
              <p className="text-xs text-rose-300/80">No items saved to your wishlist yet.</p>
            </div>
          ) : (
            wishlistItems.map((gift) => (
              <div
                key={gift.id}
                className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-rose-900/30 border border-rose-800/40"
              >
                <div className="flex items-center gap-3">
                  <img src={gift.image} alt={gift.title} className="w-14 h-14 rounded-xl object-cover" />
                  <div>
                    <h4 className="text-xs font-semibold text-white truncate max-w-xs">{gift.title}</h4>
                    <span className="text-[10px] text-pink-400">{gift.milestone}</span>
                    <p className="text-xs font-bold text-rose-200 mt-0.5">₹{gift.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(gift);
                      onRemoveFromWishlist(gift.id);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white text-xs font-semibold flex items-center gap-1 shadow-md"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Move to Bag
                  </button>

                  <button
                    onClick={() => onRemoveFromWishlist(gift.id)}
                    className="p-1.5 text-rose-400 hover:text-rose-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
