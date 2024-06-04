
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Components/ItemListContainer/ItemDetailContainer";
import { Provider } from "./Components/Context/CartContext";
import { Cart } from "./Components/Cart";
import { MainPage } from "./Components/MainPage";
import TattoosListContainer from "./ItemTattoos/TattoosListContainer";



function App() {
  return (
    <Provider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/tattoos" element={<TattoosListContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
