import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./features/authSlice/loginSlice"
import registerReducer from "./features/authSlice/registerSlice"
import hotelReducer from "./features/hotelSlice/hotelSlice";
import searchReducer from "./features/searchSlice/searchSlice";
import selectedSidebarReducer from "./features/selectedSidebar/selectedSidebarSlice";
import roomReducer from "./features/roomSlice/roomSlice";
import adminPanelReducer from "./features/adminPanel/adminPanel";
import usersReducer from "./features/usersSlice/usersSlice";
import flightReducer from "./features/flightsSlice/flightSlice";
import flightUserDetailsReducer from "./features/flightUserDetails/flightUserDetailsSlice";
import cartReducer from "./features/cartSlice/cartSlice";
import BookingReducer from "./features/bookingSlice/bookingSlice";







const store = configureStore({
    reducer: {
        login:loginReducer,
        register:registerReducer,
        hotels:hotelReducer,
        search:searchReducer,
        rooms:roomReducer,
        adminPanelMode:adminPanelReducer,
        users: usersReducer,
        selectedSidebar: selectedSidebarReducer,
        flights:flightReducer,
        flightsUserDetail:flightUserDetailsReducer,
        cart:cartReducer,
        booking: BookingReducer

    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
    serializableCheck: false,
    }),
})

export default store;