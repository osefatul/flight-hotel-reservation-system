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
import NewUser from "./pages/admin/users/newUser/NewUser";
import UserList from "./pages/admin/users/userList/UserList";
import User from "./pages/admin/users/user/User";
import HotelDetails from "./pages/admin/hotels/hotel/HotelDetails";
import Register from "./pages/auth/Register";
import HotelList from "./pages/admin/hotels/hotelList/HotelList";
import NewHotel from "./pages/admin/hotels/newHotel/NewHotel";
import RoomsList from "./pages/admin/rooms/roomsList/RoomsList";
import NewRoom from "./pages/admin/rooms/newRoom/NewRoom";
import ReservedRoom from "./pages/admin/rooms/reservedRoom/ReservedRoom";
import TravelHome from "./pages/TravelPages/homePage/TravelHome";
import Booking from "./pages/TravelPages/booking/Booking";
import Payments from "./pages/TravelPages/payments/Payments";
import CheckoutSuccess from "./pages/TravelPages/payments/stripeCheckout/CheckoutSuccess";
import Cart from "./pages/cart/Cart";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import FlightsList from "./pages/admin/flights/FlightsList";
import Flights from "./pages/admin/flights/Flights";
import NewFlight from "./pages/admin/flights/NewFlight";
import OrdersList from "./pages/admin/orders/OrdersList";
import BookingList from "./pages/admin/bookings/BookingList";


function App() {
  return (
    
    <Routes>
      {/* Public Routes that can be accessed anytime */}
      <Route path="/" element={<Home/>}/>
      <Route path="hotels" element={<List/>}/>
      <Route path="login" element={<Auth/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="flights" element={<TravelHome/>}/>

    {/* Routes that can't be accessed without getting login. */}

      <Route path="/" element={<ProtectedRoutes/>}>        
        <Route path="admin" element={<AdminHome/>}/>
        <Route path="admin/newUser" element={<NewUser/>}/>
        <Route path="admin/users" element={<UserList/>} />
        <Route path="admin/users/:id" element={<User/>}/>

        <Route path="admin/new-hotel" element={<NewHotel/>} />
        <Route path="admin/hotels/" element={<HotelList/>} />
        <Route path="admin/hotels/:id" element={<HotelDetails/>}/>

        <Route path="admin/new-room/" element={<NewRoom/>}/>
        <Route path="admin/rooms/" element={<RoomsList/>}/>
        <Route path="admin/reserved-rooms/" element={<ReservedRoom/>}/>

        <Route path="admin/flights/" element={<FlightsList/>}/>
        <Route path="admin/newFlight/" element={<NewFlight/>}/>
        <Route path="admin/flights/:id" element={<Flights/>}/>

        <Route path="admin/bookings/" element={<BookingList/>}/>
        <Route path="admin/orders/" element={<OrdersList/>}/>

        <Route path="hotels/:id" element={<Hotel/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="order-history" element={<OrderHistory/>}/>
        <Route path="booking" element={<Booking/>}/>
        {/* <Route path="payments" element={<Payments/>}/> */}
        <Route path="checkout-success" element={<CheckoutSuccess/>}/>

      </Route>
    </Routes>

  );
}

export default App;
