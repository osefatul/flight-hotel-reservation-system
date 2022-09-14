import {createSlice} from "@reduxjs/toolkit"

const initialState = {
        selected: 0,
        // unSelected: null,
}

const selectedSidebarSlice = createSlice ({
    name: 'selectedSidebar',
    initialState,

    reducers: {
        getSelected: (state, action)=>{
            state.selected = action.payload
        
        },

        getUnselected: (state, action)=>{
            state.selected = null
        },

    }
})

const { reducer, actions} = selectedSidebarSlice


export const  {
    getSelected,
    getUnselected
} = actions

export default reducer;