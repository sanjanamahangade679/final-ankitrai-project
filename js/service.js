document.querySelectorAll(".request-btn").forEach(button => {
  button.addEventListener("click", () => {
    const service = button.closest(".service-card")
                          .getAttribute("data-service");

    window.location.href =
      "proposal.html?service=" + encodeURIComponent(service);
  });
});
