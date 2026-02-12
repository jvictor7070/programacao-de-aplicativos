const botaoAdicionar = document.getElementById('btnAdicionar');
const campoTexyo = document.getElementById('novoAprovado');
const lista = document.getElementById('listaAprovados');

botaoAdicionar.addEventListener('click', function() {
    const nome = campoTexto.value;

    if (nome.trim() !== '') {
        const itemLista = document.createElement('li');
        
        novoItem.textCotent = nome;

        lista.appendChild(itemLista);

        campoTexto.value = '';
        campoTexto.focus();
    } else {
        alert('Por favor, insira um nome!');
    }
}) 