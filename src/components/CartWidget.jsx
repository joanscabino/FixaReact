import {Link} from "react-router-dom" 
import cart from "../assets/logito.png"



export const CartWidget = () => {

    return (
        <Link to="/cart">
            <img src={cart} alt="Logo" width = {30} />
            <span>3</span>
        </Link>
    );
}; 