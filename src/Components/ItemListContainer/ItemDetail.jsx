import Container from "react-bootstrap/esm/Container";

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => {
    addItem(product, quantity);
    
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
      <ItemCount/>
    </Container>
  );
};


/* <div class="container">
    
      <div class="card">
        <img
          src={product.imageId}
          alt="Person"
          class="card__image"
        />
        <p class="card__name">{product.name}</p>
        <div class="grid-container">
          <div class="grid-child-posts">{product.description}</div>
        </div>
        <Link to={`/item/${product.id}`}>
        <button class="btn draw-border">Ver detalles</button>
        </Link>
        </div>
      
    </div> */