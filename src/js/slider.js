document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.querySelector(".project-list");
    const projects = document.querySelectorAll(".project-item");

    if (window.innerWidth <= 768) {
        let currentIndex = 0;

        // Criando botões de navegação
        const prevButton = document.createElement("button");
        prevButton.innerHTML = "&#9665;";
        prevButton.classList.add("slider-button", "prev");

        const nextButton = document.createElement("button");
        nextButton.innerHTML = "&#9655;";
        nextButton.classList.add("slider-button", "next");

        projectList.parentElement.appendChild(prevButton);
        projectList.parentElement.appendChild(nextButton);

        // Função para mover o carrossel
        function updateSlide(index) {
            const offset = projects[index].offsetLeft;
            projectList.scrollTo({ left: offset, behavior: "smooth" });
        }

        // Eventos dos botões
        prevButton.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlide(currentIndex);
            }
        });

        nextButton.addEventListener("click", function () {
            if (currentIndex < projects.length - 1) {
                currentIndex++;
                updateSlide(currentIndex);
            }
        });
    }
});
