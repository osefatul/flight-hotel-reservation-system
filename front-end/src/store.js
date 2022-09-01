import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./features/authSlice/loginSlice"
import hotelReducer from "./features/hotelSlice/hotelSlice";

const store = configureStore({
    reducer: {
        login:loginReducer,
        hotels:hotelReducer,
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