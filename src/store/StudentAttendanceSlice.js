import { createSlice } from "@reduxjs/toolkit"

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
            const att={
                id:action.payload.id,
                date:action.payload.date,
                att:action.payload.att,
            }
            state.attendance.push(att);
        }
    }
})

export const {addAttendance} = StudentAttendanceSlice.actions
export default StudentAttendanceSlice.reducer