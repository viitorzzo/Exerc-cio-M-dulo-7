document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Impede o envio automático do formulário
    event.preventDefault();

    // Obtém os valores dos campos A e B
    let campoA = parseFloat(document.getElementById('campoA').value);
    let campoB = parseFloat(document.getElementById('campoB').value);

    // Referência ao parágrafo para exibir a mensagem
    let mensagem = document.getElementById('mensagem');

    // Verifica se o campo B é maior que o campo A
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.style.color = "green"; // Exibe uma mensagem positiva em verde
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.style.color = "red"; // Exibe uma mensagem negativa em vermelho
    }
});
