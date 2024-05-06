import "./ItemListContainer.css";
import data from "./data/products.json";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, doc, query, where} from "firebase/firestore";

const ItemListContainer = ({ greetings, welcome }) => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "items");

    getDocs(refCollection).then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, [id]);

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


