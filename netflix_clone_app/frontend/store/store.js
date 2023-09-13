import { configureStore } from "@reduxjs/toolkit";
import { listReducers } from "./favouriteListSlice";

const store = configureStore({
    reducer: {
        favList: listReducers
    }
})

export default store;