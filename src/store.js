import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterReducer'

const store = configureStore({
    counter: counterReducer 
})

export default store