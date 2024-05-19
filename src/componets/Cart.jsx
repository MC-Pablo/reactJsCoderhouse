import Container from "react-bootstrap/esm/Container";
import { useContext, useState } from "react";

import { CartContext } from "./Context/CartContext";
import {
  collection,
  addDoc,
  getFirestore,
} from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const { clear, items } = useContext(CartContext);
  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const handleChange = (e) => {
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = () => {
    const order = {
      buyer: values,
      total: total(),
      items: items,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden; " + id + " ha sido completada!");
        }
      })
      .finally(() => {
        setValues(initialValues);
        clear();
      });

  };

  const clearCart = () => {
    clear(); 
    alert("Carrito vaciado!");
  };


  return (
    <Container>
      <h1>Productos</h1>
      {items.map((i) => {
        return (
          <ul key={i.name}>
            <li>Prod:{i.name}</li>
            <li>Cantidad:{i.quantity}</li>
            <li>$ {i.price}</li>
          </ul>
        );
      })}
      <div>Total: {total()} </div>
      {items?.length > 0 && (
        <form action="">
          <label>Nombre</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label>Teléfono</label>
          <input
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </form>
      )}
    </Container>
  );
};
