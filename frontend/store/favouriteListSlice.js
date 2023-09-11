import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const favouriteListSlice = createSlice({
    name: 'Favourite list',
    initialState: {
        list: [],
        username: '',
        error: ''
    },
    extraReducers: (builder) => {
        builder
        .addCase(postMovieListDetails.fulfilled, (state, action) => {
            state.list.push(action.payload);
        })
        .addCase(postLoginCheck.fulfilled, (state, action) => {
            state.username = action.payload.userName;
            state.list = action.payload.list;
            state.error = action.payload.error;
        })
    }
});

export const listReducers = favouriteListSlice.reducer;

// UPDATE MOVIE LIST.
export const postMovieListDetails = createAsyncThunk('list/post', async(movieDetails, {rejectWithValue}) => {
    console.log(movieDetails.details)
    console.log(movieDetails.username.username)
    try {
        const response = await fetch('http://localhost:3000/updateList',{
            method: 'POST',
            body: JSON.stringify({
                movieDetails: movieDetails.details, 
                username: movieDetails.username.username
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json();
        console.log(data);
        return data;
    } catch(err) {
        rejectWithValue(err)
    }
});

// GET USER DATA
export const postLoginCheck = createAsyncThunk('login/post', async(userDetails, {rejectWithValue}) => {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify({
                username: userDetails.email,
                password: userDetails.password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json();
        console.log(data);
        return data;
    } catch(err) {
        rejectWithValue(err)
    }
})