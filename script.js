// Interactive functions for Vercel sample site

let clickCount = 0;
const clickDisplay = document.getElementById('click-count');
const confettiBtn = document.getElementById('confetti-btn');
const tipText = document.getElementById('tip-text');
const nextTipBtn = document.getElementById('next-tip-btn');

// Array of helpful tips for learning Vercel
const vercelTips = [
  "Whenever you push code to a Git branch, Vercel creates an isolated Preview Deployment with a unique URL so you can test before merging!",
  "Vercel provides free automatic HTTPS/SSL certificates for any custom domain you connect.",
  "You can use `npx vercel --prod` from your terminal to deploy directly to production without using Git.",
  "Vercel natively supports Next.js, Vite, React, Vue, Svelte, Nuxt, Astro, and plain static HTML/CSS.",
  "You can set Environment Variables directly inside your Vercel Project Settings under the 'Environment Variables' tab.",
  "Vercel Analytics & Speed Insights let you track real-user Core Web Vitals with zero configuration!"
];

let currentTipIndex = 0;

if (nextTipBtn && tipText) {
  nextTipBtn.addEventListener('click', () => {
    currentTipIndex = (currentTipIndex + 1) % vercelTips.length;
    tipText.style.opacity = 0;
    setTimeout(() => {
      tipText.textContent = `"${vercelTips[currentTipIndex]}"`;
      tipText.style.opacity = 1;
    }, 200);
  });
}

// Confetti burst effect
function createConfetti(x, y) {
  const colors = ['#00f2fe', '#4facfe', '#7928ca', '#ff0080', '#ffffff', '#ffd200'];
  const count = 35;

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = color;
    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;

    const xShift = (Math.random() - 0.5) * 350;
    const yShift = -Math.random() * 200 + (Math.random() * 200);
    const rot = Math.random() * 720;

    confetti.style.setProperty('--x-shift', `${xShift}px`);
    confetti.style.setProperty('--y-shift', `${yShift}px`);
    confetti.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 1500);
  }
}

if (confettiBtn) {
  confettiBtn.addEventListener('click', (e) => {
    clickCount++;
    if (clickDisplay) {
      clickDisplay.textContent = clickCount;
      clickDisplay.style.color = '#00f2fe';
      setTimeout(() => {
        clickDisplay.style.color = '';
      }, 300);
    }
    const rect = confettiBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    createConfetti(x, y);
  });
}

console.log("Vercel Sample Website initialized successfully!");
