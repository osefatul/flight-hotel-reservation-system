import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./features/authSlice/loginSlice"

const store = configureStore({
    reducer: {
        login:loginReducer,
        // hotels:ticketReducer,
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