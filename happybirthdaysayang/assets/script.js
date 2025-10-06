document.getElementById('openBtn').addEventListener('click', function() {
  document.querySelector('.container').style.display = 'none';
  const msg = document.getElementById('message');
  msg.style.display = 'block';
  
  const music = document.getElementById('music');
  music.play();

  startConfetti();
});

function startConfetti() {
  const duration = 4000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 70,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 70,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
