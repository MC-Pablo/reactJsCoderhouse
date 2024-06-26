import "./ItemListContainer.css";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  query,
  where,
} from "firebase/firestore";
import Container from "react-bootstrap/esm/Container";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    let refCollection;

    if (!id) {
      refCollection = collection(db, "items");
    } else {
      refCollection = query(
        collection(db, "items"),
        where("categoryId", "==", id)
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
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
