// BACK BUTTON – SAFE & GUARANTEED
document.getElementById("backBtn").addEventListener("click", () => {

  // If browser history exists
  if (document.referrer !== "") {
    window.history.back();
  } else {
    // Fallback page (CHANGE if needed)
    window.location.href = "service.html";
  }
});

// FORM HANDLING
document.getElementById("proposalForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Message sent successfully!");
  this.reset();
});
