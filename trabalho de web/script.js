document.addEventListener("DOMContentLoaded", function () {
    const toggleInfoButton = document.getElementById("toggleInfoButton");
    const informacoesPessoais = document.getElementById("informacoesPessoais");
    let infoVisible = false;

    toggleInfoButton.addEventListener("click", function () {
        if (infoVisible) {
            informacoesPessoais.style.display = "none";
            toggleInfoButton.textContent = "Mostrar Informações Pessoais";
        } else {
            informacoesPessoais.style.display = "block";
            toggleInfoButton.textContent = "Ocultar Informações Pessoais";
        }
        infoVisible = !infoVisible;
    });
});
