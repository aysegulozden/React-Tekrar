import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './counterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})