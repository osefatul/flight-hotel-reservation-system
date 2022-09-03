import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    destination: "",
    date: [],
    options: {
        adult: "",
        children: "",
        room: ""
    }
}

const searchSlice = createSlice ({
    name: 'search',
    initialState,

    reducers: {
        newSearch: (state, action)=>{
            state.destination = action.payload.destination
            state.date = action.payload.date;
            state.options = action.payload.options;
        },

        resetSearch: (state, action)=>{
            state.city = ""
            state.date= ""
            state.options = {
                adult: "",
                children: "",
                room: "",
            }

        },


    }
})

const { reducer, actions} = searchSlice


export const  {
    newSearch,
    ResetSearch
} = actions

export default reducer;