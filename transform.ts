import fs from 'fs';

let content = fs.readFileSync('components/GeminiSlingshot.tsx', 'utf8');

// Colors
content = content.replace(/bg-\[#121212\]/g, 'bg-[var(--brutal-black)]');
content = content.replace(/bg-\[#1e1e1e\]/g, 'bg-[var(--color-zinc-900)]');
content = content.replace(/bg-\[#252525\]/g, 'bg-[var(--color-zinc-800)]');
content = content.replace(/bg-\[#2a2a2a\]/g, 'bg-black');
content = content.replace(/border-\[#444746\]/g, 'border-[var(--color-gallery-white)] border-2');
content = content.replace(/border-t-\[#444746\]/g, 'border-t-[var(--color-gallery-white)] border-t-2');
content = content.replace(/border-b-\[#444746\]/g, 'border-b-[var(--color-gallery-white)] border-b-2');
content = content.replace(/border-l-\[#444746\]/g, 'border-l-[var(--color-gallery-white)] border-l-2');
content = content.replace(/border-r-\[#444746\]/g, 'border-r-[var(--color-gallery-white)] border-r-2');
content = content.replace(/text-\[#e3e3e3\]/g, 'text-[var(--color-gallery-white)]');
content = content.replace(/text-white/g, 'text-[var(--color-neon-accent)]');
content = content.replace(/text-\[#c4c7c5\]/g, 'text-gray-300');
content = content.replace(/text-\[#757575\]/g, 'text-gray-400');
content = content.replace(/text-\[#a8c7fa\]/g, 'text-[var(--color-neon-accent)]');
content = content.replace(/border-\[#a8c7fa\]/g, 'border-[var(--color-neon-accent)] border-2');
content = content.replace(/border-t-\[#a8c7fa\]/g, 'border-t-[var(--color-neon-accent)] border-t-2');
content = content.replace(/border-r-\[#a8c7fa\]/g, 'border-r-[var(--color-neon-accent)] border-r-2');

// Fonts and Typos
content = content.replace(/font-roboto/g, 'font-sans');
content = content.replace(/font-bold text-sm tracking-widest uppercase/g, 'font-display text-2xl tracking-widest uppercase');
content = content.replace(/text-2xl font-bold/g, 'font-display text-4xl uppercase tracking-wider');

// Layouts and borders
content = content.replace(/rounded-\[28px\]/g, 'rounded-none');
content = content.replace(/rounded-\[32px\]/g, 'rounded-none');
content = content.replace(/rounded-lg/g, 'rounded-none');
content = content.replace(/rounded-full/g, 'rounded-none'); 

// Shadow to Brutalist hard shadow
content = content.replace(/shadow-2xl/g, 'shadow-[8px_8px_0_0_var(--color-neon-accent)]');

// Hand track colors
content = content.replace(/color: '#669df6'/g, "color: '#ccff00'");
content = content.replace(/color: '#aecbfa'/g, "color: '#ffffff'");
content = content.replace(/lineWidth: 1/g, "lineWidth: 2");
content = content.replace(/radius: 2/g, "radius: 3");

// Fix inline styles in Debug Panel
content = content.replace(/backgroundColor: '#252525'/g, "backgroundColor: 'var(--color-zinc-900)'");


fs.writeFileSync('components/GeminiSlingshot.tsx', content);
console.log('Done transforming GeminiSlingshot.tsx');
