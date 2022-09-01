import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="hotels" element={<List/>}/>
      <Route path="hotels/:id" element={<Hotel/>}/>
      <Route path="login" element={<Auth/>}/>
    </Routes>

  );
}

export default App;
