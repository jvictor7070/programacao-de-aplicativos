function CalcularMedia() {
    const nota1 = parseFloat(document.getElementById("primeiroNumero").value);
    const nota2 = parseFloat(document.getElementById("segundoNumero").value);
    const nota3 = parseFloat(document.getElementById("terceiroNumero").value);

    const media = (nota1 + nota2 + nota3) / 3;
    
    // Criamos uma variável vazia para guardar o texto da situação
    let situacao = "";

    // O switch agora serve apenas para DEFINIR o texto da variável 'situacao'
    switch (true) {
        case (media >= 7 && media <= 10):
            situacao = "Aprovado! 🎓";
            break;
        case (media >= 0 && media < 7):
            situacao = "Reprovado. ❌";
            break;
        default:
            situacao = "Nota inválida! ⚠️";
    }

    // Agora imprimimos TUDO de uma vez só na tela usando Template Strings (as crases ``)
    document.getElementById("resultado").innerHTML = `
        Média: <strong>${media.toFixed(2)}</strong> <br> 
        Resultado: <strong>${situacao}</strong>
    `;
}

document.getElementById("btnCalcular").addEventListener("click", CalcularMedia);