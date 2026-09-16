import React from 'react';
import { Heart, ShoppingBag, Sparkles, Search, Gift } from 'lucide-react';

export default function Navbar({ cartCount, wishlistCount, onOpenCart, onOpenWishlist, searchQuery, setSearchQuery }) {
  return (
    <header className="sticky top-0 z-40 bg-rose-950/80 backdrop-blur-md border-b border-rose-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-600/30 group-hover:scale-105 transition-transform">
            <Gift className="w-6 h-6 text-white animate-pulse-glow" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200">
                ForeverAnniversary
              </span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <p className="text-xs text-rose-300/80 tracking-wide font-medium">Exquisite Gifts for Every Milestone</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-rose-300/60" />
          <input
            type="text"
            placeholder="Search custom frames, star maps, rings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2 rounded-full bg-rose-900/30 border border-rose-800/40 text-sm text-rose-100 placeholder-rose-300/50 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2.5 rounded-full bg-rose-900/30 hover:bg-rose-900/60 border border-rose-800/40 text-rose-200 hover:text-rose-100 transition"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-600 text-white font-bold text-xs rounded-full flex items-center justify-center animate-bounce">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-sm shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline">My Bag</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 bg-white text-rose-900 font-bold text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-rose-300/60" />
          <input
            type="text"
            placeholder="Search custom gifts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-full bg-rose-900/30 border border-rose-800/40 text-xs text-rose-100 placeholder-rose-300/50 focus:outline-none focus:border-rose-500"
          />
        </div>
      </div>
    </header>
  );
}
