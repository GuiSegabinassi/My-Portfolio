document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.getElementById("menu"); // Agora garantimos que o ID é usado corretamente

    if (!menuBtn || !menu) {
        console.error("Erro: O botão do menu ou o nav não foi encontrado!");
        return;
    }

    menuBtn.addEventListener("click", function () {
        console.log("Botão do menu clicado!");
        menu.classList.toggle("active"); // O CSS está preparado para esta classe
    });

    // Fechar o menu ao clicar em um link
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
        });
    });
});
