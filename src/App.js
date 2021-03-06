import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Login from "./components/Login/Login";
import MyItems from "./components/MyItems/MyItems";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ItemDetails />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
