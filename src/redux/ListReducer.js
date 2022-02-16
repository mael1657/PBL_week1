import { createSlice } from "@reduxjs/toolkit";

// const initialState = [{id:"",text:{word:"",explain:"",example:""}}]

const initState = {
    dicts: [{
        id:"",
        text:{
            word:"",
            explain:"",
            example:""
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
        },
        deleteDict:  (state, action) => {
        },
    },
});

export const { addDict, getDict, updateDict, deleteDict } = ListReducer.actions;

export default ListReducer.reducer;