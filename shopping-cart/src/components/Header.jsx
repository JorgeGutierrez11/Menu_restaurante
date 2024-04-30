import fondo_header from '../Images/fondo_header.jpg';
import { Cart } from '../components/Cart.jsx'
import './Header.css'

export function Header(){
    return (
        <header>
             <img src={fondo_header} alt="Fondo de fresas" />
             <Cart></Cart>
        </header>
    )
}