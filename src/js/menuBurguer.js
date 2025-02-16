document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menuLinks = menu.querySelectorAll("a");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active"); // Abre/fecha o menu no lado direito
    });

    // Fechar o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});
