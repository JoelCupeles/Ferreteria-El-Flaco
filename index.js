// Get the current time and date
function updateClock() {
  var now = dayjs();
  var formattedDateTime = now.format("MMM D, YYYY [at] hh:mm:ss a");
  
  // Update the HTML element with the current time and date
  document.getElementById("current-time").textContent = formattedDateTime;
}

// Update the clock every second
setInterval(updateClock, 1000);