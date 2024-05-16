import "../styles/formulario.css"
import { useState } from "react"
import { Link } from 'react-router-dom';
export function Formulario({ setNombre }) {

    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (usuario == "" || contraseña == "") {
            setError(true)
            return
        }
        setError(false)
        setNombre(usuario)
        setUsuario("")
        setContraseña("")
    }

    return (
        <section className="section-container">
            <div className="contenedor">
                <h2>Iniciar Sesión</h2>
                <form className="formulario"
                    onSubmit={handleSubmit}>
                    <div className="input-contenedor">
                        <label htmlFor="#">Usuario</label>
                        <input type="text"
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
                        />
                    </div>

                    <div className="input-contenedor">
                        <label htmlFor="#">Contraseña</label>
                        <input type="password"
                            value={contraseña}
                            onChange={e => setContraseña(e.target.value)}
                        />
                    </div>

                    {usuario && contraseña ? (
                        <Link to='/panel-administracion'>
                            <button id="iniciar">Iniciar Sesión</button>
                        </Link>
                    ) : (
                        <>
                            <button id="iniciar" disabled>Iniciar Sesión</button>
                            <p id="error">Digite todos los campos</p>
                        </>
                    )}
                </form>
            </div>
        </section>
    )
}