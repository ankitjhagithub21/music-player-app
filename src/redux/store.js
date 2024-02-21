import { configureStore } from '@reduxjs/toolkit'
import songReducer from "../redux/slices/songSlice"

export const store = configureStore({
  reducer: {
    song:songReducer
  },
})