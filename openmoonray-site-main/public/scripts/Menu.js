document.addEventListener("DOMContentLoaded", () => {
const tham = document.querySelector(".tham");
const mobileMenu = document.getElementById("mobilemenu")
tham.addEventListener('click', () => {
  tham.classList.toggle('tham-active');
  mobileMenu.classList.toggle('hidden');
});
});