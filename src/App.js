import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { ShoppingCart } from "./pages/shoppingCart/ShoppingCart";
import { ToDoList } from "./pages/to-do-list/ToDoList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/todolist" element={<ToDoList />}></Route>
          <Route exact path="/shoppingCart" element={<ShoppingCart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
