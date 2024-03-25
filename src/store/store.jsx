import { configureStore } from '@reduxjs/toolkit'
import newsReducer from '../reducers/NewsSlice'
import flightsReducer from '../reducers/FlightsSlice'

export const store = configureStore({
    reducer: {
        news: newsReducer,
        flights: flightsReducer
    },
})