const listaDeAluno = [
    {nome: "Ana", nota: 5.0},
    {nome: "Bruno", nota: 10.0},
    {nome: "Carla", nota: 2.0},
    {nome: "Andrea", nota: 7.0},
    {nome: "Marta", nota: 6.0}
]

console.log("Encontre a aluna Marta e mostre o nome e a média dela:")
const encontrarMarta = listaDeAluno.find(aluna => aluna.nome === "Marta")
console.log(`Nome: ${encontrarMarta.nome}, \nMédia: ${encontrarMarta.nota}`)

console.log("Mostre a média geral dos alunos:")
const mediaGeral = listaDeAluno.reduce((acumulador, aluno) => acumulador + aluno.nota, 0) / listaDeAluno.length
console.log(`Média geral: ${mediaGeral.toFixed(2)}`)

console.log("Mostre o nome e nota dos alunos com nota abaixo de 7.0:")
const alunosAbaixoDeSete = listaDeAluno.filter(aluno => aluno.nota < 7.0)
alunosAbaixoDeSete.forEach(aluno => 
    console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`))

console.log("Mostre os alunos com nota maior ou igual a 7.0:")
const alunosAprovados = listaDeAluno.filter(aluno => aluno.nota >= 7.0)
alunosAprovados.forEach(aluno => 
    console.log(`Nome: ${aluno.nome}, \nNota: ${aluno.nota}`))