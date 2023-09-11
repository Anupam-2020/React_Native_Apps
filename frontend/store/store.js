import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./favouriteSlice";
import { listReducers } from "./favouriteListSlice";

const store = configureStore({
    reducer: {
        fav: reducer,
        favList: listReducers
    }
})

export default store;