const trilho = document.getElementById("trilho");

// Verifica se o dark mode já foi ativado anteriormente
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    trilho.classList.add("dark");
}

trilho.addEventListener("click", () => {
    console.log("Clique detectado!");
    document.body.classList.toggle("dark-mode");
    trilho.classList.toggle("dark");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }

    console.log("Modo atual:", localStorage.getItem("dark-mode"));
});
