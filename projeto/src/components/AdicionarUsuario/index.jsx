import { useState } from "react";
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])

    const handlerAdicionarUsuario = (event) => {
        // Evitando que página recarregue ao mudar algum elemento na página. 
        event.preventDefault()
        // Verificando se os campos possuem algum conteúdo. 
        if (nome && email) {
            // Adicionar novo usuário
            setListaDeUsuarios([...listaDeUsuarios, {nome, email}])
            // Definindo os campos como vazio
            setNome('')
            setEmail('')
        }
    }

    return (
        // Criando Html da página
        <div className='formulario'>
            <h2>Adicionar usuário</h2> 
            <form onSubmit={handlerAdicionarUsuario}>
                <input
                type="text"
                value={nome}
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}
                />
                <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Adicionar</button>
                </form>

                <hr />

                <h2>Usuários Adicionados</h2>
                <ul>
                    {/* Usando o map para mostrar cada usuário na lista com base no índice.  */}
                    {listaDeUsuarios.map((usuario, index) =>(
                        <li key={index}>
                            {usuario.nome} - {usuario.email}
                        </li>
                    ))}
                </ul>
                </div>
    )
}