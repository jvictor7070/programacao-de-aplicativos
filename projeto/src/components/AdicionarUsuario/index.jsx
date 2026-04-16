import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [nen, setTipoNen] = useState('')
    const [listaUsuarios, setListaUsuarios] = useState([])

    const handlerAdicionarUsuario = (event) => {
            event.preventDefault()

        if (nome && nen) {
            setListaUsuarios([...listaUsuarios, {nome, nen}])

            setNome('')
            setTipoNen('')
        }
    }
    return (
        <div className='formulario_hunter'>
            <h2>Adicionar Usuário de Nen</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input 
                type="text" 
                placeholder="Nome do Usuário"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                />
                <input 
                type="text" 
                placeholder="Tipo de Nen"
                value={nen}
                onChange={(event) => setTipoNen(event.target.value)}
                />
                <button type='submit'>Adicionar Usuário de Nen</button>
                </form> 

                <hr />

                <h2>Usuários de Nen</h2>
                <ul>
                    {listaUsuarios.map((usuario, index) => (
                        <li key={index}>
                            <strong>{usuario.nome}</strong> - {usuario.nen}
                        </li>
                    ))}
                </ul>
            </div>

    )
}
