import "./ItemListContainer.css";

import data from "./data/products.json";

import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings, welcome }) => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    promise1.then((data) => {
        if(!id){
            setProducts(data);
        } else {
            const filtered = data.filter ((p)=>p.category === id);
            setProducts(filtered);
        }
      
    });
  }, []);

  return (
    <div>
      <h1>{greetings}</h1>
      <p>{welcome}</p>
      <div>
        <ItemList products={products}/>
      </div>
    </div>
  );
};

export default ItemListContainer;
