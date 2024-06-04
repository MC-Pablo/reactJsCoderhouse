import cart from "../Assets/carts/cart3.png";
import "./CartWidget.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";

const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, element) => acc + element.quantity, 0);
  return (
    <div className="cartContainer">
      <Link to="/cart">
        <img className="cart" src={cart} alt="cart-wg" />
      </Link>
    </div>
  );
};

export default CartWidget;
