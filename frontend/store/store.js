import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./favouriteSlice";

const store = configureStore({
    reducer: {
        fav: reducer
    }
})

export default store;