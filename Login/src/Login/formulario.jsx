import "../styles/formulario.css"
import { useState } from "react"
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
        <section>
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

                    <button id="iniciar">Iniciar Sesion</button>
                </form>


                {error && <p id="error">Digite todos los campos</p>}
            </div>
        </section>
    )
}