import { configureStore } from "@reduxjs/toolkit";
import stdreducer from './StudentDataSlice'

export const store=configureStore({
    reducer:{
        stdReducer:stdreducer
    }
})
