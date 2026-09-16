import React, { useState } from 'react';
import { Sparkles, Heart, Upload, Music, Calendar, ShoppingBag, Check, RefreshCw } from 'lucide-react';

export default function LivePersonalizer({ gift, onAddToCart, onClose }) {
  const [partner1, setPartner1] = useState('Rahul');
  const [partner2, setPartner2] = useState('Priya');
  const [anniversaryDate, setAnniversaryDate] = useState('2024-05-18');
  const [songName, setSongName] = useState('Perfect - Ed Sheeran');
  const [customQuote, setCustomQuote] = useState('Forever & Always');
  const [ledColor, setLedColor] = useState('warm'); // warm, rose, gold, cyan
  const [customPhoto, setCustomPhoto] = useState('https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800');
  const [added, setAdded] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhoto(url);
    }
  };

  const handleAddToCart = () => {
    const customizedGift = {
      ...(gift || {
        id: 'custom-acrylic-lamp',
        title: `Custom LED Acrylic Lamp (${partner1} & ${partner2})`,
        price: 1499,
        image: customPhoto,
        category: 'Personalized Keepsakes',
      }),
      customization: {
        partner1,
        partner2,
        anniversaryDate,
        songName,
        customQuote,
        ledColor,
        customPhoto
      }
    };
    onAddToCart(customizedGift);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const getLedGlowClass = () => {
    switch (ledColor) {
      case 'rose': return 'shadow-[0_0_50px_rgba(244,63,94,0.6)] border-rose-500';
      case 'gold': return 'shadow-[0_0_50px_rgba(234,179,8,0.6)] border-amber-400';
      case 'cyan': return 'shadow-[0_0_50px_rgba(6,182,212,0.6)] border-cyan-400';
      default: return 'shadow-[0_0_50px_rgba(251,146,60,0.6)] border-amber-200';
    }
  };

  return (
    <div className="bg-rose-950/90 rounded-3xl border border-rose-800/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl max-w-5xl mx-auto my-8">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-900/50">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Live Gift Personalization Previewer
          </h2>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-rose-300/70 hover:text-white text-xs">Close</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Form Inputs */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-rose-300 mb-1">Partner 1 Name</label>
              <input
                type="text"
                value={partner1}
                onChange={(e) => setPartner1(e.target.value)}
                className="w-full bg-rose-900/30 border border-rose-800/50 rounded-xl px-3 py-2 text-xs text-rose-100 focus:outline-none focus:border-rose-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-rose-300 mb-1">Partner 2 Name</label>
              <input
                type="text"
                value={partner2}
                onChange={(e) => setPartner2(e.target.value)}
                className="w-full bg-rose-900/30 border border-rose-800/50 rounded-xl px-3 py-2 text-xs text-rose-100 focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-rose-300 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Anniversary Date
              </label>
              <input
                type="date"
                value={anniversaryDate}
                onChange={(e) => setAnniversaryDate(e.target.value)}
                className="w-full bg-rose-900/30 border border-rose-800/50 rounded-xl px-3 py-2 text-xs text-rose-100 focus:outline-none focus:border-rose-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-rose-300 mb-1 flex items-center gap-1">
                <Music className="w-3.5 h-3.5" /> Special Song Title
              </label>
              <input
                type="text"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
                className="w-full bg-rose-900/30 border border-rose-800/50 rounded-xl px-3 py-2 text-xs text-rose-100 focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-rose-300 mb-1">Engraved Romantic Quote</label>
            <input
              type="text"
              value={customQuote}
              onChange={(e) => setCustomQuote(e.target.value)}
              className="w-full bg-rose-900/30 border border-rose-800/50 rounded-xl px-3 py-2 text-xs text-rose-100 focus:outline-none focus:border-rose-500"
            />
          </div>

          {/* LED Glow Hue selector */}
          <div>
            <label className="block text-xs font-medium text-rose-300 mb-1.5">LED Base Glow Shade</label>
            <div className="flex gap-3">
              {[
                { id: 'warm', name: 'Warm Amber', color: 'bg-amber-500' },
                { id: 'rose', name: 'Rose Pink', color: 'bg-rose-500' },
                { id: 'gold', name: 'Gold Glow', color: 'bg-yellow-400' },
                { id: 'cyan', name: 'Crystal Blue', color: 'bg-cyan-400' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setLedColor(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition ${
                    ledColor === c.id
                      ? 'border-white bg-rose-900/80 text-white'
                      : 'border-rose-800/40 text-rose-300/70 hover:text-rose-200'
                  }`}
                >
                  <span className={`w-3 h-3 rounded-full ${c.color}`} />
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-xs font-medium text-rose-300 mb-1">Upload Couple Photo</label>
            <label className="w-full py-2.5 px-4 rounded-xl bg-rose-900/30 border border-dashed border-rose-700/60 text-xs text-rose-200 hover:bg-rose-900/50 flex items-center justify-center gap-2 cursor-pointer transition">
              <Upload className="w-4 h-4 text-pink-400" />
              <span>Choose Photo from Device</span>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
            </label>
          </div>

          {/* Custom Add Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xl transition-all ${
              added
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-rose-600/30'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Customized Gift Added to Bag!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add Customized Gift to Bag (₹1,499)
              </>
            )}
          </button>

        </div>

        {/* Right Live Preview Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <p className="text-xs text-rose-300/60 mb-2 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 animate-spin" /> Live 3D Acrylic Glow Simulation
          </p>

          <div className="relative w-full max-w-sm rounded-3xl p-6 bg-slate-950 border border-rose-900/60 shadow-2xl flex flex-col items-center">
            
            {/* Acrylic Glass Display Board */}
            <div className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 transition-all duration-500 bg-black/60 p-4 flex flex-col justify-between ${getLedGlowClass()}`}>
              
              {/* Image Preview */}
              <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3">
                <img
                  src={customPhoto}
                  alt="Custom Couple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white font-medium">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-500 fill-current" />
                    {partner1} & {partner2}
                  </span>
                  <span>{anniversaryDate}</span>
                </div>
              </div>

              {/* Spotify barcode simulation & details */}
              <div className="text-center space-y-1 text-white">
                <p className="text-xs font-serif font-bold text-amber-200 tracking-wide">
                  "{customQuote}"
                </p>
                <p className="text-[11px] text-rose-200/80 italic flex items-center justify-center gap-1">
                  <Music className="w-3 h-3 text-pink-400" /> {songName}
                </p>
                
                {/* Spotify Wave Code Sim */}
                <div className="pt-2 flex items-center justify-center gap-1 opacity-80">
                  {[12, 20, 8, 24, 16, 28, 10, 22, 14, 26, 18, 10, 22].map((h, i) => (
                    <span key={i} className="w-1 bg-white rounded-full animate-pulse" style={{ height: `${h}px` }} />
                  ))}
                </div>
              </div>

            </div>

            {/* Wooden Base */}
            <div className="w-full h-8 bg-amber-900/80 rounded-b-2xl border-t border-amber-600/40 shadow-inner flex items-center justify-center text-[10px] text-amber-200/70 font-mono tracking-widest uppercase">
              Warm LED Teak Wooden Base
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
