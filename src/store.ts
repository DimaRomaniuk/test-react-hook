import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './pages/Redux'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})