const btn = document.querySelector(".sort-btn");
const menu = document.querySelector(".dropdown-content");

btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

window.addEventListener("click", (e) => {
    if (!e.target.closest(".sort-dropdown")) {
        menu.classList.remove("show");
    }
});