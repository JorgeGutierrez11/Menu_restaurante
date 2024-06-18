import '../styles/Cart.css'

import { useId, useState } from "react";
import { Link } from 'react-router-dom';
import { CartIcon, ClearCartIcon, LoginIcon } from "./Icons";
import { useCart } from "../Hooks/useCart.js";

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    const [cartCopy, setCartCopy] = useState([]);
    const handleCopyCart = () => {
        setCartCopy([...cart]);
        localStorage.setItem('cartCopy', JSON.stringify(cartCopy)); // Almacenar cartCopy en el almacenamiento local
    };

    function CartItem({ thumbnail, price, title, quantity, addToCart }) {
        return (
            <li>
                <img
                    src={thumbnail}
                    alt={title} />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>

                <footer>
                    <small> Qty: {quantity} </small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>
        )
    }

    return (
        <>
            <Link to="/login">
                <label className="login-button Btn">
                    <span className="IconContainer ">
                        < LoginIcon />
                    </span>
                    <p className="text">Login</p>
                </label>
            </Link>

            <label className="cart-button Btn" htmlFor={cartCheckboxId}>
                <span className="IconContainer ">
                    < CartIcon />
                </span>
                <p className="text">Carrito</p>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart" >
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
                <div className='btnCartStyle'>
                    <button onClick={handleCopyCart} className='btnClearCart'>
                        <div>Completar compra</div>
                    </button>
                    <button onClick={clearCart} className='btnClearCart'>
                        <ClearCartIcon />
                    </button>
                </div>
            </aside>
        </>
    )

}
