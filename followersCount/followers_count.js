let count = 0;
function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue();
}
function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}
function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
function reset() {
    count = 0;
    displayCount();
    alert("Followers have been reset");
}