import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: 32 }).map((_, i) => {
      const left = Math.random() * 98; // 0 to 98% width
      const size = 14 + Math.random() * 24; // 14px to 38px
      const duration = 8 + Math.random() * 12; // 8s to 20s
      const delay = Math.random() * 10; // 0s to 10s
      const opacity = 0.3 + Math.random() * 0.5; // 0.3 to 0.8
      const colors = [
        'text-rose-500 fill-rose-500/30',
        'text-pink-400 fill-pink-400/40',
        'text-rose-400 fill-rose-400/40',
        'text-amber-300 fill-amber-300/30',
        'text-fuchsia-400 fill-fuchsia-400/30',
        'text-red-500 fill-red-500/40'
      ];
      const color = colors[i % colors.length];

      return {
        id: i,
        left: `${left}%`,
        size: `${size}px`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        opacity,
        color
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className={`animate-float-heart ${h.color}`}
          style={{
            '--left': h.left,
            '--duration': h.duration,
            '--delay': h.delay,
            opacity: h.opacity
          }}
        >
          <Heart style={{ width: h.size, height: h.size }} className="filter drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
        </div>
      ))}
    </div>
  );
}
