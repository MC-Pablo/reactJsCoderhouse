import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDec = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleInc = () => {
    if (stock > quantity) setQuantity((prev) => prev + 1);
  };

  const handleAdd = () => {
    onAdd (quantity);
    setQuantity(1)
  }

  return (
    <div>
      <div onClick={handleDec}>-</div>
      <input type="number" value={quantity} readOnly />
      <div onClick={handleInc}>+</div>
      <button type="button" onClick={handleAdd}>Agregar al carrito </button>
    </div>
  );
};
