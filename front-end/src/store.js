import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./features/authSlice/loginSlice"
import hotelReducer from "./features/hotelSlice/hotelSlice";
import searchReducer from "./features/searchSlice/searchSlice";


const store = configureStore({
    reducer: {
        login:loginReducer,
        hotels:hotelReducer,
        search:searchReducer,
        // rooms:registrationReducer,
        // user: userReducer,
        // openTicket: newTicketReducer,
        // resetPassword: resetPasswordReducer,
        // allUsers: usersReducer,
        // homeTabs: tabsReducer,
        // closeTicketModal: CloseTicketModalReducer
    }
})

export default store;