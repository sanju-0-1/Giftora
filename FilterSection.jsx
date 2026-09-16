import React from 'react';
import { MILESTONES, CATEGORIES, RECIPIENTS } from '../data/giftsData';
import { Filter, Calendar, Users, SlidersHorizontal } from 'lucide-react';

export default function FilterSection({
  selectedMilestone,
  setSelectedMilestone,
  selectedCategory,
  setSelectedCategory,
  selectedRecipient,
  setSelectedRecipient,
  sortBy,
  setSortBy,
  totalItems
}) {
  return (
    <div className="mb-10 space-y-6 bg-rose-950/40 p-6 rounded-3xl border border-rose-900/40 backdrop-blur-md">
      
      {/* Milestone Year Pills (Primary Highlight Filter) */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-pink-400" />
          <h3 className="text-xs font-semibold text-rose-300 uppercase tracking-wider">Filter by Anniversary Milestone</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {MILESTONES.map((milestone) => {
            const isActive = selectedMilestone === milestone;
            return (
              <button
                key={milestone}
                onClick={() => setSelectedMilestone(milestone)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-600/30 scale-105'
                    : 'bg-rose-900/30 text-rose-200/80 hover:bg-rose-900/60 border border-rose-800/40'
                }`}
              >
                {milestone}
              </button>
            );
          })}
        </div>
      </div>

      <div className="h-px bg-rose-900/40" />

      {/* Categories & Recipient Sub-filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        
        {/* Category Dropdown / Select */}
        <div>
          <label className="block text-xs font-medium text-rose-300/80 mb-1.5">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-rose-900/40 border border-rose-800/50 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-rose-100 focus:outline-none focus:border-rose-500"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat} className="bg-rose-950 text-rose-100">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Recipient Filter */}
        <div>
          <label className="block text-xs font-medium text-rose-300/80 mb-1.5 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-pink-400" /> Recipient
          </label>
          <select
            value={selectedRecipient}
            onChange={(e) => setSelectedRecipient(e.target.value)}
            className="w-full bg-rose-900/40 border border-rose-800/50 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-rose-100 focus:outline-none focus:border-rose-500"
          >
            {RECIPIENTS.map((rec) => (
              <option key={rec} value={rec} className="bg-rose-950 text-rose-100">
                {rec}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-xs font-medium text-rose-300/80 mb-1.5 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-pink-400" /> Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-rose-900/40 border border-rose-800/50 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-rose-100 focus:outline-none focus:border-rose-500"
          >
            <option value="featured" className="bg-rose-950 text-rose-100">Featured & Popular</option>
            <option value="price-low" className="bg-rose-950 text-rose-100">Price: Low to High</option>
            <option value="price-high" className="bg-rose-950 text-rose-100">Price: High to Low</option>
            <option value="rating" className="bg-rose-950 text-rose-100">Highest Rated</option>
          </select>
        </div>

      </div>

      {/* Showing Count Bar */}
      <div className="flex items-center justify-between text-xs text-rose-300/70 pt-2">
        <span>Showing <strong className="text-rose-200">{totalItems}</strong> gifts curated for Anniversary</span>
        {(selectedMilestone !== 'All' || selectedCategory !== 'All Categories' || selectedRecipient !== 'All Recipients') && (
          <button
            onClick={() => {
              setSelectedMilestone('All');
              setSelectedCategory('All Categories');
              setSelectedRecipient('All Recipients');
              setSortBy('featured');
            }}
            className="text-pink-400 hover:text-pink-300 font-medium underline"
          >
            Reset Filters
          </button>
        )}
      </div>

    </div>
  );
}
