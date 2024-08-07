import "../Styles/PanelAdmin.css"
import React, { useState } from 'react';
import ListadoProductos from "./ListadoProductos";
import { CloseLoginIcon } from "./Icons"
import Axios from 'axios';
import { Link } from 'react-router-dom';
export function PanelAdmin() {

    const [DatosCliente, setDatosCliente] = useState({});
    const idUsuario = JSON.parse(localStorage.getItem('newDatos'));
    Axios.post("http://localhost:3001/getClientData", {
        id_cliente: idUsuario,
    }
    ).then((response) => {
        setDatosCliente(response.data[0]);
    })

    return (
        <div className="fondo">
            <Link to="/">
                <label className="login-button Btn">
                    <span className="IconContainer ">
                        <CloseLoginIcon />
                    </span>
                    <p className="text">Sing out</p>
                </label>
            </Link>
            
            <div className="contenedorPedidos">
                <header className="headerPedidos">
                    <h2>Panel de administración</h2>
                </header>
                <main className="pedidos">
                    <h1>Pedidos</h1>
                    <h1 className="datosCliente"> {DatosCliente.nombre_cliente}</h1>
                    <div className="lugar">
                        {!isNaN(DatosCliente.lugar) ? (<p>mesa {DatosCliente.lugar}</p>) :(<p>Domisilio {DatosCliente.lugar}</p>)}
                    </div>
                    <div>
                        <h3><ListadoProductos /></h3>
                    </div>
                </main>
            </div>
        </div>
    )
}