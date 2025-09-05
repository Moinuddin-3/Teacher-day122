// Canvas-based JARVIS HUD Animation
const canvas = document.getElementById("hud");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cx = canvas.width / 2;
const cy = canvas.height / 2;

function drawCircle(radius, color, lineWidth, rotation = 0) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.shadowColor = color;
  ctx.shadowBlur = 15;
  ctx.stroke();
  ctx.restore();
}

function drawDots(radius, count, color, angleOffset) {
  ctx.save();
  ctx.translate(cx, cy);
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 / count) * i + angleOffset;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 20;
    ctx.fill();
  }
  ctx.restore();
}

let angle = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Rotating circles
  drawCircle(150, "cyan", 2, angle / 2);
  drawCircle(200, "cyan", 1, -angle / 3);
  drawCircle(250, "cyan", 2);

  // Rotating dots
  drawDots(200, 30, "deepskyblue", angle);
  drawDots(100, 12, "aqua", -angle);

  // Center core
  drawCircle(60, "white", 3);
  drawCircle(40, "aqua", 2, angle);

  angle += 0.01;

  requestAnimationFrame(animate);
}

animate();

// Resize handler
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
