// Exemplos com vetor de nomes 
    const listaDeNomes = ["Ana", "Maria", "Joana"]

    // Exemplo com vetor de números
const listaDeNumeros = [1, 2, 3, 4, 5]

// Vetor de objetos com dados de nome 
// Um objeto carrega dados como uma classe
const listaDeUsuarios = [
    {nome: "Ana",idade: 25},
    {nome: "Maria",idade: 35},
    {nome: "Joana",idade: 45},
    {nome: "José",idade: 15}

]

// Percorrendo e exibindo os elementos do vetor 
// ForEach é uma função de laço de repetição que percorre cada elemento do vetor e executa uma função para cada um deles.
console.log("Exibindo todos os usuários do vetor:")
// Use {} caso precise de mais de uma linha de código, caso contrário, pode omitir as chaves e escrever a função em uma única linha.
// Neste caso não precisa, mas vamos usar 
listaDeUsuarios.forEach(usuario => {
    console.log(` ${usuario.nome}, tem ${usuario.idade} anos`) 
})

// Maneira antiga de percorrer o vetor de objetos, utilizando o laço de repetição for tradicional.
// for (let i = 0; i < listaDeUsuarios.length; i++) {
    //     console.log(` ${listaDeUsuarios[i].nome}, tem ${listaDeUsuarios[i].idade} anos`)
    // }
    
    console.log("\nFiltrando usuários com idade maior que 18 anos:")
    // Use {} caso precise de mais de uma linha de código, caso contrário, pode omitir as chaves e escrever a função em uma única linha.
    // Neste caso não precisa, mas vamos usar 
    const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
maioridade.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos`))

console.log("\nFiltrando usuários com idade menor que 18 anos:")
const menoridade = listaDeUsuarios.filter(usuario => usuario.idade <= 18)
menoridade.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos`))

console.log("\nna lista de números, filtre e mostre apenas números pares:")
const numerosPares = listaDeNumeros.filter(numero => numero % 2 === 0)
numerosPares.forEach(numero => 
    console.log(`${numero}`))

console.log("\nna lista de nomes, mostre todos os nomes com forEach")
listaDeNomes.forEach(nome => 
    console.log(`${nome}`))