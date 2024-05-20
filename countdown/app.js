// Define the end date and time as a string
const endDate = '25 May 2024 10:00 AM';

// Select all input elements on the page using querySelectorAll
const input = document.querySelectorAll('input');

// Set the text content of the element with ID "end-date" to the defined end date
document.getElementById("end-date").innerText = endDate;

// Function to calculate and display the countdown timer
function clock() {
  // Create a Date object representing the end date and time
  const end = new Date(endDate);

  // Get the current timestamp in milliseconds
  const now = Date.now();

  // Calculate the difference between the end date and now in seconds
  const diff = (end - now) / 1000;

  // Log the end date, current date, and difference for debugging purposes (optional)
  console.log(end);  // Date object representing the end date
  console.log(now);  // Current timestamp in milliseconds (not a Date object)
  console.log(diff);  // Difference in seconds

  // If the end date has already passed (diff is negative), stop the timer
  if (diff < 0) return;

  // Otherwise, calculate and update the timer values
  else {
    // Calculate the days remaining (integer division)
    input[0].value = Math.floor(diff / 60 / 60 / 24);

    // Calculate the hours remaining (modulo by 24 to get remaining hours after days)
    input[1].value = Math.floor((diff / 60 / 60) % 24);

    // Calculate the minutes remaining (modulo by 60 to get remaining minutes after hours)
    input[2].value = Math.floor((diff / 60) % 60);

    // Calculate the seconds remaining (modulo by 60 to get remaining seconds)
    input[3].value = Math.floor(diff % 60);
  }
}

// Call the clock function initially to display the countdown on page load
clock();

// Set an interval to call the clock function every second (1000 milliseconds)
// This will continuously update the countdown timer
setInterval(
  () => {
    clock();
  },
  1000
);

// Conversion factors (provided for reference, not used directly in the code)
/* 
1 day = 24 hrs
1hr = 60 minutes
1min = 60 seconds  
1hr = 60 min = 60*60 seconds
1day = 24 hr = 24*60 minutes = 24*60*60 seconds = 24*60*60*60 milliseconds
*/
