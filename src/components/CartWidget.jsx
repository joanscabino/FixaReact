import {Link} from "react-router-dom" 
import cart from "../assets/logito.png"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContexts";



export const CartWidget = () => {
    const {items} = useContext(CartContext)

    const total = items.reduce((acumulador,valorActuar) => acumulador + valorActuar.quantity, 0);

    return (
        <Link to="/cart">
            <img src={cart} alt="Logo" width = {30} />
            <span>{total}</span>
        </Link>
    );
}; 