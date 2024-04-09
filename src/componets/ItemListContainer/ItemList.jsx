import {Item} from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className='cards'>
      {products.map((product) => (
        <Item key= {product.id} product={product}/>
      ))}
    </div>
  );
};
