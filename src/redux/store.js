import { configureStore } from "@reduxjs/toolkit";
import dictionaryListReducer from "./ListReducer"

export default configureStore({
    reducer: {
        dictList: dictionaryListReducer,
    },
})