import fs from 'fs';
let content = fs.readFileSync('components/GeminiSlingshot.tsx', 'utf8');

// Replace var(--neon-green) with hex for Canvas compatibility
content = content.replace(/var\(--neon-green\)/g, '#ccff00');

// Fix video play interruption
content = content.replace(/const startCamera = async \(\) => {\s*try {\s*const stream = await navigator\.mediaDevices\.getUserMedia\(\{ video: \{ width: 1280, height: 720 \} \}\);\s*video\.srcObject = stream;\s*video\.play\(\);\s*\} catch \(err\) {/m, `const startCamera = async () => {
      try {
        if (video.srcObject) return;
        const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
        video.srcObject = stream;
        await video.play().catch(e => console.error("Video play error:", e));
      } catch (err) {`);

fs.writeFileSync('components/GeminiSlingshot.tsx', content);
