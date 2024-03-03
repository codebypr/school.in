import { configureStore } from "@reduxjs/toolkit";
import stdreducer from './StudentDataSlice'
import stdattreducer from './StudentAttendanceSlice'

export const store=configureStore({
    reducer:{
        stdReducer:stdreducer,
        stdAttReducer:stdattreducer
    }
})
