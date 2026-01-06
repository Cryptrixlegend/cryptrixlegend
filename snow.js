const canvas = document.createElement('canvas');
canvas.id = 'snow-canvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflakes() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 3 + 1;
  const speed = Math.random() * 1 + 0.5;
  snowflakes.push({x, y, radius, speed});
}

for (let i = 0; i < 150; i++) createSnowflakes();

function drawSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  snowflakes.forEach(s => {
    ctx.moveTo(s.x, s.y);
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
  });
  ctx.fill();
  updateSnow();
}

function updateSnow() {
  snowflakes.forEach(s => {
    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;
  });
  requestAnimationFrame(drawSnow);
}

drawSnow();
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
