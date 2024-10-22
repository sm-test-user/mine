// Get elements
const openButton = document.getElementById("open-button");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const downloadButton = document.getElementById("download-button");

// Open letter when the button is clicked
openButton.addEventListener("click", () => {
  // Hide the envelope and button
  envelope.style.display = "none";

  // Show the letter
  letter.style.display = "block";

  // After a small delay, show the download button
  setTimeout(() => {
    downloadButton.style.display = "inline-block";
  }, 1000); // 1 second delay for download button
});
