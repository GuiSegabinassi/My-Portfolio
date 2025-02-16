document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
