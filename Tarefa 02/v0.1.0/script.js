function jogar() {
    let numero = Math.floor(Math.random() * 2);

    let resultado = document.getElementById("resultado");
    let moeda = document.getElementById("moeda");

    // Remove a animação anterior
    moeda.classList.remove("girando");

    // Reinicia a animação
    void moeda.offsetWidth;

    // Inicia o giro
    moeda.classList.add("girando");

    // Mostra o resultado depois que a moeda terminar de girar
    setTimeout(function() {

        if (numero === 0) {
            resultado.textContent = "🪙 CARA!";
        } else {
            resultado.textContent = "🪙 COROA!";
        }

    }, 1000);
}