import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                {/* Sempre mostrar o ano atualizado */}
                &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br />
                Senai - Bahia
            </p>
        </footer>
    )






}