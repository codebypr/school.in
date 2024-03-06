import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    studentData:[
        { id: '1', name: 'Ram ',lname:'kumar',fname:'Kuldeep',dob:'12-01-2000',gender:'Male', clas: '12th',section:'A', phone: '1234567890',state:'Haryana',city:'Sonipat',roll:'101',religion:'hindu',caste:'BC-A' },

        { id: '2', name: 'Shyam rana', clas: '12th',section:'A', phone: '123453330',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'102' },
        { id: '3', name: 'Anand', clas: '2nd',section:'A', phone: '8976564890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'103' },
        { id: '4', name: 'Ram', clas: '10th',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'104' },
        { id: '5', name: 'Rani', clas: '11th',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'105' },
        { id: '6', name: 'Shiva', clas: '5th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'106' },
        { id: '7', name: 'Sahil', clas: '2st',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'107' },
        { id: '8', name: 'Neha', clas: '10th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'108' },
        { id: '9', name: 'Radha', clas: '12th',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'109' },
        { id: '10', name: 'Ram', clas: '1st', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'100' },
        { id: '11', name: 'Ram', clas: '12th',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        
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