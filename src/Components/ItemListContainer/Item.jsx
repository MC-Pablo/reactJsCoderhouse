import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

import { Link } from "react-router-dom";
import "../ItemListContainer/Item.css";

export const Item = ({ product }) => {
  return (
    <figure class="image-block">
      <h1>{product.name}</h1>
      <img
        src={product.imageId}
        alt=""
      />
      <figcaption>
        <h3>Detalles</h3>
        <p>
        {product.description}
        </p>
        <Link to={`/item/${product.id}`}>
        <button>Comprar</button>
        </Link>
      </figcaption>
    </figure>
  );
};

/* 

   <div className="row"> 
    <Card style={{ width: "18rem" }} className="col-sm-4">
      <Card.Img variant="top" src={product.imageId
      } />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button variant="primary">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
   */
