import Container from "react-bootstrap/esm/Container"
import { ItemCount } from "./ItemCount"

export const  ItemDetail = ({product}) =>{ 

    const add = (quantity) => {
        console.log(product, quantity);
    };
    return (
        <Container>
      <div>
      <h1>{product.name}</h1>
      <div>
  
        <img src={product.imageId} alt={product.name} />
        <div>{`Stock ${product.stock}`}</div>
        <div>{`Precio ${product.price}`}</div>
      </div>
      </div>
      <ItemCount stock={product.stock} onAdd={add}/> 
    </Container>
    )
}