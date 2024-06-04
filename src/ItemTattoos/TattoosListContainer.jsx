import "../ItemTattoos/TattoosListContainer.css"
import { TattoosList } from "./TattoosList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { dataBase } from "..";


const TattoosListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
   
    let refCollection = collection (dataBase, "art")

    getDocs(refCollection)
    .then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id]);

  return (
    <main>
      <TattoosList products={products} />
      </main>
  );
};

export default TattoosListContainer;