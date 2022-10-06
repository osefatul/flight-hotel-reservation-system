import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    usersStats: [],
    requestedUser:{},
    isLoading: false,
    error: "",
    searchUsersList: [],
};

const userSlice = createSlice({
        name: "users",
        initialState,
        reducers: {
    getUsersPending: (state) => { 
        state.isLoading = true;
    },
    getRequestedUserSuccess: (state, { payload }) => {
        state.isLoading = false;
        state.requestedUser = payload;
        state.error = "";
    },

    getUsersStatsSuccess: (state, { payload }) => {
        state.isLoading = false;
        state.usersStats = payload;
        state.error = "";
    },

    getUsersSuccess: (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
        state.error = "";
        state.searchUsersList = payload;
    },
    getUsersFail: (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
    },
    searchUsers: (state, { payload }) => {
        state.searchUsersList = state.users.filter((row) => {
        if (!payload) return row;

        return (row.name.toLowerCase().includes(payload.toLowerCase()));
        });
    },
},
});




export const {
    getUsersPending,
    getRequestedUserSuccess,
    getUsersSuccess,
    getUsersStatsSuccess,
    searchUsers,
    getUsersFail,

} = userSlice.actions;

export default userSlice.reducer;