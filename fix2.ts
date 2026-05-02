import fs from 'fs';
let content = fs.readFileSync('components/GeminiSlingshot.tsx', 'utf8');

// Fix text-black/20 to text-black
content = content.replace(/text-black\/20/g, 'bg-opacity-20');
content = content.replace(/<Loader2 className="w-12 h-12 text-\[var\(--brutal-black\)\] animate-spin mb-4" \/>/g, '<Loader2 className="w-12 h-12 text-[var(--color-neon-accent)] animate-spin mb-4" />');

// Monitor icon
content = content.replace(/Monitor className="w-16 h-16 text-\[#ef5350\] mb-6 animate-pulse"/g, 'Monitor className="w-16 h-16 text-[var(--color-neon-accent)] mb-6 animate-pulse"');

// Fix Color picker button
content = content.replace(/ring-white\/50/g, 'ring-[var(--color-neon-accent)]');
content = content.replace(/bg-white\/40/g, 'bg-white/20');
content = content.replace(/bg-white text-black/g, 'bg-[var(--color-neon-accent)] text-black');
content = content.replace(/text-white\/90/g, 'text-black/90');

fs.writeFileSync('components/GeminiSlingshot.tsx', content);
