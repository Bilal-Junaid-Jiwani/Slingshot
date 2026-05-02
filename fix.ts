import fs from 'fs';
let content = fs.readFileSync('components/GeminiSlingshot.tsx', 'utf8');

content = content.replace(/border border-\[var\(--color-gallery-white\)\] border-2/g, 'border-2 border-[var(--color-gallery-white)]');
content = content.replace(/border-t border-\[var\(--color-gallery-white\)\] border-2/g, 'border-t-2 border-[var(--color-gallery-white)]');
content = content.replace(/border-l border-\[var\(--color-gallery-white\)\] border-2/g, 'border-l-2 border-[var(--color-gallery-white)]');
content = content.replace(/border-b border-\[var\(--color-gallery-white\)\] border-2/g, 'border-b-2 border-[var(--color-gallery-white)]');
content = content.replace(/border-r border-\[var\(--color-gallery-white\)\] border-2/g, 'border-r-2 border-[var(--color-gallery-white)]');
content = content.replace(/border-2\/30/g, 'border-[var(--color-neon-accent)]/30');
content = content.replace(/border-2\/50/g, 'border-[var(--color-gallery-white)]/50');

// Replace standard rounded corners missed earlier
content = content.replace(/rounded/g, 'rounded-none');
content = content.replace(/rounded-none-none/g, 'rounded-none');
content = content.replace(/rounded-none-full/g, 'rounded-full');

// Update buttons from standard material design to brutalist
content = content.replace(/bg-\[#42a5f5\]/g, 'bg-[var(--color-neon-accent)] text-black');
content = content.replace(/bg-\[#42a5f5\]\/20/g, 'bg-[var(--color-neon-accent)] text-black');
content = content.replace(/text-\[#42a5f5\]/g, 'text-[var(--brutal-black)]');

// Flash Strategy section fixes
content = content.replace(/border-b-4 transition-colors duration-500/g, 'border-b-4 border-b-[var(--color-gallery-white)] transition-colors duration-500');

fs.writeFileSync('components/GeminiSlingshot.tsx', content);
