import fs from 'fs';
let content = fs.readFileSync('components/GeminiSlingshot.tsx', 'utf8');

content = content.replace(/#444746/g, 'var(--color-gallery-white)');

fs.writeFileSync('components/GeminiSlingshot.tsx', content);
