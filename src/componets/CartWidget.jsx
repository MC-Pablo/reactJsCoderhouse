import cart from "../assets/cart.png"
import "./CartWidget.css";

import { Link } from "react-router-dom"


const CartWidget = () => {
    return (
        <div>
            <Link to="/cart">
            <img className="cart" src= { cart} alt = "cart-wg" />    
         </Link>
       
        </div>
    )
};

export default CartWidget