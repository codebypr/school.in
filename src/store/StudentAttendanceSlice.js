import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState={
    attendance:[
        {
            id:'1',
            date:'2000-05-02',
            att:'P'
        },
        {
            id:'1',
            date:'2000-05-03',
            att:'A'
        },
        {
            id:'1',
            date:'2000-11-12',
            att:'H'
        },
        {
            id:'1',
            date:'2000-04-30',
            att:'A'
        },
    ]
}

export const StudentAttendanceSlice=createSlice({
    name:'attemdance',
    initialState,
    reducers:{
        addAttendance:(state,action)=>{
            axios.post('http://localhost:3000/sendattendance',action.payload)
            .then(res=>console.log( "Attendence successfuly added !"))
            .catch(err=>console.log(" Attendence not added ! "+err))
        },

        sendAttToStore:(state,action)=>{
            const data = action.payload;
            state.attendance = data;
        }
    }
})

export const {addAttendance,sendAttToStore} = StudentAttendanceSlice.actions
export default StudentAttendanceSlice.reducer