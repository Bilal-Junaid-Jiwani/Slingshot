import fs from 'fs';
let content = fs.readFileSync('components/GeminiSlingshot.tsx', 'utf8');

content = content.replace(/text-3xl font-bold text-\[var\(--color-neon-accent\)\]/g, 'text-5xl tracking-widest font-display text-[var(--color-neon-accent)]');
content = content.replace(/text-gray-300 uppercase tracking-wider font-medium">Score<\/p>/g, 'text-gray-300 uppercase tracking-widest font-bold">Score</p>');

fs.writeFileSync('components/GeminiSlingshot.tsx', content);
