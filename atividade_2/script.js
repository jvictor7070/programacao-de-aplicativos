function calcularResultados() {
    // 1. Pegando os valores dos campos de texto (e convertendo para números decimais com parseFloat)
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    
    // Elemento onde os resultados vão aparecer
    const resultadoDiv = document.getElementById("resultadoTabuada");
    
    // Limpa qualquer resultado antigo da tela
    resultadoDiv.innerHTML = "";

    // 2. Verificando se o usuário realmente digitou números válidos nas duas caixas
    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoDiv.innerHTML = "<p>Por favor, preencha os dois campos com números.</p>";
        return; // Sai da função para não dar erro nos cálculos
    }

    // 3. Fazendo os cálculos exigidos pelo exercício
    const soma = numero1 + numero2;
    const produto = numero1 * numero2;
    const media = soma / 2;
    const maior = Math.max(numero1, numero2); // Math.max descobre qual é o maior
    const menor = Math.min(numero1, numero2); // Math.min descobre qual é o menor

    // 4. Exibindo os resultados (uma linha para cada, usando a tag <p>)
    resultadoDiv.innerHTML = `
        <p><strong>Soma:</strong> ${soma}</p>
        <p><strong>Produto:</strong> ${produto}</p>
        <p><strong>Média:</strong> ${media}</p>
        <p><strong>Maior número:</strong> ${maior}</p>
        <p><strong>Menor número:</strong> ${menor}</p>
    `;
}

// 5. Conectando a função de calcular ao clique do botão
const botaoCalcular = document.getElementById("btnGerar");
botaoCalcular.addEventListener("click", calcularResultados);