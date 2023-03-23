import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export type News = {
    source: {
        id: string | null,
        name: string
    },
    author: string | null,
    title: string,
    description: string | null,
    url: string,
    urlToImage: string | null,
    publishedAt: string,
    content: string | null
}[]

export type Response = {  
    status: string,
    code: string | null,
    message: string | null,
    totalResults: number | null,
    articles: News | null   
}

export type NewsState = {
    news: News | null,
    newsCardsView: boolean,
    loading: boolean,
    error: string
} 

const initialState: NewsState = {
    news: [],
    newsCardsView: true,
    loading: false,
    error: ""
}

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY

export const fetchNews = createAsyncThunk('fetchNews', async (country_code: string | undefined) => {
    const { data } = await axios.get<Response>(
        `https://newsapi.org/v2/top-headlines?country=${country_code}&apiKey=${API_KEY}`
        );
    return data;
})


export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    turnOnListView: (state) => {
        if (state.newsCardsView) state.newsCardsView = !state.newsCardsView
    },
    turnOnCardsView: (state) => {
        if (!state.newsCardsView) state.newsCardsView = !state.newsCardsView
    },
    clearNews: (state) => {
        state.news = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state, action) => {
        state.loading = true;
        state.error = ""
    });
    builder.addCase(fetchNews.fulfilled, (state, action: PayloadAction<Response>) => {
        state.news = action.payload.articles;
        state.loading = false;
    })
    builder.addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error fetching news"
    })
    }
})

export const { turnOnListView, turnOnCardsView, clearNews } = newsSlice.actions


export default newsSlice.reducer