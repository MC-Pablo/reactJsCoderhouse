import "./ItemListContainer.css";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, doc, query, where} from "firebase/firestore";

const ItemListContainer = ({ greetings, welcome }) => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const db = getFirestore();
    let refCollection;

    if (!id) { 
      refCollection = collection(db, "items");
    } else { refCollection = query (
      collection (db, "items"),
      where ("categoryid", "==", id)
    );
    }
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


