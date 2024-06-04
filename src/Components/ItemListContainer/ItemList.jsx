import { Item } from "./Item";
import "../ItemListContainer/ItemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="containerRanderizedItems">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};
