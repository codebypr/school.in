import { createSlice } from "@reduxjs/toolkit"

const initialState={
    updatedState:0,
}

export const UpdateStateSlice=createSlice({
    name:'updatedState',
    initialState,
    reducers:{
        setState:(state,action)=>{
            state.updatedState++;
        }
    }
})

export const {setState} = UpdateStateSlice.actions
export default UpdateStateSlice.reducer