import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState={
    notices:[]
}

export const NoticeBoardSlice=createSlice({
    name:'notices',
    initialState,
    reducers:{
        addNotice:(state,action)=>{
            axios.post('http://localhost:3000/sendnotice',action.payload)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        }
    }
});

export const {addNotice} = NoticeBoardSlice.actions
export default NoticeBoardSlice.reducer