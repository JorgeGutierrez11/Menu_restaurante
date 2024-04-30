import { Formulario } from './Login/formulario';
import { Home } from './Login/Home';
import { useState } from 'react';

function App() {

  const [nombre,setNombre]=useState([])
  return (
   <>
   {
    !nombre.length>0
    ?<Formulario setNombre={setNombre}/>
    :<Home setNombre={setNombre}/>
   }
    </>
  )
}
export default App;
