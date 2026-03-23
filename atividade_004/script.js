function calcularIdade() {
    const anoNascimento = parseInt(document.getElementById('ano_nascimento').value);

    resultado ="";

    idade = 2026 - anoNascimento;

    switch (true) {
        case (anoNascimento >= 1900 && anoNascimento <= 1960):
            resultado = "Voto não é obrigatório.";
            break;
        case (anoNascimento >= 1961 && anoNascimento <= 2008):
            resultado = "Voto é obrigatório.";
            break;

        case (anoNascimento == 2009 || anoNascimento == 2010):
            resultado = "Voto é opcional.";
            break;

        case (anoNascimento >= 2011 && anoNascimento <= 2026):
            resultado = "Não pode votar";
            break;
        default:
            resultado = "Ano de nascimento inválido.";
    }

    document.getElementById('resultado').innerHTML = `
        Idade: ${idade} anos. <br/>
        Resultado: ${resultado}
    `;
}

document.getElementById('btnVotar').addEventListener('click', calcularIdade);