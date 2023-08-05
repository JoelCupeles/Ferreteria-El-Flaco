// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the button by its ID
  const btn = document.getElementById('btn');

  // Add a click event listener to the button
  btn.addEventListener('click', function() {
      // Open the Google Maps link in a new tab
      window.open('https://goo.gl/maps/WNWc1Bf1dutxyvx67', '_blank');
  });
});
