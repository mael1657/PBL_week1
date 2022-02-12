import { configureStore } from "@reduxjs/toolkit";
import dictionaryListReducer from "../reducer/ListReducer"

export default configureStore({
    reducer: {
        dictionaryList: dictionaryListReducer,
    },
})