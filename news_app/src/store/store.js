import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./categorySlice";

const store = configureStore({
    reducer: {
        category: newsReducer
    }
})

export default store;