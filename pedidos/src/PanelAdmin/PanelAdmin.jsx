import "../Styles/PanelAdmin.css"
import React, { useState } from 'react';
import ListadoProductos from "./ListadoProductos";
 export function PanelAdmin(){


    return(
    <div className="fondo">
        <div className="contenedor">
            <header className="header">
            <h2>Panel de administración</h2>
        </header>

        <main className="pedidos">
            <h1>Pedidos</h1>
            <p>
                Administra las ordenes
            </p>
             <div> 
            <h3><ListadoProductos/></h3>
             </div>

        </main>
    
       
        <footer className="footer">

        </footer>

        </div>
    </div>
    )
}