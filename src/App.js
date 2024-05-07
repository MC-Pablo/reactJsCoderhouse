
import NavBar from "./componets/NavBar/NavBar";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./componets/ItemListContainer/ItemDetailContainer";
import { Provider } from "./componets/Context/CartContext";




function App() {
  return (
    <Provider>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
