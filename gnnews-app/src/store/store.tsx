import { configureStore } from '@reduxjs/toolkit'
import newsReducer from '../features/newsSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    news: newsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  //concat(logger)
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch