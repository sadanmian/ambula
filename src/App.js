import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import ToDoList from "./pages/to-do-list/ToDoList";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/todolist" element={<ToDoList />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
