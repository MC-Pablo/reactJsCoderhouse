import "./App.css";
import NavBar from "./componets/NavBar/NavBar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings={'¡Bienvenidxs!'}
      welcome={'El café es una de las bebidas más populares del mundo, con más de 2.200 millones de tazas consumidas cada día. Se cultiva en más de 70 países, y su consumo está creciendo en todo el mundo. El café es una bebida versátil que se puede disfrutar de muchas maneras diferentes. Se puede preparar en una cafetera, en una prensa francesa, o incluso en una cafetera de goteo. También se puede disfrutar solo, con leche, o con azúcar. El café no solo es delicioso, sino que también tiene beneficios para la salud. Se ha demostrado que ayuda a mejorar el estado de alerta, el estado de ánimo, y la capacidad de concentración. El mundo del café es un mundo fascinante que ofrece una gran variedad de sabores y experiencias. Ya sea que seas un bebedor de café experimentado o que estés empezando, hay algo para todos en el mundo del café./p>'}/>
    </div>
  );
}

export default App;
