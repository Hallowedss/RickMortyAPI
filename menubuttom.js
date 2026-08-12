function toggleMenu() {
  const navlinks = document.getElementById("navlinks");
  navlinks.classList.toggle("active");
}

window.addEventListener("click", function (event) {
  const navLinks = document.getElementById("navlinks");
  const menuBtn = document.querySelector(".menu-btn");

  // Verifica se o clique não foi no botão ou no próprio menu
  if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});
