var accItems = document.querySelectorAll(".accordion-item");
accItems.forEach((e) => {
  e.addEventListener("click", function () {
    if (!e.classList.contains("active")) {
      clearAccordion();
      const h = e.querySelector(".ai-content").scrollHeight;
      e.querySelector(".ai-content").style.height = `${h}px`;
      e.classList.add("active");
    } else {
      e.querySelector(".ai-content").style.height = "0px";
      e.classList.remove("active");
    }
  });
});

function clearAccordion() {
  accItems.forEach((e) => {
    e.querySelector(".ai-content").style.height = "0px";
    e.classList.remove("active");
  });
}
