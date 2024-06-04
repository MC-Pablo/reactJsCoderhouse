import {Tattoos} from "./Tattoos"
import "../ItemTattoos/TattoosList.css";

export const TattoosList = ({ products }) => {
  return (


    <div className="containerRanderizedItemsTattoos">
      {products.map((product) => (
        <Tattoos key={product.id} product={product} />
      ))}
    </div>
  
  );
};


