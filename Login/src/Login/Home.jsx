// AQUI VA TODA LA PARTE DEL HOME, LO QUE HAY AQUI ES DE PRUEBA NO MAS 
export function Home({ setNombre }) {
    const Logout = () => {
        setNombre([]);
    };

    return (
        <div>
            <h1>Toda la pagina</h1>
            <button onClick={Logout}>Cerrar Sesion</button>
        </div>
    );
}