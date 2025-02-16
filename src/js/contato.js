document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o reload da página
    const form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            Accept: "application/json",
        },
    }).then(response => {
        if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset(); // Limpa os campos do formulário
        } else {
            alert("Erro ao enviar a mensagem. Tente novamente.");
        }
    });
});
