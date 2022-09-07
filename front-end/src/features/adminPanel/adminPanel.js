import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isAdminPanel: false
}

const adminPanelSlice = createSlice({
    name: "adminPanel",
    initialState,
    reducers: {
        
        AdminPanelMode: (state,action) => {
            state.isAdminPanel = true
        },
        NotAdminPanelMode: (state,action) => {
            state.isAdminPanel = false
        }
    }
})

const { reducer, actions} = adminPanelSlice


export const {
    AdminPanelMode,
    NotAdminPanelMode,
} = actions

export default reducer