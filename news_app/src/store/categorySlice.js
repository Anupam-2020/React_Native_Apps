import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/';

const newsSlice = createSlice({
    name: 'News',
    initialState: {
        news: [],
        loading: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(getNews.fulfilled, (state, action) => {
            state.news = action.payload;
            state.loading = false
        })
        .addCase(getNews.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getNews.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false
        })
        .addCase(getNewsFromInput.fulfilled, (state, action) => {
            state.news = action.payload;
            state.loading = false
        })
        .addCase(getNewsFromInput.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getNewsFromInput.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
})

export const newsReducer = newsSlice.reducer;

// search by category
export const getNews = createAsyncThunk('News/get', async (category, {rejectWithValue}) => {
    try {
        const response = await fetch(`${BASE_URL}top-headlines?country=in&apiKey=${API_KEY}&category=${category}`);
        const data = await response.json();
        // console.log(data.articles);
        return data.articles;
    } catch(err) {
        rejectWithValue(err);
    }
});

// search by input query.
export const getNewsFromInput = createAsyncThunk('query/get', async (query, {rejectWithValue}) => {
    try {
        const response = await fetch(`${BASE_URL}everything?q=${query}&apiKey=${API_KEY}`)
        const data = await response.json();
        return data.articles;
    } catch(err) {
        rejectWithValue(err);
    }
})