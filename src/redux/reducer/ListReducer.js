import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dict: [
        {
            id:1,
            word : "안녕안녕",
            explain : "안녕하세용",
            example : "예시예시",
        },
        {
            id:2,
            word : "뿌에엥",
            explain : "뿌에에에엥",
            example : "뿌에에에에에에ㅔㅇ",
        },
    ]
}

export const ListReducer = createSlice({
    name: "dictionaryList",
    initialState,
    reducers: {}
})

export default ListReducer.reducer;