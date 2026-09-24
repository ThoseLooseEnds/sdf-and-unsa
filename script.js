const screens = [...document.querySelectorAll(".screen")];

function show(id) {
  screens.forEach(screen => {
    screen.classList.toggle("hidden", screen.id !== id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("enterBtn").addEventListener("click", () => show("hub"));

document.querySelectorAll("[data-target]").forEach(button => {
  button.addEventListener("click", () => show(button.dataset.target));
});
