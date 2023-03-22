import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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

export type NewsState = {
    news: News,
    newsCardsView: boolean
} 


const initialState: NewsState = {
    news: [],
    newsCardsView: true
}

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
    // incrementByAmount: (state, action: PayloadAction<number>) => {
      
    // },
  },
})

export const { turnOnListView, turnOnCardsView } =newsSlice.actions

export default newsSlice.reducer