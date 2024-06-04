
import "../ItemTattoos/Tattoos.css";

export const Tattoos = ({ product }) => {
  return (
    <div className="container">
      <img className="img" src={product.imageId} alt="" />
    </div>
  );
};
