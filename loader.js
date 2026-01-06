window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // 3 seconds delay
  setTimeout(() => {
    loader.style.opacity = 0; // start fade out

    // After fade completes, remove loader from DOM
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // fade duration matches CSS transition
  }, 3000); // 3 seconds
});
