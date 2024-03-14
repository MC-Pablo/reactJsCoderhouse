
import "./ItemListContainer.css";
const ItemListContainer = ({greetings, welcome}) => {
    return (
        <div>
        <h1>{greetings}</h1>
        <p>{welcome}</p>
        </div>
    )
}

export default ItemListContainer