import { configureStore } from "@reduxjs/toolkit";
import stdreducer from './StudentDataSlice'
import stdattreducer from './StudentAttendanceSlice'
import updatedstate from './UpdateStateSlice'

export const store=configureStore({
    reducer:{
        redUpdatedState:updatedstate,
        stdReducer:stdreducer,
        stdAttReducer:stdattreducer,
       
    }
})
