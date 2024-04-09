import data from "./data/products.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ({ greetings, welcome }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    promise2.then((data) => {
      const filter = data.find((p) => p.id === Number (id));
      setProduct(filter);
    });
  }, [id]);

  if (!product) return <div>LOADING</div>;

  return (
    <div>
      <h1>{greetings}</h1>
      <p>{welcome}</p>
      <div>
        <h1> {product.name} </h1>
        <img src={product.img} alt="a" />
      </div>
    </div>
  );
};
