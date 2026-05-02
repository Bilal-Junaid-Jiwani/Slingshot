import fs from 'fs';
let content = fs.readFileSync('components/GeminiSlingshot.tsx', 'utf8');

content = content.replace(/rgba\(18, 18, 18, 0.85\)/g, 'rgba(5, 5, 5, 0.90)');

// Cursor color
content = content.replace(/#ffffff/g, '#f4f4f0');
content = content.replace(/#66bb6a/g, 'var(--neon-green)');

fs.writeFileSync('components/GeminiSlingshot.tsx', content);
