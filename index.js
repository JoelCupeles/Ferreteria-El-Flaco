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

 // New code
 const menuCheckbox = document.getElementById('show-menu');
 const menu = document.querySelector('.content .links');

 // Close the menu when clicking outside of it
 document.addEventListener('click', function(event) {
   if (menuCheckbox.checked && !menu.contains(event.target) && event.target !== menuCheckbox) {
     menuCheckbox.checked = false;
   }
 });

 // Close the menu when scrolling
 window.addEventListener('scroll', function() {
   if (menuCheckbox.checked) {
     menuCheckbox.checked = false;
   }
 });
