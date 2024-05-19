import Container from "react-bootstrap/esm/Container";

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => {
    addItem(product, quantity);
    console.log(addItem);
  };
  return (
    <Container>
      <div>
        <h1>{product.name}</h1>
        <div>
          <img src={product.imageId} alt={product.name} />
          <p>{product.description}</p>
          <div>{`Stock ${product.stock}`}</div>
          <div>{`Precio ${product.price}`}</div>
        </div>
      </div>
      <ItemCount stock={product.stock} onAdd={add} />
    </Container>
  );
};
