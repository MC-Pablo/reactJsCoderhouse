import CartWidget from "../CarWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <h2>Primero, el café...</h2>
      <nav>
        <li>
          <button className="btn"> Cafés de especialidad</button>
        </li>
        <li>
          <button className="btn"> Máquinas de café</button>
        </li>
        <li>
          <button className="btn"> Accesorios </button>
        </li>
        <li>
          <CartWidget />
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
