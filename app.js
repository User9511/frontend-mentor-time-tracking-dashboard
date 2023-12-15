// Sample data for daily, weekly, and monthly hours
const dailyHours = ["32hrs", "10hrs", "4hrs", "4hrs", "5hrs", "2hrs"];
const dailyPrevious = ["Yesterday - 7hrs", "Yesterday - 2hrs", "Yesterday - 1hr", "Yesterday - 1hr", "Yesterday - 3hrs", "Yesterday - 1hr"];
const weeklyHours = ["103hrs", "23hr", "13hrs", "11hrs", "21hrs", "7hrs"];
const weeklyPrevious = ["Last Week - 36hrs", "Last Week - 8hrs", "Last Week - 7hrs", "Last Week - 5hrs", "Last Week - 10hrs", "Last Week - 2hrs"];
const monthlyHours = ["123hrs", "57hrs", "11hrs", "13hrs", "26hrs", "8hrs"];
const monthlyPrevious = ["Last Month - 118hrs", "Last Month - 39hrs", "Last Month - 18hrs", "Last Month - 19hrs", "Last Month - 53hrs", "Last Month - 17hrs"];

// Selecting elements
const buttons = document.querySelectorAll("button");
const hours = document.querySelectorAll(".hours");
const previous = document.querySelectorAll(".previous");

// Function to update displayed hours
function updateHours(data) {
  hours.forEach((hourElement, index) => {
    hourElement.innerText = data[index];
  });
}

function updatePrevious(data) {
  previous.forEach((previousElement, index) => {
    previousElement.innerText = data[index];
  });
}

// Set the default state to "weekly" when the page loads
document.addEventListener("DOMContentLoaded", () => {
  updateHours(weeklyHours);
  updatePrevious(weeklyPrevious);
});

// Event listeners for each button
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    // Check which button is clicked and update hours accordingly
    if (button.innerText.toLowerCase() === "daily") {
      updateHours(dailyHours);
      updatePrevious(dailyPrevious);
    } else if (button.innerText.toLowerCase() === "weekly") {
      updateHours(weeklyHours);
      updatePrevious(weeklyPrevious);
    } else if (button.innerText.toLowerCase() === "monthly") {
      updateHours(monthlyHours);
      updatePrevious(monthlyPrevious);
    }
    button.classList.add("active");
  });
});
