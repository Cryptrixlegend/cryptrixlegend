// Loader will show for exactly 3 seconds, then fade out
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  setTimeout(() => {
    loader.style.transition = 'opacity 0.5s'; // smooth fade
    loader.style.opacity = 0;

    setTimeout(() => {
      loader.style.display = 'none'; // remove loader from page
    }, 500); // wait for fade out
  }, 3000); // 3 seconds
});
