import {
  Routes,
  Route,
} from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes/ProtectedRoutes";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import AdminHome from "./pages/admin/adminHome/adminHome";
import NewUser from "./pages/admin/newUser/NewUser";
import UserList from "./pages/admin/userList/UserList";
import User from "./pages/admin/user/User";
import NewProduct from "./pages/admin/newProduct/NewProduct";
import ProductList from "./pages/admin/productList/ProductList";
import Product from "./pages/admin/product/Product";
import Register from "./pages/auth/Register";


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="hotels" element={<List/>}/>
      <Route path="login" element={<Auth/>}/>
      <Route path="register" element={<Register/>}/>



      <Route path="/" element={<ProtectedRoutes/>}>        
        <Route path="hotels/:id" element={<Hotel/>}/>
        
        <Route path="admin" element={<AdminHome/>}/>
        <Route path="admin/newUser" element={<NewUser/>}/>
        <Route path="admin/users" element={<UserList/>} />
        <Route path="admin/users/:id" element={<User/>}/>
        <Route path="admin/newProduct" element={<NewProduct/>} />
        <Route path="admin/products/" element={<ProductList/>} />
        <Route path="admin/products/:id" element={<Product/>}/>

      </Route>
    </Routes>

  );
}

export default App;
