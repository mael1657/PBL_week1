import { createSlice } from "@reduxjs/toolkit";


const initState = {
    dicts: [{
        id:"",
        text:{
            word:"",
            explain:"",
            example:"",
            date:"",
        }
    },]
}

export const ListReducer = createSlice({
    name: "dictList",
    initialState: initState,
    reducers: {
        addDict: (state, action) => {
            state.dicts = action.payload
        },
        getDict: (state, action) => {
            state.dicts = action.payload
        },
        updateDict: (state, action) => {
            state.dicts = action.payload
        },
        deleteDict:  (state, action) => {
            state.dicts = action.payload
        },
    },
});

export const { addDict, getDict, updateDict, deleteDict } = ListReducer.actions;

export default ListReducer.reducer;