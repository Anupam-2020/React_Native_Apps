import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'Favourites',
    initialState: [],
    reducers: {
        addToFavs: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const actions = favouriteSlice.actions;
export const reducer = favouriteSlice.reducer;