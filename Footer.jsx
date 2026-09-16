import React from 'react';
import { Heart, GitBranch, GitPullRequest, Sparkles, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rose-950 border-t border-rose-900/50 pt-12 pb-8 text-rose-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top 3 Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-rose-900/40 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-rose-900/50 flex items-center justify-center text-pink-400">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold text-white">Express Anniversary Delivery</h4>
            <p className="text-xs text-rose-300/60">Fast & safe delivery to ensure your milestone date is never missed.</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-rose-900/50 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold text-white">100% Handcrafted Personalization</h4>
            <p className="text-xs text-rose-300/60">Laser engraving, custom star rendering & HD photo prints.</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-rose-900/50 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold text-white">Quality Guarantee</h4>
            <p className="text-xs text-rose-300/60">Free replacement warranty if damaged or misprinted during transit.</p>
          </div>
        </div>

        {/* GitHub Team Collaboration Helper Note (Based on assignment requirements) */}
        <div className="glass-card rounded-2xl p-5 border border-rose-800/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-mono font-bold">
              <GitBranch className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                Team Challenge Collaboration Ready
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">GitHub Collaborators</span>
              </h4>
              <p className="text-xs text-rose-300/70 mt-0.5">
                Advice: Push code to your team's GitHub repository <code className="text-amber-200 bg-rose-900/40 px-1 py-0.5 rounded font-mono">main</code> branch using Git Collaborators access.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-mono text-rose-200 bg-rose-900/50 px-3 py-1.5 rounded-xl border border-rose-800/50">
            <GitPullRequest className="w-4 h-4 text-pink-400" />
            <span>git push origin main</span>
          </div>
        </div>

        {/* Footer Bottom Links & Quote */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-300/60 pt-4 border-t border-rose-900/40">
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-current inline animate-heartbeat" />
            <span>strictly for Anniversary Gifts</span>
          </div>
          <p>© 2026 ForeverAnniversary - Full Stack Development Tools Team Challenge</p>
        </div>

      </div>
    </footer>
  );
}
