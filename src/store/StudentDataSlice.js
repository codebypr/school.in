import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    studentData:[
        { id: '1', name: 'Ram ',lname:'kumar',fname:'Kuldeep',dob:'12-01-2000',gender:'Male', clas: '12th',section:'A', phone: '1234567890',state:'Haryana',city:'Sonipat',roll:'101',religion:'hindu',caste:'BC-A' },

        
    ]
}

export const StudentDataSlice=createSlice({
    name:'student',
    initialState,
    reducers:{
            addNewStudent:(state,action)=>{
             
                axios.post('http://localhost:3000/sendstudentinfo',action.payload)
                 .then(res=>console.log( "new student successfuly added !"))
                 .catch(err=>console.log("new student not added ! "+err))
            },

            editStudentDetails:(state,action)=>{
                const id = action.payload.id;
                axios.put('http://localhost:3000/editstudentinfo/'+id,action.payload)
                 .then(res=>console.log( "Edit student successfuly !"))
                 .catch(err=>console.log(" student not edit ! "+err))
                 
            },

            readStudentData:(state,action)=>{
                const data=action.payload;
                state.studentData=data;
            }
    }
})

export const {addNewStudent,readStudentData,editStudentDetails} =StudentDataSlice.actions
export default StudentDataSlice.reducer