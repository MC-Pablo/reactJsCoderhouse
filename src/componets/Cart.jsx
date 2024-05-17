import Container from "react-bootstrap/esm/Container";
import { useContext } from "react";

import { CartContext } from "./Context/CartContext";

export const Cart = () => {
  const { items } = useContext(CartContext);
  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  return (
    <Container>
      <h1>Productos</h1>
      {items.map((i) => {
        return (
          <ul key={i.name}>
            <li>Prod:{i.name}</li>
            <li>Cantidad:{i.quantity}</li>
            <li>$ {i.price}</li>
          </ul>
        );
      })}
      ;<div>Total: {total()} </div>
    </Container>
  );
};
