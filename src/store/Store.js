import { configureStore } from "@reduxjs/toolkit";
import stdreducer from './StudentDataSlice'
import stdattreducer from './StudentAttendanceSlice'
import updatedstate from './UpdateStateSlice'
import noticeboard from './NoticeBoardSlice'

export const store=configureStore({
    reducer:{
        redUpdatedState:updatedstate,
        stdReducer:stdreducer,
        stdAttReducer:stdattreducer,
        noticeBoard:noticeboard
    }
})
