import { configureStore } from "@reduxjs/toolkit";
import updatedstate from './UpdateStateSlice'

export const store=configureStore({
    reducer:{
        redUpdatedState:updatedstate,
       
    }
})
