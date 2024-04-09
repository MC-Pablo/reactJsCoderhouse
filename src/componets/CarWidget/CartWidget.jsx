import cart from "./assets/cart.png";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div>
        <img className="cart" src={cart} alt = "cart-wg" />
        <p className="counter">2</p>
        </div>
    )
};

export default CartWidget