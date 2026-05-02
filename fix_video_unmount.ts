import fs from 'fs';
let content = fs.readFileSync('components/GeminiSlingshot.tsx', 'utf8');

content = content.replace(/if \(video\.srcObject\) \{/, `if (video.srcObject) {`);
content = content.replace(/stream\.getTracks\(\)\.forEach\(t => t\.stop\(\)\);/g, `stream.getTracks().forEach(t => t.stop());\n           video.srcObject = null;`);

fs.writeFileSync('components/GeminiSlingshot.tsx', content);
