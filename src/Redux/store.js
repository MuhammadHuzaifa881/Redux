import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/counterSlice'
//we have created a redux store here that contain reducer which is responsible to change
//state in the Web application from any where
export const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
  
})