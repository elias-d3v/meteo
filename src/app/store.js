import {configureStore} from '@reduxjs/toolkit'
import { favorisSlice } from '../features/favoris/favorisSlice'

export const store = configureStore({
    reducer: {
        favoris: favorisSlice.reducer
    }
})